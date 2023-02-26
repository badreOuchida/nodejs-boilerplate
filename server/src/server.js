const http = require("http");
const app = require("./app");

const { mongoConnect } = require("./utils/connection");

// var env
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  try {
    await mongoConnect();
    server.listen(PORT, () => {
      console.log(`Listeng on port : ${PORT}`);
    });
  } catch (e) {
    console.log("error in starting server");
    console.error(e);
  }
}

startServer();
