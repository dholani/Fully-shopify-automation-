const express = require('express');
const cron = require('node-cron');
require('dotenv').config();
const app = express();

app.get('/dashboard', (req, res) => {
  res.send('Dashboard running with all automations active');
});

cron.schedule(process.env.CRON_SCHEDULE || '0 */6 * * *', () => {
  console.log('Running scheduled automation tasks...');
  // Add code here to fetch affiliate deals, update Shopify, post to social, send emails, etc.
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Replit app running on port ${port}`));