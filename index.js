import express from "express";
import cors from "cors";
import videoRoutes from "./routes/videos.js";

const app = express();

const PORT = 8080;

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use("/videos", videoRoutes);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
