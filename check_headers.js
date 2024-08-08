const https = require('https');

const options = {
  hostname: 'preseason-planning.vercel.app',
  port: 443,
  path: '/',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', JSON.stringify(res.headers, null, 2));
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();
