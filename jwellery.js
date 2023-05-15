const hamb = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu1");

hamb.addEventListener("click", () => {
  hamb.classList.toggle("active");
  navmenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link1").forEach((n) =>
  n.addEventListener("click", () => {
    hamb.classList.remove("active");
    navmenu.classList.remove("active");
  })
);

window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar1");
  header.classList.toggle("sticky", window.scrollY > 0);
});
/********************************About javascript*****************************************/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
/*****************************Contact javascript*******************************************/
function details() {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    subject: document.getElementById("mob").value,
    address: document.getElementById("fd").value
  }


  emailjs.send("service_k4vlfy4", "template_3njys22", params).then(function (res) {
    alert("Success! " + res.status);
  })

}