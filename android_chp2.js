if (window.innerWidth && window.innerWidth <= 480) { 
    $(document).ready(function(){
        $('#header ul').addClass('hide'); 
        $('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');
    }); 
    function toggleMenu() {
        $('#header ul').toggleClass('hide'); 
        $('#header .leftButton').toggleClass('pressed');
    }
}
 /*Here we have the so-called “document ready” function. If you are new to jQuery, 
this can be a bit intimidating, and I admit that it took me a while to memorize the
syntax. However, it’s worth taking the time to commit it to memory, because you’ll
be using it a lot. The document ready function basically says, “When the document
is ready, run this code.” More on why this is important in a sec.*/