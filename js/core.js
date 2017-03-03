$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true
    });

    $('#menu-btn').click(function(){
        $('.header__menu').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        }else{
            setTimeout(function(){
                $('.is-active').addClass('not-active').removeClass('is-active')
            },600)
        }
    });

    $('.req').focusout(function(){
        if ($(this).val() == '') {
            $(this).parent('span').addClass("error").removeClass('active');
            $(this).next('em').remove();
            $(this).parent('span').append("<em>* Данное поле является обязательным</em>")
        }else {
            $(this).parent('span').addClass("active").removeClass('error');
            $(this).next('em').remove()
        }

        var all_p_elements = $('.contact__row').find($("span"));
        var all_p_active_elements = $('.contact__row').find($("span.active"));
        if ( all_p_elements.length == all_p_active_elements.length) {
            $('.btn').removeAttr('disabled')
        }else{
            $('.btn').attr("disabled", true)
        }

    });
    $(".email").inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                cardinality: 1,
                casing: "lower"
            }
        }
    });

    $(".header__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var $workscontainer = $('.work__gallery');

    $('.work__category a').click(function(){
        $('.work__category .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $workscontainer.isotope({
            filter: selector
        });
        return false;
    });

    $('.up').click(function() {
        $('html, body').animate({scrollTop: 0},1500);
        return false;
    })
    
});
