const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const streamData = fs.createReadStream(filePath, 'utf-8');
let data = '';
streamData.on('data', (chunk) => (data += chunk));
streamData.on('end', () => console.log(data));
streamData.on('error', (error) => console.log('Error', error.message));
