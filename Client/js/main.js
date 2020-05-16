var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); // Change image every 2 seconds
}

setInterval(function(){
    var dt = new Date();
    document.getElementById("datetime").innerText = dt.toLocaleString();  
},1000)

function getpcname() {
    var dataN;
    var fs = require("fs");
    function readData(err, data) {
        if (err) {
            console.log(err);
            return;
        } else {
            document.getElementById('changePc').innerHTML = " " + data + " ";
        }
    }
    fs.readFile('test-log.txt', 'utf8', readData);
}