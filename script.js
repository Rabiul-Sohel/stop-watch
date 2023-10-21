let showField = document.getElementById('watch-output');
let showText = showField.innerText;
let num = parseInt(showText);
var intervalId;



document.getElementById('btn-start').addEventListener('click', () => {
  intervalId = setInterval(() => {
    ++num;
    document.getElementById("watch-output").innerText = num;
  }, 1000);
  document.getElementById('btn-start').setAttribute("disabled","");
})

document.getElementById("btn-stop").addEventListener("click", function () {
  clearInterval(intervalId);
  document.getElementById("btn-start").removeAttribute("disabled");
});

document.getElementById('btn-reset').addEventListener('click', () => { 
  clearInterval(intervalId);
  num = 0;
  showField.innerText = 0;

  document.getElementById("btn-start").removeAttribute("disabled");
  
  
})
 
// // function start() {
 
// }