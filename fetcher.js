const fs = require('fs');
const request = require('request');
const readline = require('readline')
// const site = ;

request(process.argv[2], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
	const data = body;		
	
	if (process.argv[3].exists()) {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		})

		rl.question('File already exists. Overwrite? (yes/no)', (answer) => {
			if (answer === yes) {
				fs.writeFile(process.argv[3], data, (err) => {
					if (err) throw err; 
			
					}
		})

		})

  });

  fs.stat(process.argv[3], function(err, stats) {

    console.log("downloaded and saved " + stats.size + " bytes to " + process.argv[3]);
	});
	
	if
});
	





// fs.stat;
// // Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.

// Use the request library to make the HTTP request
// Use Node's fs module to writecd the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)

// While it is easier to use the writeFileSync function, it is considered bad practice to use sync versions of functions that ought to be async. Please avoid it.

// Once you have the base case working, take a look at some of the edge cases below.

// EXPECTED OUTPUT:

// node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html