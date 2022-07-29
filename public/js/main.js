$(document).ready(function () {
    
    //mobile nav
    $('#hamburger').click(function () {
        $(this).toggleClass('fa-xmark');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function () {
        $('#hamburger').removeClass('fa-xmark');
        $('nav').removeClass('nav-toggle');
    });

    // video controls
    $('.dot1').click(function () {
        $('.vid1').css('display', 'block');
        $('.vid2').css('display', 'none');
        $('.vid3').css('display', 'none');
    });
    $('.dot2').click(function () {
        $('.vid2').css('display', 'block');
        $('.vid1').css('display', 'none');
        $('.vid3').css('display', 'none');
    });
    $('.dot3').click(function () {
        $('.vid3').css('display', 'block');
        $('.vid2').css('display', 'none');
        $('.vid1').css('display', 'none');
    });
});
