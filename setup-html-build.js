var fs = require("fs");
var path = require("path");
//FOR HTML5 Builds, to add weeks and stuff to the html5 builds, and "convert" ogg files into mp3 files.

var assetsFolder = "./assets/"; //If the asset folder name changes, this will need to be changed also.

function setStageList() {
	var stagefiles = fs.readdirSync(path.join(assetsFolder,"preload/stages/"));
	
	var stages = [];
	
	for (var file of stagefiles) {
		//Just doing extension checks, just in case there is some other unrelated file,
		//Such as text files guding you what diffrent folders mean.
		var extension = file.split(".").pop();
		if (extension) {
			var extensionLC = extension.toLowerCase(); //so I dont have to type out two equal expressions.
			var realname = file.split(".").slice(0,file.split(".").length-1).join("."); //get the "real name" of the file, this also makes it so if the file has periods in its name, it wont get effected.
			if (extensionLC == "json") {
				stages.push(realname);
			}
		}
	}
	
	fs.writeFileSync(path.join(assetsFolder,"preload/data/stageList.txt"),stages.join("\r\n"));
}

function setCharacterList() {
	var characterfiles = fs.readdirSync(path.join(assetsFolder,"preload/characters/"));
	
	var characters = [];
	
	for (var file of characterfiles) {
		var extension = file.split(".").pop();
		if (extension) {
			var extensionLC = extension.toLowerCase();
			var realname = file.split(".").slice(0,file.split(".").length-1).join(".");
			if (extensionLC == "json") {
				characters.push(realname);
			}
		}
	}
	
	fs.writeFileSync(path.join(assetsFolder,"preload/data/characterList.txt"),characters.join("\r\n"));
}

function setWeekList() {
	var weekfiles = fs.readdirSync(path.join(assetsFolder,"preload/weeks/"));
	
	var weeks = [];
	
	for (var file of weekfiles) {
		var extension = file.split(".").pop();
		if (extension) {
			var extensionLC = extension.toLowerCase();
			var realname = file.split(".").slice(0,file.split(".").length-1).join(".");
			if (extensionLC == "json") {
				weeks.push(realname);
			}
		}
	}
	
	fs.writeFileSync(path.join(assetsFolder,"preload/weeks/weekList.txt"),weeks.join("\r\n"));
}

console.log("creating stage list...");
setStageList();
console.log("creating character list...");
setCharacterList();
console.log("creating week list...");
setWeekList();

//from a older script I made, modified to work here.
var files = fs.readdirSync(path.join(assetsFolder,"songs/"));
for (var file of files) {
	try{
		fs.writeFileSync(path.join(assetsFolder,"songs/",file,"Inst.mp3"),fs.readFileSync(path.join(assetsFolder,"songs/",file,"Inst.ogg"))); 
		fs.writeFileSync(path.join(assetsFolder,"songs/",file,"Voices.mp3"),fs.readFileSync(path.join(assetsFolder,"songs/",file,"Voices.ogg"))); 
		console.log(`Converted "${file}"`);
	}catch(e){
		
		console.log(`Error trying to convert "${file}"`);
	}
}
console.log("songs converted");