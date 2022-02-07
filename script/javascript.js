// Hamburger
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


// Slider Untuk Guru
function guruSlide(){
    $('.guru').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: true,
        slide: '.guru-container'
    });
  }

  $(window).resize(function(){
    var $windowWidth = $(document).width();
    if ($windowWidth < 700) {
        guruSlide();   
    }else{
        $('.guru').slick("unslick");
    }
});

// Slider untuk Siswa

function slickfy(){
    $('.container-siswa-slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: true,
        slide: '.siswa-slider'
    });
  }

$(window).resize(function(){
var $windowWidth = $(document).width();
if ($windowWidth < 700) {
    slickfy();   
}else{
    $('.container-siswa-slider').slick("unslick");
}
});


//   Slider untuk prestasi
$(document).ready(function(){
$('.prestasi-slider').slick({
// slidesToShow:3,
arrows:false,
dots : true,
slidesToShow: 2,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
    responsive: [{
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
        }
    },
    {
    breakpoint: 1000,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    }
    },
    {
    breakpoint: 700,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
});
});

