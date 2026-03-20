import dotenv from "dotenv";
import dns from "node:dns";
import app from "./src/app.js";
import connectDB from "./src/config/connectDB.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
