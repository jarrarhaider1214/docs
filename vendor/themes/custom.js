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

var footer = $(".footer");
var article = $("#main");
// alert($(".footer").length);
 $('.footer').remove();
 $(footer).insertAfter('#main');
//  $("#main").insertAfter("footer");
}
);
