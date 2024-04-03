console.log("Hello!");
$(document).ready(function () {
    $('.slider').slick( {
        arrows:false,
        dots:true,
        speed:1000,
    });
});

$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, .popup, .header-navigation').toggleClass('active');
    });
});