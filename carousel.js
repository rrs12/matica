$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive : {
        0 : {
            items : 1
           
        },
        917 : {
            items : 2
           
        },
        1100 : {
            items : 3
        }
    }})