(function ($) {
    $(function () {
        $('#nav-toggle').on('click', function () {
            $('body').toggleClass('open');
        });
    });
})(jQuery);
// recurute
$(window).scroll(function(){
    $('.re-img').each(function(){
        var elemPos = $(this).offset().top+150;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('in');
        }
    });
});

$(window).scroll(function(){
    $('.cu-img').each(function(){
        var elemPos = $(this).offset().top+150;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('in2');
        }
    });
});

// service-open
$(window).scroll(function(){
    $('.web-bg').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('open');
        }
    });
});
$(window).scroll(function(){
    $('.dx-bg').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('open');
        }
    });
});

$(window).scroll(function(){
    $('.con-bg').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('open');
        }
    });
});
// newsslide
$('.no1').on('mouseenter',function(){
    $('.arrow-1').addClass('slide-news');
});
$('.no1').on('mouseleave',function(){
    $('.arrow-1').removeClass('slide-news');
})
$('.no2').on('mouseenter',function(){
    $('.arrow-2').addClass('slide-news');
});
$('.no2').on('mouseleave',function(){
    $('.arrow-2').removeClass('slide-news');
})
$('.no3').on('mouseenter',function(){
    $('.arrow-3').addClass('slide-news');
});
$('.no3').on('mouseleave',function(){
    $('.arrow-3').removeClass('slide-news');
})

$('.no4').on('mouseenter',function(){
    $('.arrow-4').addClass('slide-news');
});
$('.no4').on('mouseleave',function(){
    $('.arrow-4').removeClass('slide-news');
})


// ヘッダーメニュードロップ
$(function(){
    $('.h-list li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.dropdown",this).slideUp();
    });
});


//scrolle
