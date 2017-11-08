const { exec } = require('child_process');
const path = require('path');

module.exports = (scriptName) => {
  exec('bash '+scriptName, {
    cwd: process.cwd()
  }, (error, stdout, stderr) => {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error != null) {
      console.log('exec error: ' + error);
    }
  });
}