// Nav
function responsive(){
    var x = document.getElementById("myTopNav");
    if (x.className === "hero"){
        x.classList.add("responsive")
    }else{
        x.className = "hero";
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".hero").addClass("blur");
        } else {
            $(".hero").removeClass("blur");
        }

        if ($(window).scrollTop() > 700) {
            $("#logo").html('Satria Reza Ramadhan');
        } else {
            $("#logo").html('Portofolio');
        }
        
        if ($(window).scrollTop() >= 0 && $(window).scrollTop() < 699){
            $("#link-home").addClass("yellow");
        } else {
            $("#link-home").removeClass("yellow");
        }

        if ($(window).scrollTop() > 700 && $(window).scrollTop() < 2900 ) {
            $("#link-about").addClass("yellow");
        } else {
            $("#link-about").removeClass("yellow");
        }

        if ($(window).scrollTop() > 2900) {
            $("#link-home").addClass("grey");
            $("#link-about").addClass("grey");
            $("#link-contact").addClass("yellow");
            $("nav p:before").addClass("grey")
        } else {
            $("#link-home").removeClass("grey");
            $("#link-about").removeClass("grey");
            $("#link-contact").removeClass("yellow");
            $("nav p:before").removeClass("grey")
        }
    });
});

// Reveal animation
function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) =>{
        var windowHeight = window.innerHeight;
        var elemenTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elemenTop < windowHeight - elementVisible){
            reveal.classList.add("active");
        }
        else{
            reveal.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);