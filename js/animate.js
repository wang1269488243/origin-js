/**
 * Created by Administrator on 2016/10/25.
 */
/**
 * ��ñ�ǩ��������ֵ�ĺ���
 * @param obj
 * @param attr
 * @returns {*}
 */
/*function getStyle(obj,attr){
    // �������  ��ν��������⣬Ҳ���ǿ�������Ƿ�֧�ִ˶�������Ի��Ƿ���
    if(obj&&obj.currentStyle){
        return  obj.currentStyle[attr];
    }else {
        return  getComputedStyle(obj,null)[attr];
    }
}

function animate(obj,json,fn){
    // Ϊ�˱�֤��ǰ�����˶���ʱ��ֻ�Ὺ��һ����ʱ������Ҫ����ʱ�����ڵ�ǰ�����������
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function (){
        var flag = true;
        for(var key in json){
            //var leader = obj.offsetLeft;// style.left������style�ķ�ʽֻ�ܻ�ȡ ���ڵ�����ֵ�����left������Ƕ����Ĭ��ûд������£�����ֻ������offsetLeft����ȡ
            //var att=getStyle(obj,attr); // ��õ�ǰ�������ڵ�attr�������ֵ
            //var leader = parseInt(att)||0 ;// ������ַ�ת��Ϊnumber���ͣ����û��������ԵĻ�����һ��Ĭ�ϵ�ֵ0
            //var step = (target-leader)/10;

            if(key == "opacity"){
                var leader = parseInt(getStyle(obj,key)*100)||0; //��Ϊopacity��С��Ϊ�˱��ڼ��㣬�Ƚ���ֵ����100��
                var target = json[key]*100;//�������json�����Ŀ��λ��
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader/100;
            }else if(key=="zIndex"){
                var leader = parseInt(getStyle(obj,key))||0; //��ǰ�������ڵ�����ֵ
                var target = json[key];//�������json�����Ŀ��λ��
                step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader;
            }else {
                var leader = parseInt(getStyle(obj,key))||0; //��ǰ�������ڵ�����ֵ
                var target = json[key];//�������json�����Ŀ��λ��
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader +'px';
            }
            if(leader!=target){ //�����һ�����Ե�ֵû�е���Ŀ��λ�õĻ�,��Ҫ��flagΪfalse
                flag = false;
            }
        }
        if(flag){ // Ҫ���flag��ֵ��ȷ���Ƿ�Ҫ���ʱ��
            clearInterval(obj.timerId);
            if(fn){ //���fn��ֵ��������һ������Ļ���������������
                fn();
            }
        }
    },15)
}*/


//第二遍;
/*function getStyle(obj,attr){
    if(obj&&obj.currentStyle){
        return  obj.currentStyle[attr];
    }else {
        return  window.getComputedStyle(obj,false)[attr];
    }
}


function animate(obj,json,fn){
	clearInterval(obj.timeId);
	obj.timeId = setInterval(function(){
		var flag = true;
		for(var key in json){
			if(key == "opacity"){
				var leader = parseInt(getStyle(obj,key)) || 0;
				var target = json[key] * 100;
				var step = (target-leader)/10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				leader = leader + step;
				obj.style[key] = leader/100;
			}else if(key == "zIndex"){
				var leader = parseInt(getStyle(obj,key)) || 0;
				var target = json[key];
				var step = (target-leader)/10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				leader = leader + step;
				obj.style[key] = leader;
			}else{
				var leader = parseInt(getStyle(obj.key)) || 0;
				var target = json[key];
				var step = (target-leader)/10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				leader = leader + step;
				obj.style[key] = leader + "px";
			}
			if(leader != target){
				flag = false;
			}
		}
		if(flag){
			clearInterval(obj.timeId);
			if(fn){
				fn();
			}
		}
		
	},20)
}*/


//第三遍
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function animate(obj,json,fn){
	clearInterval(obj.timeId);
	obj.timeId = setInterval(function(){
		var flag = true;
		for(var key in json){
			if(key == "opacity"){
                var leader = parseInt(getStyle(obj,key)*100) || 0;
                var target = json[key]*100;
                var step = (target-leader)/10;
                step = step > 0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader/100;
            }else if(key=="zIndex"){
                var leader = parseInt(getStyle(obj,key)) || 0;
                var target = json[key];
                var step = (target-leader)/10;
                step = step > 0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader;
            }else {
                var leader = parseInt(getStyle(obj,key)) || 0;
                var target = json[key];
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = step + leader;
                obj.style[key] = leader + "px";
            }
            if(leader != target){
            	flag = false;
            }
        }
        if(flag){
        	clearInterval(obj.timeId);
        	if(fn){
        		fn();
        	}
        }
	},20)
}
