# Unhandled Promise Rejection in Node.js despite try...catch

This repository demonstrates a scenario where an unhandled promise rejection occurs in Node.js even when a try...catch block is used to handle potential errors during an external API call.

## Bug Description
The provided `bug.js` file contains a simple HTTP server.  When an asynchronous function calling an external API is added, an unhandled promise rejection error might occur, even though a try...catch block is implemented.  This is a common issue stemming from how promises and asynchronous operations behave in Node.js.

## Solution
The solution involves proper handling of promise rejections using `.catch()` on the promise itself, rather than relying solely on a try...catch block around the asynchronous operation.  The `bugSolution.js` file shows the correct implementation.

## How to reproduce
1. Clone this repository.
2. Run `bug.js` to start the server (This should work correctly).
3. Modify the `bug.js` file to include an async function with a call to an external API. Introduce an error or a rejected promise in the API call (e.g., using an incorrect URL).
4. Observe the Unhandled Promise Rejection.
5. Refer to `bugSolution.js` for the correct solution to handle this scenario properly.