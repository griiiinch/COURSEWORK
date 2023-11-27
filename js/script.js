$(document).ready(function() {
    $(".burger").click(function() {
        $(this).toggleClass("burger-open")
        $(".nav").toggleClass("nav-open")
        $("body").toggleClass("lock")
    })

    $("[data-modal-open]").click(function(e) {
        e.preventDefault()
        $(".modal").addClass("modal-open")
        $("body").addClass("lock")
    })

    $(window).click(function() {
        $(".burger").removeClass("burger-open")
        $(".nav").removeClass("nav-open")
        $("body").removeClass("lock")
        $(".modal").removeClass("modal-open")
    });
    $(document).keyup(function(e) {
        if (e.key === "Escape") { 
            $(".burger").removeClass("burger-open")
            $(".nav").removeClass("nav-open")
            $("body").removeClass("lock")
            $(".modal").removeClass("modal-open")
        }
    });
      
    $('.nav, .burger, [data-modal-open], .modal-wrapper').click(function(event){
        event.stopPropagation();
    });

    const clientsSwiper = new Swiper('.clients-swiper', {
        spaceBetween: 20,
        speed: 1000,
        slidesPerView: 1,
        autoHeight: true,
        // autoplay: true,
        pagination: {
          el: ".clients-pagination",
          clickable: true,
        },
        breakpoints: {
            768: {
                speed: 2000,
            }
        }
      });
})