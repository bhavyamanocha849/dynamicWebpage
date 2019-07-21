const http = require("http");
const server = http.createServer(function(req, res) {
  // Meta data
  console.log(req.url);
  res.writeHead(200,{"Content-type":"text/plain"});
  res.write("Writing from node server");
  res.end();
});
server.listen(3000);
console.log("Server is listening at port 3000");
