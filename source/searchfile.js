const readline = require("readline");
const fs = require("fs");
const path = require("path");
var process = require("process");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var searchterm = "";
function search(dir) {
	fs.readdirSync(dir).forEach((file) => {
		var real = path.join(dir,file);
		if (fs.statSync(real).isDirectory()) {
			search(real);
		} else {
			try{
				var line = fs.readFileSync(real).indexOf(searchterm);
				if (line > -1) {
					console.log(`Found term "${searchterm}" in file ${real} at character ${line}`);
				} else {
					
				}
			}catch(e){}
		}
	});
}
rl.question("Search Term:", function(response) {
	searchterm = response;
	search("./");
	process.exit(0);
});