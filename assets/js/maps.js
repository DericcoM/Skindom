// Map

ymaps.ready(function () {
    var map = new ymaps.Map("map", {
        center: [55.789887, 37.934651],
        zoom: 18
    });

    if (map) {
        ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
            var placemark = new Placemark([55.789887, 37.934651]);
        });
    }
});

// Search
$(".btn_soc").click(function(){
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
});

// Town select
$(".towns").click(function() {
    $(".town-arrow").toggleClass("open");
});