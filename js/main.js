$(function () {
	$('.menu__burger').on('click', function () {
		$('.menu__list').toggleClass('active');
		$(this).toggleClass("open");
	});
});
