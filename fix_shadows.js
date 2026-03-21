const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(filePath));
        } else if(filePath.endsWith('.tsx') || filePath.endsWith('.ts')) { 
            results.push(filePath);
        }
    });
    return results;
}

const files = walk(path.join(process.cwd(), 'src'));
let changedFiles = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('var(--foreground)')) {
        // Replace dynamic foreground shadow references with hardcoded black
        content = content.replace(/var\(--foreground\)\]/g, '#000]');
        fs.writeFileSync(file, content);
        changedFiles++;
    }
});
console.log(`Successfully fixed shadows in ${changedFiles} files.`);
