/** res.sendfile :

sends file to front-end and it renders if it can be rendered by the browser

*res.download : 

downloads the file*/

const express = require("express");
const app = express();
const path = require("path");

console.log(__dirname); // returns the complete path of dir

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/Hello.txt"), "test.txt"); // sends it to frontend
  // res.download(path.join(__dirname, "public/Hello.txt"), "test.txt"); // downloads the file
});

app.listen(5000);
