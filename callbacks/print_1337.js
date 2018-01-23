var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var leet = {a : '4', e : '3', l : '1',
            o : '0', s : '5', t : '7',
            'ck' : 'x', 'er' : '0r', 'you' : 'j00'};

// assuming that we use getHTML we have parsed data presented as a string!
function print1337 (html) {
  var leetString = "";

  // go through each char in html
  for (let item of html) {
    // if item (as a string) matches with leet as a key
    if (leet[item]) {
      // append the value of the key to leetString
      leetString += leet[item];
    } else {
      leetString += item
    }
  }

  console.log(leetString);
}

getHTML.getHTML(requestOptions, print1337);
