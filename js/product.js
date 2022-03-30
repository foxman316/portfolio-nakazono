$(function () {
    $('.ac-child').css("display", "none");
    $('.ac-parent').on('click', function () {
        $(this).next().slideToggle();
        $('.ac-parent').not($(this)).next('.ac-child').slideUp();
    })
    $('.close').on('click', function () {
        $(this).parent('.ac-child').slideUp(); 
    })
});
