function tableData(computer, lab, student, enroll, connection) {
    var table = document.getElementById("gettable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = computer;
    cell2.innerHTML = lab;
    cell3.innerHTML = student;
    cell4.innerHTML = enroll;
    cell5.innerHTML = connection;
    window.scrollTo(0, document.body.scrollHeight);
}