const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const filePath = process.argv[3];


request(URL, (error, response, body) => {
  if (error) {
    console.log(`error: ${error}`);
  }
  fs.writeFile(filePath, body, (error) => {
    if (!error) {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
    else {
      console.log(`error: ${error}`);
    }
  });
});