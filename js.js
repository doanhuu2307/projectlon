$(document).ready(function() {
    var slide = null;
    var list = $('.col-lg-4').offset().top;
    var list1 = $('.infor').offset().top;
    var list2 = $('.galley ').offset().top;
    $(window).scroll(function() {
        var srooltop = $('html,body').scrollTop();
        if (srooltop > 300) {
            $('.top-1').css('display', 'block');
        } else {
            $('.top-1').css('display', 'none');
        }
        if (srooltop > list2) {
            $('.galley0').addClass('galley0 ');
            $(' .galley1').addClass('galley1 ');
            $(' .galley2').addClass('galley2 ');
        } //else {
        //     $('.galley0').removeClass('galley0 ');
        //     $(' .galley1').removeClass('galley1 ');
        //     $(' .galley2').removeClass('galley2 ');
        // }
        if (srooltop > list1) {
            $('.infor .container-full .text').addClass('toleft1');
        } else {
            $('.infor .container-full .text').removeClass('toleft1');
        }
        if (srooltop > 50) {
            $('.top').addClass('css-top');
        } else {
            $('.top').removeClass('css-top');
        }
        if (srooltop > list) {
            $('.col-lg-4').addClass('fadein');

            $('.list2').addClass('fadein2');
            $('.list3').addClass('fadein3');
            $('.list4').addClass('fadein4');
            $('.list5').addClass('fadein5');
        } else {
            $('.col-lg-4').removeClass('fadein');

            $('.list2').removeClass('fadein2');
            $('.list3').removeClass('fadein3');
            $('.list4').removeClass('fadein4');
            $('.list5').removeClass('fadein5');
        }

    });
    $('.top-1').click(function(e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 2000)

    });
    $('.hinh-nho img').click(function(e) {
        e.preventDefault();
        $('.hinh-nho img').css({
            'border': 'none',
            'padding': '2px',
        })
        $('.hinh-nho img  ').css({
            'opacity': '0.3',
            'box-shadow': 'none'
        });
        $(this).css('border', 'solid 1px black');
        $(this).css('opacity', '1');
        $(this).css('box-shadow', '1px 1px 1px 2px #ddd');
        var srcSmall = $(this).attr('src')
        $('.hinh-slider').find('img').attr('src', srcSmall);

    });
    //slide = setInterval(slider, 4000);

});

function slider() {
    $('.hinh-nho img').click()
}