$(document).ready(function(){
    $("#logo a").on("mouseenter focus" ,function(){
        $("#header-menu").stop().slideDown();
        $("#header-menu ul").css({ "height" : "430px" , "padding-top" : "80px" });
        $("#header-menu").css("top", "0" );
    });
    $(".header-menu-title").on("mouseenter focus" , function(){
        $(".header-menu-title").removeClass("ent");
        $(this).addClass("ent");
    });
    $(".header-menu-sub-list").on("mouseenter focus" , function(){
        $(".header-menu-title").removeClass("ent");
        $(this).parent().prev().addClass("ent");
    });
    $("#header-menu").mouseleave(function(){
        $("#header-menu a").removeClass("ent");
        $("#header-menu").slideUp();
    });
    $("#header-menu").blur(function(){
        $("#header-menu a").removeClass("ent");
        $("#header-menu").slideUp();
    });
});//END ALL