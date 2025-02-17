import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./config/database.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

// Starting server
try {
  await sequelize.sync({ alter: true });
  console.log("Database synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (err) {
  console.log("Error:", err);
}
