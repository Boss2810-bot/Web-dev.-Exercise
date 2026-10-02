const fs = require('fs');
const path = require('path');

const targetDir = './testDir';

function organizeFiles(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.error('Unable to read directory:', err);
        }

        files.forEach(file => {
            const filePath = path.join(dirPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err || !stats.isFile()) return;

                const ext = path.extname(file).slice(1); 
                const extDir = path.join(dirPath, ext);
                if (!fs.existsSync(extDir)) {
                    fs.mkdirSync(extDir);
                }
                const destPath = path.join(extDir, file);
                fs.rename(filePath, destPath, err => {
                    if (err) console.error('Error moving file:', err);
                    else console.log(`Moved ${file} to ${ext}/`);
                });
            });
        });
    });
}

organizeFiles(targetDir);
