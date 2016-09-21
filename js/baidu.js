//阻止浏览器的默认行为
$(function(){
    $("#fullpage").mousedown(function(e){
        e.preventDefault()
        $("#fullpage").mousemove(function(e){
            e.preventDefault();
        })
    })
//整屏的轮播
    var clientH=$(window).height();
    var flag=true;
    var num=0;
    touch.on("#fullpage","swipe",function(e){
        if(e.direction=="down"){
            /*方向  开关  数字关联*/
            if(num==0){
                return
            }
            if(!flag){
                return
            }
            flag=false
            num--;
            $("#fullpage").css("marginTop",-num*clientH)
        }else if(e.direction=="up"){
            if(num==$(".section").length-1) {
                return
            }
            if(!flag){
                return
            }
            flag=false;
            num++;
            $("#fullpage").css("marginTop",-num*clientH)
            //2-4屏滑动的动画效果
            $(".section").each(function(index,obj){
                if(index==num){
                    $(obj).find(".text").css("transform","translate(0,0)").css("opacity",1);
                    $(obj).find(".tree").css("transform","translate(0,0)").css("opacity",1);
                }else{
                    $(obj).find(".text").css("transform","translate(-50px,0)").css("opacity",0.3);
                    $(obj).find(".tree").css("transform","translate(50px,0)").css("opacity",0.3);
                }
            })
            $(".circle1").css("background","").eq(num).css("background","#3d3d3d");
        }

    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
 //导航的点击效果 点击变成X号
    var flag=true;
    $(".small-right").click(function(){
        if(flag){
            $(".small-one").css({"transform":"translate(0,6px) rotate(45deg)"})
            $(".small-two").css({"transform":"translate(0,-4px) rotate(-45deg)"})
            flag=false;
            $(".meau").css({"height":"500","visibility":"visible"})
            $(".meau a" ).each(function(index,obj){
                $(obj).css("transition","all 0.4s ease "+index*0.2+"s")
            }).css({"opacity":1,"transform":"rotateY(0deg) scale(1,1)"})

        }else{
            $(".small-one").css({"transform":"translate(0,0px) rotate(0deg)"})
            $(".small-two").css({"transform":"translate(0,0px) rotate(0deg)"})
            flag=true;
            $(".meau").css({"height":"0","visibility":"hidden"})
            $(".meau a" ).each(function(index,obj){
                $(obj).css("transition","none")
            }).css({"opacity":1,"transform":"rotateY(60deg) scale(1,1)"})
        }
    })

    //圆点点击效果
    $(".circle1").click(function(){
        var index1=$(".circle1").index(this);
        $("#fullpage").css("marginTop",-index1*clientH);
        $(".section").each(function(index,obj){
            if(index==index1){
                $(obj).find(".text").css("transform","translate(0,0)").css("opacity",1);
                $(obj).find(".tree").css("transform","translate(0,0)").css("opacity",1);
            }else{
                $(obj).find(".text").css("transform","translate(-50px,0)").css("opacity",0.3);
                $(obj).find(".tree").css("transform","translate(50px,0)").css("opacity",0.3);
            }
        })
        $(".circle1").css("background","");
        $(this).css("background","#3d3d3d");
        num=index1;
    })
    //箭头点击效果
    $(".wait").click(function(){
        var index2=$(".wait").index(this);
        $("#fullpage").css("marginTop",-(index2+1)*clientH);
        $(".section").each(function(index,obj){
            if(index==index2+1){
                $(obj).find(".text").css("transform","translate(0,0)").css("opacity",1);
                $(obj).find(".tree").css("transform","translate(0,0)").css("opacity",1);
            }else{
                $(obj).find(".text").css("transform","translate(-50px,0)").css("opacity",0.3);
                $(obj).find(".tree").css("transform","translate(50px,0)").css("opacity",0.3);
            }
        })
        $(".circle1").css("background","").eq(index2+1).css("background","#3d3d3d");
        num=index2+1;
    })
    //变小之后屏幕尺寸的改变
    $(window).resize(function(){
        clientH=$(window).height();
        $("#fullpage").css("marginTop",-clientH*num);
    })
//点击小圆点字体出现的效果
    $(".circle1").hover(function(){
        var index=$(".circle1").index(this);
            $(".one").eq(index).css("display","block");
    },
        function(){
            $(".one").css("display","none");
    })
    $(".phone").hover(function(){
        $(".erwei").css("display","block");
    },function(){
        $(".erwei").css("display","none");
    })
    //二维码的移入移出
})