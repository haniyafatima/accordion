var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");



    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
















//
// for (var i = 0; i < document.querySelectorAll(".questions").length; i++) {
//
//   document.querySelectorAll(".questions")[i].addEventListener("click", toggle);
//
// function toggle(){
// $("p").toggle();
// }
//
// }
//
//
// $(".questionsone").on("click" , function (){
//   $(".answersone").slideToggle();
// })
//
// $(".questionstwo").on("click" , function (){
//   $(".answerstwo").slideToggle();
// })
// $(".questionsthree").on("click" , function (){
//   $(".answersthree").slideToggle();
// })
// $(".questionsfour").on("click" , function (){
//   $(".answersfour").slideToggle();
// })
// $(".questionsfive").on("click" , function (){
//   $(".answersfive").slideToggle();
// })
