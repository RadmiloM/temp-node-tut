const http = require("http");
const { resourceLimits } = require("worker_threads");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to our home page");
  }
  if (request.url == "/about") {
    response.end("Here is our short history");
  }
  response.end(`<h1>OOps!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href='/'>back home</a>`);
});

server.listen(5000);
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
