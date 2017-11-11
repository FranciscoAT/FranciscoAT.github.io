$(document).ready(function() {

    //Easy Scrolling
    $('a[href^="#"]').click(function(e) {
        var $target = $(this.hash);
        console.log($target.offset().top);
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $target.offset().top - 60
        }, 500);
    });
});