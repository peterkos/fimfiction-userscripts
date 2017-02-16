// ==UserScript==
// @name         Docx Uploader
// @namespace    http://quillnblade.com
// @version      1.0
// @description  Upload a .docx file and grab the corresponding chapter content, then convert to BBCode.
// @author       Kristen "Crystal" Trzonkowski
// @match        http://www.fimfiction.net/chapter/*
// @match        http://www.fimfiction.net/story/*
// @match        https://www.fimfiction.net/chapter/*
// @match        https://www.fimfiction.net/story/*
// @grant        none
// ==/UserScript==

function addMammoth(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "https://rawgit.com/ktrzonkowski/mammoth.js/raw-git/mammoth.browser.min.js");
  script.addEventListener('load', function() {
      var script = document.createElement("script");
      script.textContent = "(" + callback.toString() + ")();";
      document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

(function () {
  addMammoth(function () {
    var button = document.createElement("li");
    button.innerHTML = '<button title="Import from .docx File" id="importdocx_button"><i class="fa fa-file-word-o"></i> Import .docx</button>';
    button.onclick = function () {
      document.getElementById('docxUploader').click();
    };
    document.getElementsByClassName("toolbar_buttons")[0].appendChild(button);

    var input = document.createElement("input");
    input.setAttribute("type", "file");       input.setAttribute("id", "docxUploader");
    input.style.display = "none";
    input.onclick = function () {
      this.value = null;
    };
    input.onchange = function (event) {
      handleFileSelect(event);
    };
    document.body.appendChild(input);

    var loader = document.createElement("div");
    loader.setAttribute("id", "docxLoader");  loader.style.display = "none";
    loader.style.position = "fixed";          loader.style.zIndex = "9999";
    loader.style.backgroundColor = "black";   loader.style.opacity = ".25";
    loader.style.height = "100%";             loader.style.width = "100%";
    loader.style.top = "0";                   loader.style.left = "0";
    document.body.appendChild(loader);

    function handleFileSelect(event) {
      document.getElementById("docxLoader").style.display = "block";

        readFileInputEventAsArrayBuffer(event, function(arrayBuffer) {

        mammoth.convertToHtml({arrayBuffer: arrayBuffer}, {
          styleMap          : [
            "p[style-name='centered'] => p:fresh > center",
            "p[style-name='indented'] => p:fresh > tab",
            "i => i",
            "b => b"
          ],
          runProperties : {
            "isSmallCaps" : {
              func : function (element) { return element.hasElement('w:smallCaps'); },
              elementType : "smallcaps",
              defaultTagName : "smcaps"
            }
          },
          paragraphProperties : {
            "isIndented" : {
              func : function (element) { return element.hasElement('w:ind'); }
            }
          },
          transformDocument : mammoth.transforms.paragraph(function (element) {
            if (element.alignment == "center" && !element.styleId) {
              element.styleName = "centered";
            }

            if (element.isIndented) {
              element.styleName = "indented";
            }

            return element;
          })
        }).then(displayResult).done();
      });
    }

    function displayResult(result) {
        var chapterFound = false,
            fimTitle = document.getElementsByName('title')[0].value,
            chapterDelimiter = 0;

        for (var i = 1, len = 6; i <= len; i++) {
          if (result.value.indexOf('<h' + i + '>') >= 0) {
            chapterDelimiter = i;
            break;
          }
        }

        if (chapterDelimiter == 0) {
          alert('No applicable chapter headers found.  Ensure your chapters are marked with a Heading style.');
          return false;
        }

        var story = result.value.split('<h' + chapterDelimiter + '>');

        console.log('Looking for a chapter titled ' + fimTitle);

        for (var i = 0, len = story.length; i < len; i++) {
          var tmp = story[i].split('</h' + chapterDelimiter + '>');

          console.log('Checking ' + tmp[0].replace(/<(?:.|\n)*?>/gm, '').substr(0, 25) + '...');

          if (tmp[0].replace(/<(?:.|\n)*?>/gm, '') == fimTitle) {
            var chapter = tmp[1];

            console.log('Chapter found!  Updating editor with new content.');

            chapter = chapter.replace(/<\/p><p>/g, "\r\n\r\n");                              // Convert paragraphs to double breaks
            chapter = chapter.replace(/<i>([^>]*)<\/i>/g, "[i]$1[/i]");                      // Convert italics to bbcode
            chapter = chapter.replace(/<b>([^>]*)<\/b>/g, "[b]$1[/b]");                      // Convert bold to bbcode
            chapter = chapter.replace(/<smcaps>([^>]*)<\/smcaps>/g, "[smcaps]$1[/smcaps]");  // Convert small caps to bbcode
            chapter = chapter.replace(/<center>([^>]*)<\/center>/g, "[center]$1[/center]");  // Convert center to bbcode
            chapter = chapter.replace(/<tab>([^>]*)<\/tab>/g, "\t$1");                       // Prepend tabs to indented paragraphs
            chapter = chapter.replace(/<(?:.|\n)*?>/gm, '');                                 // Strip any leftover tags

          document.getElementById('chapter_editor').value = chapter;
          chapterFound = true;
          break;
        }
      }

      if (!chapterFound) {
        alert('No chapter was found with the title ' + fimTitle + '.');
      }

      document.getElementById('docxLoader').style.display = 'none';
    }

    function readFileInputEventAsArrayBuffer(event, callback) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function(loadEvent) {
        var arrayBuffer = loadEvent.target.result;
        callback(arrayBuffer);
      };

      reader.readAsArrayBuffer(file);
    }
  });
})();
