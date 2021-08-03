// $(document).ready(function(){
//     PopUpHide();
// });
// function PopUpShow(){
//     $("#popup1").show();
// }
// function PopUpHide(){
//     $("#popup1").hide();
// }



// Modal
const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    // setTimeout(function() {
    //     $(modalId).find(".modal__dialog").css({
    //         transform: "rotateX(0)"
    //     });
    // }, 200);

    $('#sliderLine1').slick('setPosition');

});

modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.removeClass("show");
    $("body").removeClass("no-scroll");
});

$(".modal").on("click", function(event) {
    $(this).removeClass("show");
    $("body").removeClass("no-scroll");
});

$(".modal__dialog").on("click", function(event) {
    event.stopPropagation();
});


// Slider: https://kenwheeler.github.io/slick/
$('#sliderLine1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  $('.slickPrev').on('click', function(event) {
    event.preventDefault();

    $('#sliderLine1').slick('slickPrev');
  });

  $('.slickNext').on('click', function(event) {
    event.preventDefault();

    $('#sliderLine1').slick('slickNext');
  });