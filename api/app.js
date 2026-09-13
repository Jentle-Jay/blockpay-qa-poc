import express from 'express';

const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'blockpay-qa-poc'
  });
});

export default app;