$(document).ready(function(){
    const cowbell = $("#cowbell");
    const drumtop = $("#drumtop");
    const sticks = $("#sticks");
    const cymbal = $("#cymbal");
    const home = $("");

    const content = $(".main-content-wrap");
    
    cowbell.click(function(){
        $(content).load('./pages/about.html');
    });
    drumtop.click(function(){
        $(content).load('./pages/gallery.html');
    });
    sticks.click(function(){
        $(content).load('./pages/contact.html');
    });
    cymbal.click(function(){
        $(content).load('./pages/events.html');
    });
    home.click(function(){
        $(content).load('./pages/content.html');
    });
});