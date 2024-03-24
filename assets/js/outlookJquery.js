$(document).ready(function(){
    $("#listIcon").on("click",function(){
        $(".asside").slideToggle();
        $(".asside").toggleClass("hide");
    });
    $('#listIcon').click(function(){
        if ($(".asside").hasClass('on')) {
            $(".asside").removeClass('on');
            $(".asside").addClass('off');
        }
        else {
            $(".asside").removeClass('off');
            $(".asside").addClass('on');
        }
      });

    $("#favorites").click(function(){
        $(".favData").slideToggle();
        $("#down1").toggle();
    });
    $("#folders").click(function(){
        $(".folData").slideToggle();
        $("#down2").toggle();
    });
    $("#groups").click(function(){
        $(".groData").slideToggle();
        $("#down3").toggle();
    });


        // media
    $(window).resize(function () {
        if ($(window).width() <= 333) {
            $("#bot11").hide();
        } else {
            $("#bot11").show();
        }
            //
        if ($(window).width() <= 378) {
            $("#bot10").hide();
        } else {
            $("#bot10").show();
        }
            //
        if ($(window).width() <= 423) {
            $("#bot9").hide();
        } else {
            $("#bot9").show();
        }
            //
        if ($(window).width() <= 468) {
            $("#bot8").hide();
        } else {
            $("#bot8").show();
        }
            //
        if ($(window).width() <= 526) {
            $("#bot7").hide();
        } else {
            $("#bot7").show();
        }
            //
        if ($(window).width() <= 577) {
            $("#border").hide();
            $("#bot8INdropdown,#respond").show();
        } else {
            $("#border").show();
            $("#bot8INdropdown,#respond").hide();
        }
            //
        if ($(window).width() <= 742) {
            $("#onOpacity").hide();
            $("#bot7INdropdown").show();
        }
         else {
            $("#onOpacity").show();
            $("#bot7INdropdown").hide();
        }
            //
        if ($(window).width() <= 801) {
            $("#bot6").hide();
            $("#bot6INdropdown").show();

        } else {
            $("#bot6").show();
            $("#bot6INdropdown").hide();

        }
            //
        if ($(window).width() <= 846) {
            $("#bot5").hide();
            $("#bot5INdropdown").show();

        } else {
            $("#bot5").show();
            $("#bot5INdropdown").hide();
        }
            //
        if ($(window).width() <= 890) {
            $("#bot4").hide();
            $("#bot4INdropdown").show();

        } else {
            $("#bot4").show();
            $("#bot4INdropdown").hide();
        }
            //
        if ($(window).width() <= 949) {
            $("#bot3").hide();
            $("#bot3INdropdown,#tags").show();

        } else {
            $("#bot3").show();
            $("#bot3INdropdown,#tags").hide();
        }
            //
        if ($(window).width() <= 1030) {
            $("#bot2").hide();
            $("#bot2INdropdown,#print").show();
        } else {
            $("#bot2").show();
            $("#bot2INdropdown,#print").hide();
        }
            //
        if ($(window).width() <= 1076) {
            $("#bot1").hide();
            $("#bot1INdropdown").show();
            
        } else {
            $("#bot1").show();
            $("#bot1INdropdown").hide();
        }
            //
        if ($(window).width() <= 1083) {
            $(".asside").hide();
        } else {
            $(".asside").show();
        }
            //
        if ($(window).width() <= 1322) {
            $(".i-bottonbar").hide();
        } else {
            $(".i-bottonbar").show();
        }
            //
        if ($(window).width() <= 1357) {
            $("#ready").hide();
        } else {
            $("#ready").show();
        }
    });


   
});

