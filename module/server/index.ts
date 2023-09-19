import express from 'express';
import proxy from '../proxy/index.js';

const app = express();

app.use(proxy);

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.get('/api', (req, res) => {
  // add more work
});

export default app;
