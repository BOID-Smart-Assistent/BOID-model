//const fs = require('fs');
//const path = require('path');
//
//// Directory containing the files
//const directoryPath = path.join('dist/typescript');
//
//// Function to recursively collect all .ts file paths
//function collectTsFiles(dir, fileList = []) {
//    const files = fs.readdirSync(dir);
//
//    files.forEach(file => {
//        const filePath = path.join(dir, file);
//        const fileStat = fs.statSync(filePath);
//
//        if (fileStat.isDirectory()) {
//            collectTsFiles(filePath, fileList);
//        } else if (file.endsWith('.ts') && !filePath.endsWith('d.ts')&& !filePath.endsWith('index.ts')) {
//            fileList.push(filePath);
//        }
//    });
//
//    return fileList;
//}
//
//// Path to your index.ts file
//const indexPath = path.join(directoryPath, 'index.ts');
//
//// Read files from the directory
//const tsFiles = collectTsFiles(directoryPath);
//
//// Transform file paths for export
//const exportStatements = tsFiles.map(file => {
//    // Create a relative path from the directoryPath to the file, with Unix-style slashes
//    const relativePath = path.relative(directoryPath, file).replace(/\\/g, '/');
//    // Remove the file extension
//    const importPath = `./${relativePath.substring(0, relativePath.length - 3)}`;
//    console.log(file); 
//    if (file === 'dist/typescript/typeRegistry.ts') {
//    return `export { messageTypeRegistry } from '${importPath}'`;
//  }
//
//    return `export * from '${importPath}';`;
//}).join('\n');
//
//// Write to index.ts
//fs.writeFile(indexPath, exportStatements, (err) => {
//    if (err) {
//        return console.log(err);
//    }
//    console.log('index.ts has been updated with exports!');
//});

const fs = require("fs");
const path = require("path");
const poet = require("ts-poet");

const folder = path.join(__dirname, '../dist', 'typescript');

let modules = [];

const regExp = /export (interface|enum|type|class) (.*)/g;

function getModules(location) {
  
  if (!fs.lstatSync(location).isDirectory()) return;

  const items = fs.readdirSync(location);

  for (const item of items) {
    if (item === 'docs') {
      continue;
    }

    if (!item.endsWith('.ts') || item.endsWith('.d.ts')) {
      getModules(path.join(location, item))
    } else {
      console.log(`${location}/${item}`);
      if(item === 'typeRegistry.ts') {
        modules.push({
          name: 'messageTypeRegistry',
          location: 'typeRegistry'
        })
      }
      else {
        const contents = fs.readFileSync(location + "/" + item).toString();
        const matches = contents.match(regExp);

        matches?.forEach(match => {
          let name = match.replace('export interface', '').replace('export class', '').replace('export enum', '').replace('export type', '').replace('{', '').trim();
          let generic = name.indexOf('<');
          if(generic >= 0) {
            name = name.substring(0, generic);
          }
          let equals = name.indexOf('=');
          if(equals >= 0) {
            name = name.substring(0, equals);
          }

          if(name !== 'DataLoaderOptions' && name !== 'DataLoaders' && name !== 'Exact' && name !== 'DeepPartial') {
            console.log(`\t- ${name}`);
            
            modules.push({
              name: name,
              location: location.split('typescript/')[1] + '/' + item.split('.')[0]
            })
          }
        });
      }
    }
  }
}

getModules(folder);

let index = '';

for (const module of modules) {
  switch (module.name) {
    case "Wrappers":
      index += poet.code`export * from "./${module.location}";`;
      break;
    default:
      index += poet.code`export { ${module.name} } from "./${module.location}";`;
  }

  //if (module.name === "Wrappers") {
  //}
}

fs.writeFileSync(path.join(folder, 'index.ts'), index);
