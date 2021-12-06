$(document).ready(function(){
    let i = 0;
    let leftClickable = false;
    let rightClickable = true;
    $("#btn-left").click(function(){
        i += 379;
        rightClickable = true;
        if(i > 0){
            i = 0;
            leftClickable = false;
            $("#btn-left-img").attr("src", "img/btn_left.png");
        }
        else {
            $(".recommended-item").css("transform", "translate(" + i + "px,0)");
        }
    });

    $("#btn-right").click(function(){
        i -= 379;
        leftClickable = true;
        if(i < -1137){
            i = -1137;
            rightClickable = false;
            $("#btn-right-img").attr("src", "img/btn_right.png");
        }
        else{
            $(".recommended-item").css("transform", "translate(" + i + "px,0)");
        }
    });

    $("#btn-left").mouseenter(function(){
        if(leftClickable){
        $("#btn-left-img").attr("src", "img/btn_left-hover.png");
        }
    }).mouseleave(function(){
        $("#btn-left-img").attr("src", "img/btn_left.png");
    });

    $("#btn-right").mouseenter(function(){
        if(rightClickable){
        $("#btn-right-img").attr("src", "img/btn_right-hover.png");
        }
    }).mouseleave(function(){
        $("#btn-right-img").attr("src", "img/btn_right.png");
    });

    $("#icon-fb").mouseenter(function(){
        $("#icon-fb").attr("src", "img/icon_fb-hover.png");
    }).mouseleave(function(){
        $("#icon-fb").attr("src", "img/icon_fb.png");
    });

    $("#icon-ig").mouseenter(function(){
        $("#icon-ig").attr("src", "img/icon_ig-hover.png");
    }).mouseleave(function(){
        $("#icon-ig").attr("src", "img/icon_ig.png");
    });

});

