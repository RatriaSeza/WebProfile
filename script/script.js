
const about_page = document.getElementById("about");

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
        

        // if (about_page.scrollIntoView()){
        //     $("#logo").html('Satria Reza Ramadhan');
        // }
    });
});