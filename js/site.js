$(document).ready(function() {
    //Run opacity button
    updateHomeButton();

    //Easy Scrolling
    $('a[href^="#"]').click(function(e) {
        var $target = $(this.hash);
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $target.offset().top - 80
        }, 500);
    });

    //On Scroll Buttons
    $(window).scroll(function() {
        updateHomeButton();
    });

    function updateHomeButton() {

        $home = $('.nav__home');

        if ($(window).width() <= 790) {
            $home.hide();
            return;
        }
        
        if($(window).scrollTop() > 150) {
            $home.css("opacity", 1);
            $home.show();
            return;
        }

        if ($(window).scrollTop() == 0) {
            $home.hide();
        } else {
            $home.show();
        }

        $home.css("opacity", $(window).scrollTop()/150);
    }

    $(window).on('resize', function() {
        if ($(window).width() <= 790) {
            $('.nav__home').hide();
        } else {
            updateHomeButton();
        }
    });

    $('.skill__show-button').on('click', function(e) {
        let $additionalSkill = $(e.target).parent().find('.secondary-skills');
        let $additionalTitle = $(e.target).parent().find('.skill-block__title-additional');
        let $button = $(e.target);
        $additionalSkill.slideToggle();
        $additionalTitle.slideToggle();
        $button.toggleClass('skill__button-closed');
        $button.toggleClass('skill__button-open');
    });
});