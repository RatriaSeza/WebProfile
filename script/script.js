$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $(".hero").addClass("blur");
    } else {
        $(".hero").removeClass("blur");
    }
});