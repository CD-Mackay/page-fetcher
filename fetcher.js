const fs = require('fs');
const request = require('request');
let arguments = process.argv.slice(2);
let file = arguments[1];

request(arguments[0], (error, response, body) => {
  if (error) {
    // Error message if request fails
    console.log('Error: URL is Invalid');
  } else
  fs.writeFile(file, body, function(err) {
    if (err) {
      // Error message for invalid file path
      console.log("File path is invalid");
      return ;
    } else {
      //Success message :)
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${file}`);
    }
  });
});




