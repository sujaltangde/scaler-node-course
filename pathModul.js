const path = require("path") ;

let ext = path.extname("D:\Node js\f1.txt")

let basename = path.basename("D:\\Node js\\f1.txt") //  always usedouble slash between path in Node js

console.log(ext)
console.log(basename)

console.log(__filename) // shows file path of working file 
console.log(__dirname)  // shows directory of working file