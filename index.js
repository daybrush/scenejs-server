var child = require("child_process");
var express = require('express')
var app = express()
const port = 3000
let isExporting = false;

console.log(1);
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.route("/a")
.get((req, res) => {
  if (isExporting) {
    res.send('exporting');
    return;
  }
  // req.get
  // isExporting = true;
  const path = require.resolve("scenejs-render");
  // // child.fork(path);

  console.log(req.query.name);
  res.send('Get a random book' + path);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
