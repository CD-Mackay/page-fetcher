const fs = require('fs');
const request = require('request');
let arguments = process.argv.slice(2);
let file = arguments[1];
//initialize data variable
let data;
// Request data from server
const makeFile = function(data) {
  fs.writeFile(file, data, function(err) {
    if (err) return console.log(err);
  });
};

request(arguments[0], (error, response, body) => {
  if (error) {
    console.log('Errors: ', error);
  }
   else if (response.statusCode !== 200) {
     console.log("Something has gone terribly awry");
   }
   else console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${file}`);
   


  // Save html body as data variable
  data = body;
  makeFile(data);
});




