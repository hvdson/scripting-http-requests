var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


// assuming that we use getHTML we have parsed data presented as a string!
function printLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML.getHTML(requestOptions, printLowerCase);
