$(document).ready(function() {

    /* Fixed Header */
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    

     /* Smooth scroll */
     $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body, header__burger").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* Header burger */
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .header__logo, header').toggleClass('active');
        $('body').toggleClass('lock');
    });

     /* Link remove menu */
     $('.header__link').click(function(event) {
        $('.header__burger, .header__menu, .header__logo, header').removeClass('active');
        $('body').removeClass('lock');
    });
    
    /* Link active */
    $("#nav a").click(function(event) {
        let $this = $(this);

        $("#nav a").removeClass("active");
        $this.addClass("active");
    });

    /* Logo clear active */
    $('.header__logo').click(function(event) {
        $("#nav a").removeClass("active");
        $('.header__burger, .header__menu, .header__logo, header').removeClass('active');
        $('body').removeClass('lock');
    });
    


    /* Accordion */
    $('.accordion__item__trigger').click(function(){
        const parent = $(this).parent();

        if (parent.hasClass('active')) {
            parent.removeClass('active');
        } else {
        $('.accordion__item').removeClass('active')
            parent.addClass('active');
        }
    });



    /* Slider */
    $('.data-slider').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,

        arrows:true,
        dots:false,
        adaptiveHeight:true, //адаптпция по высоте
        speed:250 //скорость прокрутки
    });
});

