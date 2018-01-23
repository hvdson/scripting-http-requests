/*
Step 5 - Make it a module
Remember that your module needs to export the function so it is available via require.

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

// --------------------------------

function getHTML(cb, requestOptions) {
  var https = require("https");

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

// moved to http-functions.js
// const printHTML = getHTML( (err, res) => {
//   console.log(res);
//   },
//   options
// );

// had to swap parameters around from (options, cb) to (cb, options)
module.exports = {
  getHTML: getHTML
};
