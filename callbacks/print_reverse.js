var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


// assuming that we use getHTML we have parsed data presented as a string!
function printReverse (html) {
  console.log(html.split("").reverse().join(""));
}

getHTML.getHTML(requestOptions, printReverse);
