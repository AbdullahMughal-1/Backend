import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";

connectDB();
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is runninh at port : ${process.env.PORT}`);
  });
}).catch((err) => {
  console.log("Mongo db connection failedd !!! ", err);
});

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// // Recreate __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load .env from project root
// dotenv.config({ path: path.resolve(__dirname, "../.env") });

// // Constants
// const app = express();
// const PORT = process.env.PORT || 8000;
// const DB_NAME = "videotube"; // ← change if your actual DB name is different
// const MONGODB_URI = process.env.MONGODB_URI;

// // Test connection
// (async () => {
//   try {
//     if (!MONGODB_URI) {
//       throw new Error("❌ MONGODB_URI is undefined. Check your .env file.");
//     }

//     const fullURI = `${MONGODB_URI}/${DB_NAME}`;
//     console.log("🔗 Connecting to:", fullURI);

//     await mongoose.connect(fullURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("✅ MongoDB connected successfully!");

//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("❌ Connection failed:", error.message);
//     process.exit(1);
//   }
// })();
