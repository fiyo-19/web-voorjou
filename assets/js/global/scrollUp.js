// scrollUp.js
export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.scrollToTop = scrollToTop;

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.scrollOnTop').fadeIn();
    } else {
        $('.scrollOnTop').fadeOut();
    }
});
