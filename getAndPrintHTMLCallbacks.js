/*
Step 4 - Printing with Callbacks

In another file, create a fourth function, getHTML. This function will
look and behave almost the same as your third function, except:

The function definition will now accept a callback as a second parameter.

The function body will invoke (call) the callback when the data is fully received,
in place of the original console.log.

To simplify things for the moment, the callback function printHTML will be defined
below. You just need to ensure it gets passed as an argument when you call getHTML.
*/

// code copied from STEP 3 - already set up for callbacks!!


// getAndPrintHTML will now take 2 parameters (cb, options);
// using callbacks allows the outer scope to access values
// lower within the body of the outer function that we passed
// the callback function to

// GLOBAL VARIABLES
// --------------------------------
var options = {
  host: "sytantris.github.io",
  path: "/http-examples/step4.html"
};

// "require" checks in node_modules for the predefined modules (see NodeJS api)
var https = require("https");

// --------------------------------

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

const printHTML = getAndPrintHTML( (err, res) => {
  console.log(res);
  },
  options
);


// look at stretchConceptsWithJohn.js for further concepts
