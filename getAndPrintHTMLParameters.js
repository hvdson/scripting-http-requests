/*
Step 3 - Printing with parameters

In another file, create a third function, getAndPrintHTML, which will look very similar
to your second function, but accepts a paramater, options, which is an object that contains
values for the host and path, exactly like requestOptions. Reuse whatever code you need from
part 2 - we're still getting and printing the HTML.

*/



var options = {
  host: "sytantris.github.io",
  path: "/http-examples/step3.html"
};

// code copied from STEP 2
var https = require("https");

function getAndPrintHTML(cb, requestOptions) {

  // callback function using arrow function
  https.request(requestOptions, (response) => {
    var stringBuffer = "";
    response.setEncoding("utf8");
    response.on("data", (chunk) => {
      stringBuffer += chunk;
    });
    response.on("end", () => {
      cb(null, stringBuffer);
    });
    response.on("error", (err) => {
      cb(err);
    });
  }).end();
}

// getAndPrintHTML will now take 2 parameters (cb, options);
const printHTML = getAndPrintHTML( (err, res) => {
  console.log(res);
  },

  options
);


// look at stretchConceptsWithJohn.js for further concepts
