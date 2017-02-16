# fimfiction-userscripts
Various userscripts for use on FiMFiction.net.  Feel free to log issues or make a pull request if you have any solutions to make these better.

## How to Use

Obtain a userscript add-on for your browser, such as Tampermonkey or Greasemonkey, then download the userscript(s) you want to use.  The add-on should pick them up automatically when you download them.  I think viewing the Raw version of a userscript file on Github will attempt to install it as well, so downloading may not even be necessary.

## docxImporter.user.js
For those who use Word .docx files for their writing, this userscript adds an "Import .docx" button to the chapter editor toolbar.  It will find the corresponding chapter based on the title textbox, convert the XML to BBCode, and put the chapter content into the textarea.

Not a perfect conversion; sometimes adds extra line spaces.  Gets the job done well enough, though!

**Todo**
- [ ] Update mammoth.js fork to give output as BBCode automatically?

## Positivize
Hides all downvote buttons from view.  Just makes the site a happier place, and encourages less negative feelings and behavior!

**Todo**
- [ ] Clean up some of the excess text left over from hiding dislikes
- [ ] Add options to the Settings menu on FiM to toggle settings
- [ ] Add a way to hide comments that have a user-specified threshold of downvotes (similar to how images work in comments—click to show/hide)?

## Sticky Comment Box
Pretty straightforward.  If you're someone who responds to a lot of comments at once, or you like to type your comments as you read the chapter, this will make your comment box stick to the page as you scroll so it's always available.

**Todo**
- [ ] Add a button to the comment box to pop it out/in so I don't have to disable the script whenever I don't want the box floating around.
