window.addEventListener("mousemove", function (dets) {
  function cur() {
    document.querySelector("#cursor").style.top = `${dets.clientY}px`;
    document.querySelector("#cursor").style.left = `${dets.clientX}px`;
    document.querySelector("#cursor1").style.top = `${dets.clientY}px`;
    document.querySelector("#cursor1").style.left = `${dets.clientX}px`;
  }
  window.requestAnimationFrame(cur);
});

document.querySelectorAll(".enlarge").forEach(function (elem) {
  elem.addEventListener("mouseover", function () {
    document.querySelector("#cursor").style.height = "30px";
    document.querySelector("#cursor").style.width = "30px";
    document.querySelector("#cursor").style.borderWidth = "1.5px";
  });
  elem.addEventListener("mouseout", function () {
    document.querySelector("#cursor").style.height = "18px";
    document.querySelector("#cursor").style.width = "18px";
    document.querySelector("#cursor").style.borderWidth = "2.5px";
  });
});
document.querySelectorAll(".blend").forEach(function (elem) {
  elem.addEventListener("mouseover", function () {
    document.querySelector("#cursor").style.height = "80px";
    document.querySelector("#cursor").style.width = "80px";
    document.querySelector("#cursor").style.borderWidth = "0px";
    document.querySelector("#cursor").style.backgroundColor = "white";
    document.querySelector("#cursor").style.mixBlendMode = "difference";
  });
  elem.addEventListener("mouseout", function () {
    document.querySelector("#cursor").style.height = "18px";
    document.querySelector("#cursor").style.width = "18px";
    document.querySelector("#cursor").style.borderWidth = "2.5px";
    document.querySelector("#cursor").style.backgroundColor = "transparent";
    document.querySelector("#cursor").style.mixBlendMode = "initial";
  });
});

gsap.to(".main1 #content", {
  scrollTrigger: {
    trigger: ".main2",
    start: "top 90%",
    end: "0% 60%",
    scrub: 1,
    // markers : true
  },
  backgroundPositionY: 150,
  // rotation :180
});

document
  .querySelector("#sj-footer #content h1")
  .addEventListener("mouseover", function () {
    document.querySelector("#cursor").style.display = "none";
    document.querySelector("#cursor1").style.display = "initial";
  });
document
  .querySelector("#sj-footer #content h1")
  .addEventListener("mouseout", function () {
    document.querySelector("#cursor").style.display = "initial";
    document.querySelector("#cursor1").style.display = "none";
  });

$("#coverup h1").textillate({
  minDisplayTime: 3000,
  loop: false,
  in: {
    effect: "fadeInUp",
    delay: 20,
    callback: function () {
      $("#coverup h1").textillate("out");
    },
  },
  out: { effect: "fadeOutUp" },
});

var coverup = gsap.timeline();
var first = gsap.timeline();

coverup.to("#coverup", {
  delay: 3,
  duration: 3,
  x: "100%",
});
first
  .from(".main1 #nav", {
    delay: 5,
    duration: 1,
    opacity: 0,
    y: -20,
  })
  .from(".main1 #footer", {
    duration: 1,
    opacity: 0,
    y: 20,
  });

gsap.from(".main3 #content", {
  scrollTrigger: {
    trigger: ".main3",
    top: "80%",
    end: "80% 70%",
    scrub: 2,
  },
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});

// Dark Mode
document
  .querySelector(".main1 #footer h4")
  .addEventListener("click", function () {
    document.querySelector(".main1 #content").style.backgroundImage =
      "url(https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)";
    document.querySelector("#sj-main").style.backgroundColor = "#222";
    document.querySelector("#sj-main").style.color = "#ecece9";
    document.querySelectorAll(".main1 #nav #links a").forEach(function (a) {
      a.style.color = "#ecece9";
    });
    document.querySelector(".main1 #footer h5").style.backgroundColor =
      "#ecece9";
    document.querySelector(".main1 #footer h5").style.color = "#222";
    document.querySelector(".main2 #content button").style.color = "#ecece9";
    document
      .querySelectorAll(".main3 #content #lcontent #btns a")
      .forEach(function (a) {
        a.style.color = "#ecece9";
        a.style.borderColor = "#ecece9";
      });
    document.querySelector(".main5 #box").style.backgroundImage =
      "url(https://images.unsplash.com/photo-1515339760107-1952b7a08454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80)";
    document.querySelector(".main5 #box").style.color = "black";
    document.querySelector(".main5 #box button").style.color = "black";
    document.querySelector(".main5 #box button").style.borderColor = "black";
    document.querySelectorAll("#sj-footer #footer div a").forEach(function (a) {
      a.style.color = "#ecece9";
    });
    document.querySelector("#cursor1").style.backgroundColor = "#ecece9";
    document.querySelector("#cursor1").style.color = "#222";
    document.querySelector("#sj-footer #content h1").style.borderBottomColor =
      "#ecece9";
  });
