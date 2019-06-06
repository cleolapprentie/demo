  $(document).ready(function() {

    //Sticky Header
    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass('sticky'));

    //Smooth Scrolling
    $('.menu li a[href^="#"]').on('click', function(e){
        e.preventDefault();

        var target = $(this.hash);

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top -60
            }, 800);
        }
    });

    //Page to Top
    $(window).on('scroll', function(){


      var $scrollFromTop = $(window).scrollTop();

      $('body').toggleClass('scroll', ($scrollFromTop > 120));

      if ($scrollFromTop > 400){
        $('#totop').fadeIn(500);
      } else {
        $('#totop').stop().fadeOut(500);
      }

      $('section').each(function() {
    if($(window).scrollTop() >= $(this).offset().top - $(this).height() / 2 ) {
        var id = $(this).attr('id');
        $('.menu li a').removeClass('active');
        $('.menu li a[href=#'+ id +']').addClass('active');
    }
});


    });

    $('#totop').on('click', function(){
        $('html,body').animate({scrollTop:0}, 500);
    });

    //Auto Slide Show
    $('.slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      dots: false,
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',

      responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
      ]
    });

    //RWD MENU Trigger
    var body = $('body');
    var menuTrigger = $('.js-menu-trigger');
    var mainOverlay = $('.js-main-overlay');

    menuTrigger.on('click', function(){
      body.addClass('menu-is-active');
    });

    $('.menu li a').on('click', function(){
      $('body').removeClass("menu-is-active");
    });

    mainOverlay.on('click', function(){
      $('body').removeClass("menu-is-active");
    });

    // Masonry
    var $container = $('#grid').imagesLoaded(function(){

      $container.masonry({
        itemSelector: '.grid-item',　//タイトル状に配置する要素のclassの指定
        isAnimated: true,
        isFitWidth: true,
        columnWidth: '.grid-sizer',
        gutter: 10
      });

    });

    //Animation on Scrolling - Grid Images
    new AnimOnScroll( document.getElementById('grid'), {
      minDuration : 0.4,
      maxDuration : 0.7,
      viewportFactor : 0.2
    });


    //Animation on Scrolling - Content
    $(window).on('load scroll', function() {
      add_class_in_scrolling($('.aboutme'));
    });
    function add_class_in_scrolling(target) {    // スクロールで要素が表示された時にclassを付与する

      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + winHeight;
      var slidein = scrollPos - target.height() / 2;

      if( slidein > target.offset().top ) {

        target.addClass('active');
      }

      else {
        target.removeClass('active');
      }
    }

});
