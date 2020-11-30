const urlString = window.location.search;
var paramString = urlString.split("?")[1];
var queryString = new URLSearchParams(urlString);
console.log(queryString.get("mintues"));
if (
  urlString.indexOf("mintues") > -1 &&
  queryString.getAll("mintues").length > 0
) {
  var check = queryString.getAll("mintues");
  if (check[0] != "") {
    var startingMinutes = queryString.get("mintues");
    var second = startingMinutes * 60;
    var timerEl = document.querySelector("#timer");
    setInterval(updateTime, 1000);
  }
}
function updateTime() {
  let copySecond = second;
  console.log(copySecond);
  let hours = Math.floor(second / (60 * 60));
  second %= 60 * 60;
  let mintues = Math.floor(second / 60);
  second %= 60;
  changeColor();
  hours = hours < 10 ? "0" + hours : hours;
  mintues = mintues < 10 ? "0" + mintues : mintues;
  second = second < 10 ? "0" + second : second;
  timerEl.innerHTML = `${hours}:${mintues}:${second}`;
  if (copySecond == 0) {
    timerEl.innerHTML = `<b>Timeout!!!</b>`;
    return;
  }
  copySecond -= 1;
  second = copySecond;
}

function changeColor() {
  let changeColor = document.querySelector("#timer");
  var r, g, b;
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  changeColor.style.color = "rgb(" + r + "," + g + "," + b + ")";
}
