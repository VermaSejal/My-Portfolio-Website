var hamburger= document.querySelector(".hamburger");
var navbar= document.querySelector(".navbar");

hamburger.addEventListener("click", () =>
{
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}))
  // code to show back to top button//
var showOnPx = 400;
var backToTopButton = document.querySelector(".back-to-top");
// returns th no of pixels that had bveen scrolled
var scrollContainer = () => {
  return document.documentElement || document.body;
};
// adding scroll event to body 
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})
// function to be called when button is clicked
var goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",});
  }; 
  //adding click event to button
backToTopButton.addEventListener("click", goToTop)
// form coding 
function sendEmail() {
  var params = {
      from_name :document.getElementById('fullname').value,
      email_id :document.getElementById('email_id').value,
      message :document.getElementById('message').value
  }
  emailjs.send("service_rm824j7","template_pwi73s7",params)
  .then ((res) =>{
    document.getElementById('fullname').value='';
    document.getElementById('email_id').value='';
    document.getElementById('message').value='';
    alert("Thanks for your Response !");
  });
}




