$(document).ready(function(){
    // alert("Hello!");
    var rdInner = $('.rd-inner');
    var outer = $('#outer');
    // var gifImages = $('#gif-images');
    var gifImages = $('#background-images img');
    var gifLogo = $('.main-logo-cont');

    outer.hover(function(){
        // alert("HI!");
        rdInner.fadeToggle(500, 0.0);
    });

});