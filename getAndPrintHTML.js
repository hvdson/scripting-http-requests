/*
Step 2 - Printing with Buffered Strings

In another file, create a second function, getAndPrintHTML,
which will look very similar to your first function.
This function should use a buffering technique to

- append each chunk of data to a variable as it is received,
- then console.log the data once all of the data has been received.

Buffering in this context means the technique you've used before (
usually in loops or conditionals) of creating an empty variable and adding data to it.
*/

// code copied from STEP 1
var https = require("https");

function getAndPrintHTML(cb) {

  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

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
});


// look at stretchConceptsWithJohn.js for further concepts
