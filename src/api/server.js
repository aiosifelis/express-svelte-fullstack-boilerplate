import express from "express";
import ViteExpress from "vite-express";
const app = express();

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok 2 dashes" });
});

ViteExpress.listen(app, 3000, () => {
  console.log("Server running on port 3000");
});
