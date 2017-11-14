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

    // Replace select SVG's with the inline SVG
    // $('.project-card-arrow').each(function() {
    //     console.log('hit');
    //     var $img = $(this);
    //     var imgClass = $img.attr('class');
    //     var imgURL = $img.attr('url');

    //     $.get(imgURL, function(data) {
    //         var $svg = $(data).find('svg');

    //         if (typeof imgClass !== 'undefine') {
    //             $svg = $svg.attr('class', imgClass);
    //         }

    //         img.replaceWith($svg);
    //     }, 'xml');
    // });

    //Hover for arrow SVG
    // $('.project-card')
    
});