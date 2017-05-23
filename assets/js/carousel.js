$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"
  ],
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            slideBy: 4
        },
        600: {
            items: 3,
            slideBy: 4
        },
        1000: {
            items: 5,
            slideBy: 4
        }
    }
})