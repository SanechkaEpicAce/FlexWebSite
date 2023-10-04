// window.onload = function () {}
let wasShowed = false;
$(function() {
	$(".menu-icon").on("click", () => {
		if(wasShowed == true) {
			$("#menu-container").animate({height: "0px"}, 2000, () => {
				$("#menu-container").css("display", "none");
				wasShowed = false;
			});
		} else {
			$("#menu-container").css("height", "auto");
			$("#menu-container").css("display", "flex");
			$(".menu-theme").css("background", "white");
			let menuHeight = $("#menu-container").height();
			$("#menu-container").css("height", "0px");
			$("#menu-container").animate({height: menuHeight + "px"}, 2000, () => {

			});
			wasShowed = true;
		}
	})
	let wasInputShowed = false;
	$(".right-search").on("click", () => {
		if ($(window).width() <= 529) {
			if(wasInputShowed == false) {
				$(".right-search").animate({width: "200px"}, 1000, () => {
					// $("#logo").css("display", "none");
				});
				$("#logo").animate({width: "0px", height: "23px"},1000);
				wasInputShowed = true;
			} else {
				$(".right-search").animate({width: "0px"},1000, () => {
					// $("#logo").css("display", "inline");
				});
				$("#logo").animate({width: "176px", height: "23px"},1000);
				wasInputShowed = false;
			}
		}
	});
	
});

$(window).resize(function() {
	if ($(window).width() > 529) {
		$("#menu-container").removeAttr("style");
		$(".right-search").removeAttr("style");
		$("#logo").removeAttr("style");
	} else {
		if (wasShowed == true) {
			$("#menu-container").css("height", "auto");
			$("#menu-container").css("display", "flex");
		}
	}
});
