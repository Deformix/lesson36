$(function () {
    $('.header__slider').slick({
        dots: true,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    });

    $(".header__menu-toggle").on('click', function () {
        $('body').toggleClass('stop-scrolling');
        $(".header__menu-list").toggleClass("open");
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest('.header__menu-toggle').length) {
            return;
        }
        
        $('body').removeClass('stop-scrolling')
        $(".header__menu-list").removeClass("open");
    });

    var navBarClassList = document.querySelector('.header__menu-list').classList;

    window.addEventListener('resize', function (event) {
        if (event.target.outerWidth > 1130 && navBarClassList.contains('open')) {
            navBarClassList.remove('open');
        }
    });


    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});





