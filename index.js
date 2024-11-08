import express from 'express';
import axios from 'axios';
import cors from 'cors';
import fs from 'node:fs';
import videoRoutes from './routes/videos.js';

const app = express();

const PORT = 8080;

app.use(cors());

app.use(express.json());

app.use(express.static("public"));



// app.get("/", (req, res) => {
//     res.send("server is running on port 8080!");
// });


app.use('/videos', videoRoutes);


app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});