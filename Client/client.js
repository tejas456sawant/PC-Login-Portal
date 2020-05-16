var input = $('.validate-input .input100');

function testuname() {
    var check = true;

    for (var i = 0; i < input.length; i++) {
        if (validate(input[i]) == false) {
            showValidate(input[i]);
            check = false;
        }
    }

    return check;
}


$('.validate-form .input100').each(function() {
    $(this).focus(function() {
        hideValidate(this);
    });
});

function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if ($(input).val().trim().match(/\D{1,50}\D{1,50}$/) == null) {
            return false;
        }
    } else {
        if ($(input).val().trim() == '') {
            return false;
        }
    }
    if ($(input).attr('type') == 'pass' || $(input).attr('name') == 'pass') {
        if ($(input).val().trim().match(/^([0-9]{7})$/) == null) {
            return false;
        }
    } else {
        if ($(input).val().trim() == '') {
            return false;
        }
    }
}

function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
}

function validLogin() {
    if (testuname()) {
        var fs = require("fs");

        function readData(err, data) {
            if (err) {
                console.log(err);
                return;
            } else {
                var sname = (document.getElementById('name').value).replace(/  +/g, ' ').replace(/ /g, "-");
                var senroll = document.getElementById('enroll').value;
                const net = require('net');
                const client = new net.Socket();
                const port = 7070;
                const host = '127.0.0.1';
                console.log(sname);
                client.connect(port, host, function() {
                    client.write(sname + " " + senroll + " " + data + " " + "login");
                });
                client.on('data', function(data) {
                    console.log(data);
                    if (data == "done") {
                        document.getElementById("login").disabled = true;
                        document.getElementById("login").style.background = 'RED';
                        const { remote } = require('electron')
                        remote.getCurrentWindow().minimize();
                        client.destroy();
                    }
                });
                client.on('error', function(ex) {
                    console.log("handled error");
                    console.log(ex);
                });
            }
        }
        fs.readFile('test-log.txt', 'utf8', readData);
    }
}

function validLogout() {
    if (document.getElementById("login").disabled = true) {
        var fs = require("fs");

        function readData(err, data) {
            if (err) {
                console.log(err);
                return;
            } else {
                var sname = (document.getElementById('name').value).replace(/  +/g, ' ').replace(/ /g, "-");
                var senroll = document.getElementById('enroll').value;
                const net = require('net');
                const client = new net.Socket();
                const port = 7070;
                const host = '127.0.0.1';
                console.log(sname);
                client.connect(port, host, function() {
                    client.write(sname + " " + senroll + " " + data + " " + "logout");
                });
                client.on('data', function(data) {
                    if (data == "done") {
                        client.destroy();
                        const shutdown = require('electron-shutdown-command');
                        shutdown.shutdown();
                    }
                });
            }
        }
        fs.readFile('test-log.txt', 'utf8', readData);
    } else {
        alert("Please Login First");
    }
}