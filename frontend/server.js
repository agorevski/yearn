const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the same directory (dist/ in production)
app.use(express.static(path.join(__dirname), { index: 'index.html' }));

// SPA fallback: serve index.html for all unmatched routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
