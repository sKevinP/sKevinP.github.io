$(window).scroll(function() {
    var sticky = $('.nav-bar'),
        scroll = $(window).scrollTop();
    
    if (scroll >= 40) { 
        sticky.addClass('fixed'); }
    else { 
    sticky.removeClass('fixed');
    }
});