import 'bootstrap';
import 'slick-carousel';
import $ from "jquery";


// JQuery
$(document).ready(() => {

    // bootstrap tooltips
    $(() => {
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
    }); 

    $('.carousel-secondary').slick({
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        //centerPadding: '30px',
        focusOnSelect: true,
        //prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
        //nextArrow: '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>',
    });

});