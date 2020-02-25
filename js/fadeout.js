    $(window).scroll(function() {
        var $el = $('.section');

        if ($(this).scrollTop() >= 20) $el.addClass('section0');
        else $el.removeClass('section0');
    });
