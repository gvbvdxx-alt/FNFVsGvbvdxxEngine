const { spawn } = require("child_process");
const ls = spawn(`cmd.exe`,[""]);
process.stdin.on("data",(data) =>{
	ls.stdin.write(data);
})
ls.stdout.on("data", data => {
    process.stdout.write(data);
});

ls.stderr.on("data", data => {
    process.stdout.write(data);
});

ls.on('error', (error) => {
    console.log(`${error.message}`);
});
ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});