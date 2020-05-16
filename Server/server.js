const net = require('net');
const port = 7070;
const host = '127.0.0.1';

const server = net.createServer();
server.listen(port, host, () => {
    document.getElementById('ipadd').innerHTML = 'Server is running on port ' + port + '.' + ' Using ip address ' + host;
});

let sockets = [];

server.on('connection', function(sock) {
    //console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sockets.push(sock);

    sock.on('data', function(data) {
        var dt = data;
        var sdt = dt.toString();
        var dataArray = sdt.split(" ");
        console.log(dataArray);
        var pclab = dataArray[2].split("-");

        var names = dataArray[0].split("-");
        var enrolls = dataArray[1];
        var pcs = pclab[0];
        var labs = pclab[1];
        var act = dataArray[3];

        tableData(pcs, labs, names[0] + " " + names[1], enrolls, "connected");

        sock.write("done");

        if (act == "login") {
            loginData(pcs, labs, enrolls, names[0] + " " + names[1]);
        }
        if (act == "logout") {
            logoutData(pcs, labs, enrolls, names[0] + " " + names[1]);
            sock.write("done");
        }

        // Write the data back to all the connected, the client will receive it as data from the server

    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {

    });
});