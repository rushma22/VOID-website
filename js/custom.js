// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// $(document).ready(function () {
//     $(".about_section .img-box img").animate({ "opacity": 0 }, 5000);
//     // $(".about_section .img-box img").animate({"opacity": 0}, 10000);
//     // if (document.scrollTop() > 10 && document.scrollTop() < 200 ) {
//     //    $('.about_section .img-box img').css('top', '320px');
//     // //    $('#first').css('left', '215px');
//     //    $('.about_section .img-box img').css('transition', '0.5s');
//     // } 
//     // else {
//     //    $('.about_section .img-box img').css('top', '300px');
//     // //    $('#first').css('left', '200px');
//     //    $('.about_section .img-box img').css('transition', '0.5s');
//     // }
// }); 

const container = document.querySelector('.about_section .row');
const image = document.querySelector('.about_section .img-box img');

// Calculate the scroll area (adjust as needed)
const scrollArea = 2400; // Total scrollable height

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || window.scrollTop;
    const scrollPercent = scrollTop / scrollArea || 0;

    // Update the image position
    image.style.top = scrollPercent * window.innerWidth + 'px';
});