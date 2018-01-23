/*  callbacks, arrow functions & promises with John */

// reference printChunks.js
// asynchronous data processed if taken from getAndPrintHTML
// what if we want to process data in series?
// this might give data dropouts
// something with threading??
getAndPrintHTML(() => {
  console.log(data);
  getAndPrintHTML(() => {
    console.log(data);
    getAndPrintHTML(() => {
      console.log(data);
      getAndPrintHTML(() => {
        console.log(data);
        getAndPrintHTML(() => {
          console.log(data);
        })
      })
    })
  })
})

// await makes sure that the funtn to be done
//
const html = await getAndPrintHTML();
const html = await getAndPrintHTML();
const html = await getAndPrintHTML();
const html = await getAndPrintHTML();
const html = await getAndPrintHTML();
const html = await getAndPrintHTML();



// promises (new in JS) does the same as above where it waits till each process finishes
// multithreading??

// wait till all processes are finished
Promise.all([
  getAndPrintHTML,
  getAndPrintHTML,
  getAndPrintHTML,
  getAndPrintHTML
]).then(res => {
  // then take data and do stuff with it
})
