const fs = require('fs');
const request = require('request');
let arguments = process.argv.slice(2);
//initialize data variable
let data;
// Reqeust data from server
request(arguments[0], (error, response, body) => {
  if (error) {
  console.log('Error: ', error);
  }
  // console.log('StatusCode:', response.statusCode);
  // console.log('Body: ', body);
  // Save html body as data variable
  data = body;
  console.log("Data: ", data);
});
console.log("Data: ", data);

let file = arguments[1];
fs.writeFile(file, data, function(err) {
  if (err) return console.log(err);
  console.log("Data added!");
  console.log(`${data} >>> ${file}`);
});
