//your JS code here. If required.
var timer = document.getElementById("timer");
function currentTime() {
  let date = new Date(); 
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${month}/${day}/${year}`;
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = currentDate + ", " + hh + ":" + mm + ":" + ss + " " + session;

  timer.innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();