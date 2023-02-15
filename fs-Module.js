const fs = require("fs") ;


// Reading a file

// let fileContent = fs.readFileSync("one.txt")

// console.log("data of one.txt : " + fileContent)



// // Writing a file or create and write

// fs.writeFileSync('two.txt',"file2 is a king file ") 
// // append file
// fs.appendFileSync('two.txt',"yo yo")
// fs.appendFileSync('two.txt',"ddyo")


// // Delete file
// fs.unlinkSync('two.txt')


// working with directories with filesystem module

// Create a directory or folder

// fs.mkdirSync('newdir')




// Check the content inside directory

// let folderPath = "D:\\Node js\\newdir"

// let folderContent = fs.readdirSync(folderPath)
// console.log("folder content : ", folderContent)



// Check wheather the directory exists or not

// let doesExist = fs.existsSync("newdir")

// console.log(doesExist)




// Remove Directory

fs.rmdirSync("newdir") // remove directory contents beofre this command


