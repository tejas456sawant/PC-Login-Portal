var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'portal',
    multipleStatements: true
});

function currentDateTime() {
    var now = new Date();
    var pretty = [
        now.getFullYear(),
        '-',
        now.getMonth() + 1,
        '-',
        now.getDate(),
        ' ',
        now.getHours(),
        ':',
        now.getMinutes(),
        ':',
        now.getSeconds()
    ].join('');
    return (pretty);
}

function currentDate() {
    var now = new Date();
    var pretty = [
        now.getFullYear(),
        '-',
        now.getMonth() + 1,
        '-',
        now.getDate(),
        ' ',
        now.getHours(),
        ':',
        now.getMinutes(),
        ':',
        now.getSeconds()
    ].join('');
    return (pretty);
}

function loginData(computerName, computerLocation, enrollmentNo, studentName) {
    $query = "INSERT INTO tblcomp  VALUES ('" + computerName + "', '" + computerLocation + "', '" + enrollmentNo + "', '" + studentName + "', '" + currentDateTime() + "', '' ,'" + currentDate() + "')";
    connection.query($query, function(err, rows, fields) {
        if (err) {
            console.log(err);
        } else {
            tableData(computerName, computerLocation, studentName, enrollmentNo, "Login");
        }
    });
}

function logoutData(computerName, computerLocation, enrollmentNo, studentName) {
    $query = "UPDATE tblcomp SET logoutTime = '" + currentDateTime() + "' WHERE enrollment = '" + enrollmentNo + "'";
    connection.query($query, function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
            tableData(computerName, computerLocation, studentName, enrollmentNo, "logout");
        }
    });
}