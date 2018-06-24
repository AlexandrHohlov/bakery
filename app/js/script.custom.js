$(function () {



    (function responsiveNav () {
        let btn = $('#menu-btn');
        let nav = $('nav');
        let overlay = $('.overlay');

        btn.on('click', function () {
            nav.addClass('nav--active');
            overlay.addClass('overlay--active');
            $('body').addClass('body-fixed');

            $(this).attr('disabled', true);
        });

        overlay.on('click', function () {
            nav.removeClass('nav--active');
            overlay.removeClass('overlay--active');
            $('body').removeClass('body-fixed');

            btn.removeAttr('disabled');
        })
    })();

})

     // owl-Slider-pancakes
        $('.owl-carousel').owlCarousel({
            items:3,
            nav:true,
            loop:true,
            
        });