// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
            console.log(err); 
       })
       .on('response', function (response) {                           // Note 3
            console.log('Response Status Code: ', response.statusCode);
            console.log("Response status message: ", response.statusMessage);
            console.log("Content type: ", response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));    