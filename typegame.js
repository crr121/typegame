# typegame
//创建一个div模板
     var init = function(){
     	clearInterval(moveInterval);
    var temp = document.createElement("DIV");//创建一个名字为DIV的标签
	 temp.setAttribute("class","temp");
	  // document.body.appendChild(temp);//这里一定要注意将创建好的div添加到body里面
      //这里相当于创建了一个这样的div对象：<DIV type="class" name=“template"></DIV>
      //为DIV添加属性
     //创建文本节点
     var info=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //下面利用随机数确定info的下标将字母随机的添加到文本节点中
     var txt = document.createTextNode(info[window.parseInt(Math.random()*info.length)]);
    //将文本节点添加到div中
     temp.appendChild(txt);
     //下面获取浏览器的宽度
     var win_width = window.innerWidth;
     //让浏览器的宽度产生随机数赋值给div的坐标
     var temp_left = Math.floor( (Math.random()*(win_width-52)) ) ;//这里的坐标是从0开始的所以就不用加1 加1的话就是[1,48]取不到0
     //这里需要减去一个div的宽度，因为到最右边
     temp.style.left = temp_left + "px";//由于temp.style.left的值为一个字符串以Px为单位，所以这里temp_left需要加上一个单位   
     // style.left 返回的是字符串，如28px，offsetLeft返回的是数值28，如果需要对取得的值进行计算，
     //还用offsetLeft比较方便。
    // temp.style.left = temp_left ;
     // temp.style.top =  0 ;
     temp.style.top =  0 + "px";//这里还需要给每一个div都定义一个初始的top坐标，让他们产生的时候都是在浏览器的顶上
     document.body.appendChild(temp);
     //这里创建好div模板之后，需要调用移动过的函数
    moveInterval =  window.setInterval(moveTemp,10);
}
var moveInterval ;
   //创建div移动的函数
   //先要获取body中所有的div，然后获取每一个div的div.style.top值，然后将每一个div.style.top+=1；
   //同时要添加一个if语句判断是否达到窗口的最大值
   //定义一个循环标识 这里的循环标识应该是全局变量
   
   var moveTemp = function(){
   	//获取到所有的div 这里是通过标签来获取每个div
   	var divs = document.getElementsByTagName("DIV");//之前用document.createElement("DIV"),所以这里获取的标签名字也是DIV
   	//这个方法返回一个节点的集合，这个集合可以当做一个数组来处理。
    //这个集合的length属性等于当前文档里有着给定标签名的所有元素的总个数。
    //这个数组里面的每个元素都是一个对象，他们都有着nodeName、nodeType、parentNode、childNodes等属性。
   	//得到所有的div的top值  得到的top值为一个字符串  34px  先要得到数字     	
   for (var i = 0; i < divs.length; i++) {
   	var div_top = divs[i].style.top;
   	div_top = window.parseInt(div_top.substring(0,div_top.length-2))+1;
   	//这里先来个判断语句 判断是否到达窗口的底端
   	//获取窗口的高度
   	var  win_height = window.innerHeight-52;
   	if(div_top>=win_height){
   		document.body.removeChild(divs[i]);
   		
   	}else{
   		 divs[i].style.top = div_top + "px";
   		//document.removeChild(divs[i]);//这里移除也可以采用DM的自带函数removeChild()//
   		//这里移除的是body里面的元素，还需要加上body
   	     }    
   }
}
    	//利用window的函数onkeypress（），通过传递参数event，获取event的属性keycode
    	window.onkeypress = function(event){
    	var keyASI  =	event.keyCode;
    	//下面获取body里面的文字的ASCII码
    	//先根据document.getelementbytagname()获取到所有的div
    	var divs = document.getElementsByTagName("DIV");
    	//遍历所有的div
    	for (var i = 0; i < divs.length; i++) {
    	var divASI = divs[i].innerHTML.toLowerCase().charCodeAt();
    	if(keyASI == divASI){
    		document.body.removeChild(divs[i]);
    		break;		
            }
    	}
    	
   }


window.onload=function(){
	window.setInterval(init,1000);
}
	 
