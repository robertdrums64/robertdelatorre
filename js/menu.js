$(document).ready(function(){
    const cowbell = $("#cowbell");
    const drumtop = $("#drumtop");
    const sticks = $("#sticks");
    const cymbal = $("#cymbal");
    const content = $(".main-content-wrap");
    
    cowbell.click(function(){
        $(content).load('./pages/content.html');
    });
    drumtop.click(function(){
        $(content).load('./pages/gallery.html');
    });
    sticks.click(function(){
        $(content).load('./pages/events.html');
    });
    cymbal.click(function(){
        $(content).load('./pages/contact.html');
    });
});