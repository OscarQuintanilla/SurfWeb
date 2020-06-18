$(document).ready(function () {
  alert("ready!");
  $('#home').click(function () {

    $('html, body').animate({
      scrollTop: $("#div1").offset().top
    }, 2000);
  })
});