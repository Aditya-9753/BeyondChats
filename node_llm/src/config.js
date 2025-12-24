import dotenv from "dotenv";
dotenv.config();

export const BACKEND_URL = process.env.BACKEND_API_URL;
export const TARGET_URL = process.env.TARGET_URL;

if (!BACKEND_URL) {
  console.error("❌ BACKEND_API_URL missing in .env");
  process.exit(1);
}
