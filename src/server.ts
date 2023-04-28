import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", charityRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
