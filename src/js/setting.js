//menu header
$('.js-mobile').on('click', function () {
	$(this).toggleClass("js-mobile--close");
	$("html").toggleClass("js-locked");
	$(".header-user").fadeToggle();
});

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function(e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {
		/*when the select box is clicked, close any other select boxes,
		and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

$('.clear-txt').click(function(){
    $(this).parent().find("input").val("");
});

$('.custom-select .select-items').click(function(){
    $(this).closest(".custom-select").find(".select-selected").addClass("on");
});

$(function ($) {
	$('.link-popup a[href^="#"]').click(function (e) {
		e.preventDefault();
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.addClass("on");
		return false;
	});
	$(".popup-close").click(function () {
		$(".popup").removeClass("on");
		$("html").removeClass("js-locked");
	});
	$(".popup").click(function () {
		$(".popup").removeClass("on");
		$("html").removeClass("js-locked");
	});
	$(".popup-stop").click(function (e) {
		e.stopPropagation();
	});
});

$(".popup-wrap__data-item:first-child").addClass('active');
$(".js-data").click(function () {
	var var_data = $(this).attr("data-tab");
	$(".popup-wrap__data-item").removeClass('active');
	$("." + var_data + "").addClass('active');
});

$(function () {
	var inputTxt = $(".popup-wrap__message textarea");
	var placeholderTxt = $(".placeholder");

	placeholderTxt.on('click', function() {
		$(this).parent().find('textarea').focus();
	});

	if (inputTxt.val()) {
		$(this).next().hide();
	}

	inputTxt.on('blur', function() {
		if (!$(this).val()) {
			$(this).next().show();
		}
	});

	inputTxt.on('focus', function() {
		if (!$(this).val()) {
			$(this).next().hide();
		}
	});

	inputTxt.on('input', function() {
		if ($(this).val()) {
			$(this).next().hide();
		}
	});
});

if ($(window).width() <= 834) {
	$(".information-wrap .list-tab__item:first-child").addClass('active');
	$(".information-wrap__ct-item:first-child").addClass('active');
} else {
	$(".information-wrap .list-tab__item:nth-child(2)").addClass('active');
	$(".information-wrap__ct-item:nth-child(2)").addClass('active');
}
$(".js-tab li").click(function () {
	var var_data = $(this).attr("data-tab");
	$(".js-tab li").removeClass('active');
	$(this).addClass('active');
	$(".js-tabct").removeClass('active');
	$("." + var_data + "").addClass('active');
});

$('.js-accor').on('click', function () {
	$(this).toggleClass("on").next().slideToggle();
});

$('input[name="dates"]').daterangepicker({
	autoUpdateInput: false,
	locale: {
		cancelLabel: 'Clear'
	}
});

$('input[name="dates"]').on('apply.daterangepicker', function(ev, picker) {
	$(this).val(picker.startDate.format('MM/DD/YYYY') + '               ' + picker.endDate.format('MM/DD/YYYY'));
});

if ($(window).width() <= 990) {
	$(".contract-block__control-drop .list-tab__item").click(function () {
		var txtData = $(this).html();
		$(this).closest('.contract-block__control-drop').find(".contract-block__control-dropBtn").html(txtData);
		$(this).closest('.list-tab').slideUp();
		$(".contract-block__control-dropBtn").removeClass('on');
	});
} 