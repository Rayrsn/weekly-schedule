function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
var notif = new Audio('https://rayrsn.github.io/weekly-schedule/notif.mp3');
function func() {
  console.clear();
  var d = new Date();
  var currHour = d.getHours();
  var currMin = d.getMinutes();
  var currSec = d.getSeconds();
  var zaban = false;
  var farsi = false;
  var riazi = false;
  var riazi2 = false;
  var barname = false;
  var riazigos = false;
  var fizik = false;

  switch (currMin) {
    case 0:
      currMin = "00";
      break;
    case 1:
      currMin = "01";
      break;
    case 2:
      currMin = "02";
      break;
    case 3:
      currMin = "03";
      break;
    case 4:
      currMin = "04";
      break;
    case 5:
      currMin = "05";
      break;
    case 6:
      currMin = "06";
      break;
    case 7:
      currMin = "07";
      break;
    case 8:
      currMin = "08";
      break;
    case 9:
      currMin = "09";
      break;
  }

  var currTime = currHour + ":" + currMin + ":" + currSec;
  switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        if (currHour >= 10 && currHour <= 13) { // 10:15 to 13:00
              if (currHour == 10 && currMin == 10 && currSec <= 10) {
                notif.play();
                alert("کلاس آغاز شد.");
              }
              if (currHour == 10) {
                if (currMin >= 10) {
                  fizik = true;}}
              if (currHour == 11) {
                    fizik = true;
              }
              if (currHour == 12) {
                fizik = true;
              }
              if (currHour == 13) {
                if (currMin <= "00") {
                  fizik = true;
          } else {
            fizik = false;
          }
        }
      } else {
          fizik = false;
        }
        if (currHour >= 13 && currHour <= 16) { // 13:30 to 16:15
          if (currHour == 13 && currMin == 25 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 13) {
            if (currMin >= 25) {
              barname = true;}}
      
          if (currHour == 14) {
            barname = true;
          }
          if (currHour == 15) {
            barname = true;
          }
          if (currHour == 16) {
            if (currMin <= 15) {
              barname = true;
      } else {
        barname = false;
      }
    }
  } else {
      barname = false;
    } 
        break;
      case 1:
        day = "Monday";
        if (currHour >= 13 && currHour <= 16) { // 14:00 to 16:15
          if (currHour == 13 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 13) {
            if (currMin >= 55) {
              riazi2 = true;}}
      
          if (currHour == 14) {
            riazi2 = true;
          }
          if (currHour == 15) {
            riazi2 = true;
          }
          if (currHour == 16) {
            if (currMin <= 15) {
              riazi2 = true;
      } else {
        riazi2 = false;
      }
    }
  } else {
      riazi2 = false;
    } 
        break;
      case 2:
        day = "Tuesday"; 
        break;
      case 3:
        day = "Wednesday";
        if (currHour >= 9 && currHour <= 12) { // 10:00 to 12:30
          if (currHour == 9 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 9) {
            if (currMin >= 55) {
              farsi = true;}}

          if (currHour == 10) {
            farsi = true;
          }
          if (currHour == 11) {
            farsi = true;
          }
          if (currHour == 12) {
            if (currMin <= 30) {
              farsi = true;
      } else {
        farsi = false;
      }
    }
  } else {
      farsi = false;
    } 
        break;
      case 4:
        day = "Thursday";
        if (currHour >= 9 && currHour <= 12) { // 10:00 to 12:30
          if (currHour == 9 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 9) {
            if (currMin >= 55) {
              zaban = true;}}

          if (currHour == 10) {
            zaban = true;
          }
          if (currHour == 11) {
            zaban = true;
          }
          if (currHour == 12) {
            if (currMin <= 30) {
              zaban = true;
      } else {
        zaban = false;
      }
    }
  } else {
      zaban = false;
    } 
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday"; 
        if (currHour >= 7 && currHour <= 10) { // 7:30 to 10:15
          if (currHour == 7 && currMin == 25 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 7) {
            if (currMin >= 25) {
              riazigos = true;}}
          if (currHour == 8) {
                riazigos = true;
          }
          if (currHour == 9) {
            riazigos = true;
          }
          if (currHour == 10) {
            if (currMin <= 15) {
              riazigos = true;
      } else {
        riazigos = false;
      }
    }
  } else {
      riazigos = false;
    } 
        if (currHour >= 13 && currHour <= 16) { // 14:00 to 16:15
          if (currHour == 13 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 13) {
            if (currMin >= 55) {
              riazi = true;}}

          if (currHour == 14) {
            riazi = true;
          }
          if (currHour == 15) {
            riazi = true;
          }
          if (currHour == 16) {
            if (currMin <= 15) {
              riazi = true;
      } else {
        riazi = false;
      }
    }
  } else {
      riazi = false;
    }
        break;
  }
  console.log('%c JoeMama  ', 'font-weight: bold; font-size: 80px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
  if (!zaban) {   
      document.getElementById("zaban").style.display = "none";
  }
  if (!farsi) {   
      document.getElementById("farsi").style.display = "none";
  }
  if (!riazi) {   
      document.getElementById("riazi").style.display = "none";
  }
  if (!riazi2) {   
    document.getElementById("riazi2").style.display = "none";
}
  if (!riazigos) {   
      document.getElementById("riazigos").style.display = "none";
  }
  if (!fizik) {   
      document.getElementById("fizik").style.display = "none";
  }
  if (!barname) {   
    document.getElementById("barname").style.display = "none";
  }


  if (zaban) { 
    console.log("zaban is True");
    document.getElementById("zaban").style.display = "block";
  }

  if (farsi) {
    console.log("farsi is True");
    document.getElementById("farsi").style.display = "block";
  }
  if (riazi) {
    console.log("riazi is True");
    document.getElementById("riazi").style.display = "block";
  }
  if (riazi2) {
    console.log("riazi2 is True");
    document.getElementById("riazi2").style.display = "block";
  }
  if (riazigos) {
    console.log("riazigos is True");
    document.getElementById("riazigos").style.display = "block";
  }
  if (fizik) {
    console.log("fizik is True");
    document.getElementById("fizik").style.display = "block";
  }
  if (barname) {
    console.log("barname is True");
    document.getElementById("barname").style.display = "block";
  }
  console.log("Today is " + day);
  console.log("and the time is " + currTime);
}

window.onload = function runner() {
  var joe = setInterval(func,1000);
};
