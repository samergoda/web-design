const height = $("#about").offset().top;
// console.log(height);

$(window).scroll(function () {
  
    if ($(window).scrollTop() > height -100) {
        $('#navbar').css("backgroundColor", "rgba(0,0,0,0.7)")
  
    }else {
        $("#navbar").css("backgroundColor", "transparent");
       
    }
})