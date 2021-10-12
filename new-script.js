$(document).ready(function () {
	$(".card-faq-main__link").on("click", function () {
		$(".card-faq").removeClass("active");
		$(this).parents(".card-faq").addClass("active");
	});

	$(".card-faq-popup__close").on("click", function () {
		$(this).parents(".card-faq").removeClass("active");
	});

	$(document).on("click", function (e) {
		let container = $(".card-faq");
		if (container.has(e.target).length === 0) {
			$(".card-faq").removeClass("active");
		}
	});

	$(".card-faq-popup__info-all").on("click", function (e) {
		e.preventDefault();

		if (!$(this).parents(".card-faq").find(".card-faq-popup__info-text").hasClass("show")) {
			$(this).parents(".card-faq").find(".card-faq-popup__info-text").addClass("show");
			$(this)
				.parents(".card-faq")
				.find(".card-faq-popup__info-text")
				.css({ "max-height": $(this).parents(".card-faq").find(".card-faq-popup__info-text-wrap").outerHeight() });
			setTimeout(() => {
				$(this).parents(".card-faq").find(".card-faq-popup__info-text").css({ "max-height": "initial" });
			}, 350);
			$(this).text("Скрыть...");
		} else {
			$(this).parents(".card-faq").find(".card-faq-popup__info-text").removeClass("show");
			$(this)
				.parents(".card-faq")
				.find(".card-faq-popup__info-text")
				.css({ "max-height": $(this).parents(".card-faq").find(".card-faq-popup__info-text-wrap").outerHeight() });
			setTimeout(() => {
				$(this).parents(".card-faq").find(".card-faq-popup__info-text").css({ "max-height": "250px" });
			}, 0);
			$(this).text("Читать полностью...");
		}
	});

	$.each($(".card-faq"), function (index, val) {
		if ($(val).find(".card-faq-popup__info-text-wrap").outerHeight() <= 250) {
			$(val).find(".card-faq-popup__info").addClass("hide-button");
		}
	});

	$(window).on("resize", function () {
		$.each($(".card-faq"), function (index, val) {
			if ($(val).find(".card-faq-popup__info-text-wrap").outerHeight() <= 250) {
				$(val).find(".card-faq-popup__info").addClass("hide-button");
			} else {
				$(val).find(".card-faq-popup__info").removeClass("hide-button");
			}
		});
	});
});
