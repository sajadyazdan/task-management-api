import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

const PORT = process.env.PORT || 5000;

// Starting server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
