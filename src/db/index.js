// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     console.log(
//       `\n MongoDB connected !! DB-Host:${connectionInstance.connection.host}`
//     );
//   } catch (error) {
//     console.log("Mongoose connetion error ", error);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is undefined. Check your .env file.");
  }

  const fullURI = `${MONGODB_URI}/${DB_NAME}`;
  console.log("🔗 Connecting to:", fullURI);

  try {
    const connectionInstance = await mongoose.connect(fullURI);
    console.log(
      `✅ MongoDB connected! Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
