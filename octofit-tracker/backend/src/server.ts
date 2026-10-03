import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import { apiBaseUrl, port } from './config/api.js';
import './config/database.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiBaseUrl });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening at ${apiBaseUrl}`);
});