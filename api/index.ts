import express from 'express';
import { apiRouter } from '../server/routes.ts';

const app = express();

// Global CORS headers for cross-origin and PWA access
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Handle both /api/users/register and /users/register
app.use('/api', apiRouter);
app.use('/', apiRouter);

export default app;
