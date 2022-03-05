function changecode(i) {
    if (i == 91) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code1").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 1) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code2").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 55) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code3").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 86) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code4").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 44) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code5").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 33) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code6").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 92) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code7").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 7) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code8").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 966) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code9").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 82) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code10").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 380) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code11").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
    if (i == 81) {
      let councode = document.getElementById("modal2p");
      let cc = document.getElementById("code12").src;
      let cmg = document.getElementById("cmg");
      councode.innerHTML = "+" + i;
      cmg.src = cc;
      document.querySelector("#countryflag").style.display = "none";
    }
  }
  function displaysign() {
    document.querySelector(".bg-modal").style.display = "flex";
  }
  function closesign() {
    document.querySelector(".bg-modal").style.display = "none";
  }
  function changecountrycode() {
    document.querySelector("#countryflag").style.display = "flex";
  }
  function submitsign() {
    let result = document.getElementById("scriteria").value;
    let resu = document.getElementById("signcomment");
    if (result == 8210673961) {
      let link = document.getElementById("linksign");
      link.textContent = "Team six";
      alert("Logged In");
    } else {
      alert("please register first");
    }
    closesign();
    resu.textContent = "Team six";
  }
  
  // document.querySelector(".signopen").addEventListener("click", function () {
  //   document.querySelector(".bg-modal").style.display = "flex";
  // });
  // document.querySelector(".signopen1").addEventListener("click", function () {
  //   document.querySelector(".bg-modal").style.display = "flex";
  // });
  
  // document.querySelector(".close").addEventListener("click", function () {
  //   document.querySelector(".bg-modal").style.display = "none";
  // });
  // document.querySelector(".selector").addEventListener("click", function () {
  //   // document.querySelector(".bg-modal").style.display = "none";
  //   document.querySelector("#countryflag").style.display = "flex";
  // });
  