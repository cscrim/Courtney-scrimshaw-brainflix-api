import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const router = express.Router();

const filePath = path.resolve("data", "video-details.json");

const readVideos = () => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    console.log("error reading videos file", error);
  }
};

const writeVideos = (videos) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(videos));
  } catch (error) {
    console.log("error writing to videos file", error);
  }
};

router.get("/", (req, res) => {
  const videos = readVideos();
  res.json(videos);
});

router.get("/:id", (req, res) => {
  const videoId = req.params.id;

  try {
    const videos = readVideos();
    const video = videos.find((currentVideo) => currentVideo.id === videoId);

    if (!video) {
      return res.status(404);
    }
    res.json(video);
  } catch (error) {
    res.status(500);
  }
});

router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400);
  }

  try {
    const videos = readVideos();

    const videoAdd = {
      title,
      description,
      id: uuidv4(),
      image: "/images/image0.jpg",
    };

    videos.push(videoAdd);

    writeVideos(videos);

    res.status(201).json(videoAdd);
  } catch (error) {
    res.status(500);
  }
});

export default router;
