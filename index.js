$(function(){
    setInterval(function (){
        $('.banner').animate({
            marginLeft : "-640px"
        },1500,function(){
            $(this).css({marginLeft : "0px"}).find("a:first").appendTo(this);
        })
    },3000);
});
(function(){
    if($(".because_btn a").className!="hover"){
        $(".because_btn a").click(function (){
            $(".because_btn a.hover").removeClass("hover").siblings().addClass("hover");
            $(".because ol").toggle(
                function () {
                    $(this).addClass("sideBecause");
                    $(this).siblings().addClass("outBecause");
                }
            );
        });
    }
})();