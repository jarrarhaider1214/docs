$(document).ready(function(){

    //caches a jQuery object containing the header element
    var header = $(".sidebar");
    header.addClass('sidebarMarginTop')
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if(scroll >= 1) {
            header.removeClass('sidebarMarginTop').addClass("sidebarMarginTop_0"); 
        }
        else {
            header.removeClass("sidebarMarginTop_0").addClass('sidebarMarginTop');
        }
    });

    // $("#main > p, h1, h2, h3, h4, h5, h6").not(".footer").css("max-width", "800px");

// var footer = $(".footer");
// var article = $("#main");
// // alert($(".footer").length);
//  $('.footer').remove();
//  $(footer).insertAfter('#main');
// //  $("#main").insertAfter("footer");
}
);
