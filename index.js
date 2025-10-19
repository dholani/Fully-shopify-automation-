const express = require('express');
const cron = require('node-cron');
const app = express();

app.get('/dashboard', (req, res) => {
  res.send('Dashboard running with all automations active');
});

cron.schedule(process.env.CRON_SCHEDULE || '0 */6 * * *', () => {
  console.log('Running scheduled automation tasks...');
});

app.listen(process.env.PORT || 8080, () => console.log('App running'));