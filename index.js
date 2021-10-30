function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
var notif = new Audio('https://github.com/Rayrsn/weekly-schedule/raw/main/notif.mp3');
function func() {
  console.clear();
  var d = new Date();
  var currHour = d.getHours();
  var currMin = d.getMinutes();
  var currSec = d.getSeconds();
  var zaban = false;
  var eslami = false;
  var computer = false;
  var farsi = false;
  var riazi = false;
  var riazi2 = false;
  var riazipish = false;
  var fizik = false;
  var amar = false;

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
        if (currHour >= 9 && currHour <= 12) { // 10:00 to 12:30
          if (currHour == 9 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 9) {
            if (currMin >= 55) {
              computer = true;}}

          if (currHour == 10) {
            computer = true;
      }
      
          if (currHour == 11) {
            computer = true;
      }

          if (currHour == 12) {
            if (currMin <= 30) {
              computer = true;
      } else {
        computer = false;
      }
    }
  } else {
      computer = false;
    } 
        break;
      case 1:
        day = "Monday";
        if (currHour >= 7 && currHour <= 10) { // 7:30 to 10:00
          if (currHour == 7 && currMin == 25 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 7) {
            if (currMin >= 25) {
              farsi = true;}}

          if (currHour == 8) {
            farsi = true;
      }
      
          if (currHour == 9) {
            farsi = true;
      }

          if (currHour == 10) {
            if (currMin <= 0) {
              farsi = true;
      } else {
        farsi = false;
      }
    }
  } else {
      farsi = false;
    } 
        break;
      case 2:
        day = "Tuesday";
        if (currHour >= 7 && currHour <= 10) { // 08:00 to 10:00
          if (currHour == 7 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 7) {
            if (currMin >= 55) {
              riazipish = true;}}

          if (currHour == 8) {
            riazipish = true;
      }
      
          if (currHour == 9) {
            riazipish = true;
      }

          if (currHour == 10) {
            if (currMin <= 0) {
              riazipish = true;
      } else {
        riazipish = false;
      }
    }
  } else {
      riazipish = false;
    } 
        if (currHour >= 12 && currHour <= 15) { // 13:00 to 15:30
          if (currHour == 12 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
        if (currHour == 12) {
          if (currMin >= 55) {
            fizik = true;}}

        if (currHour == 13) {
          fizik = true;
    }
    
        if (currHour == 14) {
          fizik = true;
    }

        if (currHour == 15) {
          if (currMin <= 0) {
            fizik = true;
    } else {
      fizik = false;
    }
  }
  } else {
    fizik = false;
  } 
        if (currHour >= 15 && currHour <= 18) { // 16:00 to 18:30
          if (currHour == 15 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 15) {
            if (currMin >= 55) {
              riazi = true;}}

          if (currHour == 16) {
            riazi = true;
      }
      
          if (currHour == 17) {
            riazi = true;
      }

          if (currHour == 18) {
            if (currMin <= 30) {
              riazi = true;
      } else {
        riazi = false;
      }
    }
  } else {
      riazi = false;
    } 
        break;
      case 3:
        day = "Wednesday";
        if (currHour >= 12 && currHour <= 15) { // 13:00 to 15:00
          if (currHour == 12 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 12) {
            if (currMin >= 55) {
              amar = true;}}

          if (currHour == 13) {
            amar = true;
      }
      
          if (currHour == 14) {
            amar = true;
      }

          if (currHour == 15) {
            if (currMin <= 0) {
              amar = true;
      } else {
        amar = false;
      }
    }
  } else {
      amar = false;
    } 
        if (currHour >= 15 && currHour <= 18) { // 16:00 to 18:30
          if (currHour == 15 && currMin == 55 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 15) {
            if (currMin >= 55) {
              riazi2 = true;}}

          if (currHour == 16) {
            riazi2 = true;
      }
      
          if (currHour == 17) {
            riazi2 = true;
      }

          if (currHour == 18) {
            if (currMin <= 30) {
              riazi2 = true;
      } else {
        riazi2 = false;
      }
    }
  } else {
      riazi2 = false;
    }  
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        if (currHour >= 9 && currHour <= 11) { // 09:45 to 11:15
          if (currHour == 9 && currMin == 40 && currSec <= 10) {
            notif.play();
            alert("کلاس آغاز شد.");
          }
          if (currHour == 9) {
            if (currMin >= 40) {
              zaban = true;}}

          if (currHour == 10) {
            zaban = true;
      }
          if (currHour == 11) {
            if (currMin <= 15) {
              zaban = true;
      } else {
        zaban = false;
      }
    }
  } else {
      zaban = false;
    } 

          if (currHour >= 13 && currHour <= 16) { // 14:00 to 16:00
            if (currHour == 13 && currMin == 55 && currSec <= 10) {
              notif.play();
              alert("کلاس آغاز شد.");
            }
          if (currHour == 13) {
            if (currMin >= 55) {
              eslami = true;}}

          if (currHour == 14) {
            eslami = true;

      }
      
          if (currHour == 15) {
            eslami = true;
      }

          if (currHour == 16) {
            if (currMin <= 0) {
              eslami = true;
      } else {
        eslami = false;
      }
    }
  } else {
      eslami = false;
    } 
        break;
  }
  console.log('%c JoeMama  ', 'font-weight: bold; font-size: 80px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
  if (!zaban) {   
      document.getElementById("zaban").style.display = "none";
  }
  if (!eslami) {   
      document.getElementById("eslami").style.display = "none";
  }
  if (!computer) {   
      document.getElementById("computer").style.display = "none";
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
  if (!riazipish) {   
      document.getElementById("riazipish").style.display = "none";
  }
  if (!fizik) {   
      document.getElementById("fizik").style.display = "none";
  }
  if (!amar) {   
      document.getElementById("amar").style.display = "none";
  }

  if (zaban) { 
    console.log("zaban is True");
    document.getElementById("zaban").style.display = "block";
  }
  if (eslami) {
    console.log("eslami is True");
    document.getElementById("eslami").style.display = "block";
  }
  if (computer) {
    console.log("computer is True");
    document.getElementById("computer").style.display = "block";
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
  if (riazipish) {
    console.log("riazipish is True");
    document.getElementById("riazipish").style.display = "block";
  }
  if (fizik) {
    console.log("fizik is True");
    document.getElementById("fizik").style.display = "block";
  }
  if (amar) {
    console.log("amar is True");
    document.getElementById("amar").style.display = "block";
  }
  console.log("Today is " + day);
  console.log("and the time is " + currTime);
}

window.onload = function runner() {
  var joe = setInterval(func,1000);
};