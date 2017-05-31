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
    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����

    // 1. �Ȼ��Ҫ�����Ķ���
    var warp = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arr = document.getElementById("arrow");
    var left = document.getElementById("arrLeft");
    var right = document.getElementById("arrRight");
    var  flag = true;

    // 2. ��ÿ��li��ǩ���ߵ����Ե�λ��
    //animate(lis[0],config[0]);
    //animate(lis[1],config[1]);
    //animate(lis[2],config[2]);
    
    assign();//�ȵ���һ�Σ���li��ǩ��ɵ����Ե�λ��
    function assign(){  // ����
        for(var i = 0; i < config.length; i++) { //��ÿһ��li��ǩ�����ߵ���Ӧ�����õ���λ��
            animate(lis[i],config[i],function(){
//                flag = false;
            });
        }
    }

    // 3. �������������ʾ���Ұ�ť
    wrap.onmouseover = function (){
           animate(arr,{
               opacity:1
           })
    }
    // 4. ����뿪��ʱ��Ҫ�������Ұ�ť
    wrap.onmouseout = function (){
           animate(arr,{
               opacity:0
           })
    }
    // 5. ���Ҳఴťע���¼�
    right.onclick = function (){
           // ���ı������е�Ԫ�ص�λ�� Ҳ��˵�൱�ڽ������е����һ��Ԫ�طŵ������е�һ��λ��
        // Ҳ����˵�������е����һ��Ԫ�ؼ���������׷�ӵ�����ĵ�һ����
        //var a = config.pop();
        //config.unshift(a);
        //config.unshift(config.pop());

        //var b = config.shift();
        //config.push(b);
        if(flag){
            flag = false;
            config.push(config.shift());
            // ��Ҫ�����µ����õ��������li��ǩ����ʽ
            assign();//
        }

    }
    // 6. ����ఴťע���¼�
    left.onclick = function (){
        if(flag){
            flag = false;
            config.unshift(config.pop());
            assign();
        }

    }
    // 7. �ӽ�����


}