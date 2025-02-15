import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./config/database.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

const PORT = process.env.PORT || 5000;

// Starting server
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("Error:", err));
