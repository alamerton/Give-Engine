import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import charityRoutes from "./routes/charity.route";

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use("/", charityRoutes);

const port = 5000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default server;
