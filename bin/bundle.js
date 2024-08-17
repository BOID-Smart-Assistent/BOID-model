const fs = require('fs');
const path = require('path');

// Directory containing the files
const directoryPath = path.join('dist/typescript');

// Function to recursively collect all .ts file paths
function collectTsFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
            collectTsFiles(filePath, fileList);
        } else if (file.endsWith('.ts') && !filePath.endsWith('d.ts')&& !filePath.endsWith('index.ts')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Path to your index.ts file
const indexPath = path.join(directoryPath, 'index.ts');

// Read files from the directory
const tsFiles = collectTsFiles(directoryPath);

// Transform file paths for export
const exportStatements = tsFiles.map(file => {
    // Create a relative path from the directoryPath to the file, with Unix-style slashes
    const relativePath = path.relative(directoryPath, file).replace(/\\/g, '/');
    // Remove the file extension
    const importPath = `./${relativePath.substring(0, relativePath.length - 3)}`;
    console.log(file); 
    if (file === 'dist/typescript/typeRegistry.ts') {
    return `export { messageTypeRegistry } from '${importPath}'`;
  }

    return `export * from '${importPath}';`;
}).join('\n');

// Write to index.ts
fs.writeFile(indexPath, exportStatements, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('index.ts has been updated with exports!');
});
