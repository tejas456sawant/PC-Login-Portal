function fgpss() {
    var email = document.getElementById('email').value;
    var cno = document.getElementById('contactno').value;
    $query = "select * from tbladmin where Email='"+email+"' and MobileNumber='"+cno+"' ";
    connection.query($query, function(err, rows, fields) {
        if(err) {
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        if(rows.length > 0) {
            document.getElementById('errmsg').innerHTML = "Valid Details.";
            var string=JSON.stringify(rows);
            var json =  JSON.parse(string);
            var adminName = json[0].UserName;
            var fs = require("fs");
            var writeStream = fs.createWriteStream("test-log.txt");
            writeStream.write(adminName);
            writeStream.end();
            location.replace("./resetpassword.html");
        } else {
            document.getElementById('errmsg').innerHTML = "Invalid Details.";
        }
    });
}