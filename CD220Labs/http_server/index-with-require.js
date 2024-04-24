const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  let date = today.getDate();
  if (date.getHours() < 7) {
    message = "Go back to sleep, ain't morning yet."
  }
  else if (date.getHours() >= 7 && date.getHours() < 12) {
    message = "Good morning!"
  }
  else if (date.getHours() >= 12 && date.getHours() < 18) {
    message = "Good afternoon!"
  }
  else if (date.getHours() >= 18 && date.getHours() , 22) {
    message = "Good evening!"
  }
  else {
    message = "Good night!"
  };
  res.end(message);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);