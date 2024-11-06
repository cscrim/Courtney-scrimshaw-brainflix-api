import express from 'express';
import axios from 'axios';
import cors from 'cors';
import fs from 'node:fs';
import videoRoutes from './routes/videos.js';

const app = express();

