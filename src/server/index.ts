import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.BACKEND_PORT || 6789;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
