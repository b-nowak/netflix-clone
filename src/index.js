import 'bootstrap';
import 'slick-carousel';
import $ from "jquery";


// JQuery
$(document).ready(() => {

    // bootstrap tooltips
    $(() => {
        $('[data-toggle="tooltip"]').tooltip({
            trigger: "hover"
        })
    });

    function getSliderSettings() {
        return {
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            centerMode: true,
            infinite: true,
            variableWidth: true,
            //centerPadding: '30px',
            focusOnSelect: true,
            //prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
            //nextArrow: '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>',
        }
    }

    $.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json", function (data1) {
        console.log(data1);
    });

    $.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json", function (data) {
        var entries = JSON.parse(data).feed.entry;
        var carousel = $('.carousel-secondary');

        $.each(entries, function (index, value) {
            var image = value["im:image"][2];
            var name = value["im:name"];
            $(carousel).append('<div><img style="margin: 0 35px; height: 355px" alt="' + name.label + '" src="' + image.label + '"/>');
        });
    });

    //Temp solution to fight back the issue with Slick not loading left side of the carousel
    setTimeout(function () {
        $('.carousel-secondary').slick(getSliderSettings())
    }, 500);

});