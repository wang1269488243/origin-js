/**
 * Created by Administrator on 2016/12/14.
 */
window.onload = function (){
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 120,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    
    //1.获取事件源;
    var warp = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arr = document.getElementById("arrow");
    var left = document.getElementById("arrLeft");
    var right = document.getElementById("arrRight");
    var flag = true;
    
    //2.传入obj,target,fn三个参数,将图片排序位置;
    assign();
    function assign(){
    	//遍历图片对象;
    	for (var i = 0; i < config.length; i++) {
    		//调用animate方法;
    		animate(lis[i],config[i],function(){
    			flag = true;
    		});
    	}
    }
    
    //鼠标悬停事件,显示左右点击按钮;
    wrap.onmouseover = function(){
    	//调用animate方法,并设置透明度为1,显示;
    	animate(arr,{
               opacity:1
           })
    }
    wrap.onmouseout = function(){
    	//调用animate方法,并设置透明度为0,隐藏;
    	animate(arr,{
               opacity:0
           })
    }
    
    //注册右边点击事件;
    right.onclick = function(){
    	if(flag){
    		flag = false;
    		config.push(config.shift());
    		//调用assign方法,对每个图片对象进行判断效果执行;
    		assign();
    	}
    }
    
    //注册左边边点击事件;
    left.onclick = function(){
    	if(flag){
    		flag = false;
    		config.unshift(config.pop());
    		//对每个config对象进行assign方法判断是否执行效果;
    		assign();
    	}
    }

}