// getHTML(cb, options)
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

const printHTML = getHTML.getHTML(requestOptions,
  (res, err) => {
    console.log(res);
  }
);
