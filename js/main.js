$(document).ready(function(){
    // const cowbell = $("#cowbell");
    // const drumtop = $("#drumtop");
    // const sticks = $("#sticks");
    // const cymbal = $("#cymbal");
    const mainPage = $(".main-content-wrap");
    const links = $(".social-bar-main");
    const mainMenu = $(".menu-iconbar");

    $(mainPage).load('./pages/content.html');
    $(links).load('./pages/links.html');
    $(mainMenu).load('./pages/menu.html');

});