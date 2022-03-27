   const img = {
    "1": "adacy1234567890/adacy1.png",
    "2": "adacy1234567890/adacy2.png",
    "3": "adacy1234567890/adacy3.png",
    "4": "adacy1234567890/adacy4.png",
    "5": "adacy1234567890/adacy5(1).png",
    "6": "adacy1234567890/adacy6.png",
    "7": "adacy1234567890/adacy7.png",
    "8": "adacy1234567890/adacy8.png",
    "9": "adacy1234567890/adacy9.png",
    "0": "adacy1234567890/adacy0.png"
  };
  
  const pad = num => String(num).padStart(2, "0");
  // const pad1 = num => String(num).padEnd(2, "0"); 

  let oldTime = "000000";
  
  window.addEventListener("load", () => {
    setInterval(() => {
      const today = new Date();
      const h = pad(today.getHours());
      const m = pad(today.getMinutes());
      const s = pad(today.getSeconds());
      const string = `${h}${m}${s}`;
      string.split("").forEach((digit, i) => {
        if (oldTime[i] != digit) document.getElementById("t" + i).src = img[digit] + "?rnd=" + new Date().getTime()
      })
      oldTime = string;
    }, 1000)
  })
 