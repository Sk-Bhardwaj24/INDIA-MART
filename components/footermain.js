document.querySelector(".f_sms").addEventListener("click", function () {
    document.querySelector("#f_submit_pop").style.display = "flex";
    let f_submit_pop = document.getElementById("f_submit_pop");
    f_submit_pop.style.visibility = "visible";
  });
  document.querySelector(".close12").addEventListener("click", function () {
    let f_submit_pop = document.getElementById("f_submit_pop");
    f_submit_pop.style.visibility = "hidden";
  });