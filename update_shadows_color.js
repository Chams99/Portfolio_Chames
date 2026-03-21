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
    let originalText = content;
    
    // Replace all #000] inside shadow blocks with var(--brutal-shadow)]
    content = content.replace(/shadow-\[([^\]]+)#000\]/g, 'shadow-[$1var(--brutal-shadow)]');
    // For drop shadows replacing rgba(0,0,0,1)
    content = content.replace(/drop-shadow-\[([^\]]+)rgba\(0,0,0,1\)\]/g, 'drop-shadow-[$1var(--brutal-shadow)]');
    
    if (content !== originalText) {
        fs.writeFileSync(file, content);
        changedFiles++;
    }
});
console.log(`Successfully restored colored shadows in ${changedFiles} files with custom variable.`);
