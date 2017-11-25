$(document).ready(function() {
    //Run opacity button
    updateHomeButton();

    //Easy Scrolling
    $('a[href^="#"]').click(function(e) {
        var $target = $(this.hash);
        console.log($target.offset().top);
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
});