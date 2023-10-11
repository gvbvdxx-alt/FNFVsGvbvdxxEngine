var fs = require("fs");
var path = require("path");
var files = fs.readdirSync("./");
for (var file of files) {
	try{
		fs.writeFileSync(path.join(file,"Inst.mp3"),fs.readFileSync(path.join(file,"Inst.ogg"))); 
		fs.writeFileSync(path.join(file,"Voices.mp3"),fs.readFileSync(path.join(file,"Voices.ogg"))); 
		console.log(`Converted "${file}"`);
	}catch(e){
		
		console.log(`Error trying to convert "${file}"`);
	}
}
console.log("songs converted");