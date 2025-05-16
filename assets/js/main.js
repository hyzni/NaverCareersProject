$('#header .nav-list .nav-item.Teams, #header .nav-teams').on('mouseenter', function() {
  $('#header .nav-teams').addClass('show');
}).on('mouseleave', function() {
  $('#header .nav-teams').removeClass('show');
});

$('#header .sub-nav .sub-link.teams').click(function(e){
  e.preventDefault();
  if ($('#header .sub-nav .sub-item').children().length > 1){
      $('#header .sub-nav .sub-item .sub-teams').toggleClass('show');
    }
})

$('#header .sub-nav .sub-item .sub-link').click(function(e){
  e.preventDefault;
  $(this).toggleClass('bg-color');
  $(this).find('.title').toggleClass('rotate');
})

$('#header .right-area .nav-list .item-wrap').click(function(e){
  e.preventDefault();
  $('#header .right-area .language-option').toggleClass('show');
  $('#header .right-area .item-wrap .icon').toggleClass('rotate');
})

$('select').change(function(){
  $(this).css('color','#000')
})

$('#header .menu-icon .btn-menu').click(function(e){
  e.preventDefault();
  $(this).toggleClass('btn-close');
  $('#header .sub-nav').toggleClass('show');
})




mainSlide = new Swiper('.main-slide .swiper', {
  speed:1000,
    loop:true,
    allowTouchMove: false,
    autoplay:{
      delay:3000,
    },
    on: {
      slideChangeTransitionStart: function () {
        const $text = $('.main-slide .text');
        $text.removeClass('animate')[0].offsetWidth;
        $text.addClass('animate');
      }
    }
  });

  $('.main-slide .text').addClass('animate');
  



  swiper1 = new Swiper('.swiper-1', {
    navigation: {
        nextEl: '.swiper-1 .next',  
        prevEl: '.swiper-1 .prev', 
    },
    slidesPerView: 1,  
    spaceBetween: 40,
    breakpoints: {
      768: {
          slidesPerView: 1.1,
          spaceBetween: 30,
      }
  },
    on: {
      init: function() {
        $('.swiper-1 .prev').addClass('show');
      },
      slideChange: function() {
        if (this.activeIndex === 0) {
          $('.swiper-1 .prev').addClass('show');
        } else {
          $('.swiper-1 .prev').removeClass('show');
        }

        if (this.isEnd) {
          $('.swiper-1 .next').addClass('show');
        } else {
          $('.swiper-1 .next').removeClass('show');
        }
      }
    }
});

  swiper2 = new Swiper('.swiper-2', {
    navigation: {
        nextEl: '.swiper-2 .next',  
        prevEl: '.swiper-2 .prev', 
    },
    slidesPerView: 1,  
    spaceBetween: 40,
    breakpoints: {
      768: {
          slidesPerView: 3,
          spaceBetween: 40,
      }
  },
    on: {
      init: function() {
        $('.swiper-2 .prev').addClass('show');
      },
      slideChange: function() {
        if (this.activeIndex === 0) {
          $('.swiper-2 .prev').addClass('show');
        } else {
          $('.swiper-2 .prev').removeClass('show');
        }
        
        if (this.isEnd) {
          $('.swiper-2 .next').addClass('show');
        } else {
          $('.swiper-2 .next').removeClass('show');
        }
      }
    }
});


$('#container .content1 .content-area .link').hover(function(){
  $(this).addClass('show');
}, function(){
  $(this).removeClass('show');
});

$('#container .search .submit').hover(function(){
  $(this).toggleClass('show');
})


  $('#footer .top-area .related-site').click(function(){
    $('#footer .top-area .related-site .title').toggleClass('open');
    $('#footer .top-area .site-option').toggleClass('show');
    $('#footer .top-area .related-site .icon').toggleClass('rotate');
    $('#footer .top-area .related-site').toggleClass('open');
  });

  $('#footer .top-area .site-option .site-item').hover(function(){
    $(this).toggleClass('show');
  });


  $('.search .search-form .input-box .select-box').click(function(){
    $(this).addClass('active')
  })


  $('#header .sub-nav .sub-link.lang').click(function(e) {
    e.preventDefault(); 
    $('#header .sub-nav .sub-link.lang').removeClass('select');
    $(this).addClass('select');
});
