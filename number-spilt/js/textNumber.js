var placeholder = '支持多个手机号码，多个手机号码以英文半角逗号隔开';
	 $(function(){
		 initText('text');
	  });
	 function initText(obj){
		setPlaceholder(obj);
		bindC(obj);
		keyDown(obj);
		keyUp(obj);
		focus(obj);
		blur(obj);
	 }
	 function focus(obj){
		 $("#"+obj).bind("focus",function(ev){
			 var oT = $("#"+obj);
			 oT.css('color', '');
			 if(oT.val()==placeholder){
				 oT.val('');
			 }
			});	
	 }
	 function blur(obj){
		
		$("#"+obj).bind("blur",function(ev){
			 var oT = $("#"+obj);
			 if(oT.val()==''){
				 setPlaceholder(obj);
			 }
		});	
	 }
	 function setPlaceholder(obj){
		 var oT = $("#"+obj);
		 oT.val(placeholder).css('color', '#aaa').css('line-height', oT.css('height'));
	 }
    function keyDown(obj){
		$("#"+obj).bind("keydown",function(ev){
			var oEvent=ev||event;
			var keyCode = oEvent.keyCode;
			if(keyCode==8){
				unbindC(obj);
			}
		});	
	}
	function keyUp(obj){
		$("#"+obj).bind("keyup",function(ev){
			var oEvent=ev||event;
			var keyCode = oEvent.keyCode;
			if(keyCode==8){
				bindC(obj);
			}
		});
	}
    function bindC(obj){
		$("#"+obj).bind("propertychange",function(){
			textChange(obj);
		});
		$("#"+obj).bind("input",function(){
			textChange(obj);
		});
	}
	function unbindC(obj){
		$("#"+obj).unbind("propertychange");
		$("#"+obj).unbind("input");
	}
	 function textChange(obj){
			var oT=$("#"+obj);
			var oW=oT.val();
			var str = changeNumber(oW);
			unbindC(obj);
			/* if(str.length==0){
				str = '支持多个手机号码，多个手机号码以英文半角逗号隔开';
				oT.css('color', '#aaa').css('line-height', oT.css('height'));
			}else{
				oT.css('color', '');
			} */
			if(oW==''){
				setPlaceholder(obj);
			 }else{
				oT.val(str);
			 }
			bindC(obj);
	 }
	 function changeNumber(oW){
		 var arr=oW.replace(/[^0-9]/ig,"").split('');
			for(var i=0;i<arr.length+1;i++)
			{
				if((i+1)%5==0)
				{
					arr.splice(i,0,',');
				}
			}
			return arr.join('');
	};  
