var fs = require("fs");

function readData(err, data) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(data);
        document.getElementById('adminname').innerHTML = " " + data + " ";
    }
}
fs.readFile('test-log.txt', 'utf8', readData);