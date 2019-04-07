const server = require("./api/connector.js");

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n** Server Running on port: ${port} **\n`);
});
