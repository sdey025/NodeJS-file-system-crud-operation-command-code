const fs = require("fs")

//creating a file
fs.mkdirSync('Node_dir')
//writing something in the file
fs.writeFileSync('Node_dir/file_by_node.txt','Hello i am made from node')
//appending text to file
fs.appendFileSync('Node_dir/file_by_node.txt','. I am appending')
//reading file in console directly converting it into buffer
const reading =  fs.readFileSync('Node_dir/file_by_node.txt','utf-8')
console.log(reading)
//rename the file
fs.renameSync('Node_dir/file_by_node.txt','Node_dir/file_by_node_rename.txt')
//delete file
fs.unlinkSync('Node_dir/file_by_node_rename.txt')
//delete folder
fs.rmdirSync('Node_dir')