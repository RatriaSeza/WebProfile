$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 600) {
			$("#logo").html('<i class="fa-solid fa-minus"></i>Satria Reza Ramadhan');
		} else {
			$("#logo").html('<i class="fa-solid fa-minus"></i>Portofolio');
		}

		if ($(window).scrollTop() >= 0 && $(window).scrollTop() < 600) {
			$("#link-home").addClass("yellow");
		} else {
			$("#link-home").removeClass("yellow");
		}

		if ($(window).scrollTop() > 600 && $(window).scrollTop() < 2700) {
			$("#link-about").addClass("yellow");
		} else {
			$("#link-about").removeClass("yellow");
		}

		if ($(window).scrollTop() > 2700) {
			$("#link-home").addClass("grey");
			$("#link-about").addClass("grey");
			$("#link-contact").addClass("yellow");
			$("#logo").addClass("green");
			$("nav").hide();
		} else {
			$("#link-home").removeClass("grey");
			$("#link-about").removeClass("grey");
			$("#link-contact").removeClass("yellow");
			$("#logo").removeClass("green");
			$("nav").show();
		}
	});
});

// Reveal animation
function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	reveals.forEach((reveal) => {
		var windowHeight = window.innerHeight;
		var elemenTop = reveal.getBoundingClientRect().top;
		var elementVisible = 100;

		if (elemenTop < windowHeight - elementVisible) {
			reveal.classList.add("active");
		} else {
			reveal.classList.remove("active");
		}
	});
}

window.addEventListener("scroll", reveal);

$(document).ready(function () {
	$(".trigger").on("click", function () {
		$(".modal-wrapper").toggleClass("close");
		return false;
	});
});
