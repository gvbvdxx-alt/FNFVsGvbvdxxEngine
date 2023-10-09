var fs = require("fs");
var path = require("path");
var files = fs.readdirSync("./");
files.forEach((file) => {
	try{
var fs = require("fs");
var path = require("path");
var curfile = file;
if (fs.existsSync(path.join(curfile,"Inst.ogg"))) {

		var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
var ffmpeg = require('fluent-ffmpeg')
  , fs = require('fs')
  ffmpeg.setFfmpegPath(ffmpegPath)
var outStream = fs.createWriteStream(path.join(curfile,"Inst.mp3"));

ffmpeg()
  .input(path.join(file,"Inst.ogg"))
  .audioQuality(1280000)
  .toFormat("mp3")
.on('start', () => console.log('Audio Transcoding Starting '+ curfile + " Inst"))
  .on('error', error => console.log(`Encoding Error: ${error.message}`))
  .on('exit', () => console.log('Audio recorder exited'))
  .on('close', () => console.log('Audio recorder closed'))
  .on('end', () => console.log('Audio Transcoding succeeded !'))
  .pipe(outStream, { end: true });
}
		var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
if (fs.existsSync(path.join(curfile,"Voices.ogg"))) {
var ffmpeg = require('fluent-ffmpeg')
  , fs = require('fs')
  ffmpeg.setFfmpegPath(ffmpegPath)
var outStream = fs.createWriteStream(path.join(file,"Voices.mp3"));

ffmpeg()
  .input(path.join(curfile,"Voices.ogg"))
  .audioQuality(1280000)
  .toFormat("mp3")
.on('start', () => console.log('Audio Transcoding Starting '+ curfile + " Voices"))
  .on('error', error => console.log(`Encoding Error: ${error.message}`))
  .on('exit', () => console.log('Audio recorder exited'))
  .on('close', () => console.log('Audio recorder closed'))
  .on('end', () => console.log('Audio Transcoding succeeded !'))
  .pipe(outStream, { end: true });
		console.log(`Converted "${file}"`);
}
	}catch(e){
		
		console.log(`Error trying to convert "${file}"`);
console.log(e);
	}
});
console.log("songs converted");
