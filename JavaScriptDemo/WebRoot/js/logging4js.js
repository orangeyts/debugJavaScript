var ua = navigator.userAgent.toLowerCase();
var isFirefox = (ua.indexOf('firefox') != -1)?true:false;
//alert("ua: "+ua+"  ,isFirefox: "+isFirefox);

var enbleIEAlert = true;

// debug level, support debug,info,warn，error

var debug_level = 1;
var info_level = 2;
var warn_level = 3;
var error_level = 4;
/**
 * init method
 * @param {Object} level
 * @memberOf {TypeName} 
 */
function Log(){
} 

Log.prototype.level = error_level;

/**
 * init 
 * @memberOf {TypeName} 
 */
Log.prototype.init = function(level) { //init method
	if(level == 'debug'){
		Log.prototype.level = debug_level;
	}else if(level == 'info'){
		Log.prototype.level = info_level;
	}else if(level == 'warn'){
		Log.prototype.level = warn_level;
	}else if(level == 'error'){
		Log.prototype.level = error_level;
	}
}

/**
 * debug 
 * @memberOf {TypeName} 
 */
Log.prototype.debug = function(msg) { //添加方法  
		//alert("enbleIEAlert: "+enbleIEAlert);
	if(Log.prototype.level <= debug_level){
		 if(isFirefox){
	    	console.debug(msg);
    	}else if(enbleIEAlert){
				alert(msg);
		}
	}
};

/**
 * info 
 * @memberOf {TypeName} 
 */
Log.prototype.info = function(msg) { //添加方法  
	if(Log.prototype.level <= info_level){
	    if(isFirefox){
	    	console.info(msg);
		}else if(enbleIEAlert){
			alert(msg);
		}
    }
    
};

/**
 * warn 
 * @memberOf {TypeName} 
 */
Log.prototype.warn = function(msg) { //添加方法  
	if(Log.prototype.level <= warn_level){
	    if(isFirefox){
	    	console.warn(msg);
		}else if(enbleIEAlert){
			alert(msg);
		}
    }
};

/**
 * error 
 * @memberOf {TypeName} 
 */
Log.prototype.error = function(msg) { //添加方法  
	if(Log.prototype.level <= error_level){
	    if(isFirefox){
	    	console.error(msg);
		}else if(enbleIEAlert){
			alert(msg);
		}
    }
};

var log = new Log(); 
log.init("error");


/**
 * 获得浏览器参数
 * @use 
 * 	var request = new QueryStringY();
 *	var value = unescape(request["key"]);
 * @memberOf {TypeName} 
 */
function QueryStringY(){
	var name,value,i;
	var str=location.href;
	var num=str.indexOf("?");
	str=str.substr(num+1);
	var arrtmp=str.split("&");
	for(i=0;i<arrtmp.length;i++){
		num=arrtmp[i].indexOf("=");
		if(num>0){
			name=arrtmp[i].substring(0,num);
			value=arrtmp[i].substr(num+1);
			this[name]=value;
		}
	}
}
/**
 * TODO
 * if(isFirefox){
			//1 输出调试信息
			//console.error('error')//向控制台中写入错误信息，带错误图标显示和高亮代码链接；
	    	console.info('info中文测试')//向控制台中写入提示信息，带信息图标显示和高亮代码链接；
	    	console.warn('warn')//向控制台中写入警告信息，带警告图标显示和高亮代码链接；
	    	//2 字符串支持字符串替换
	    	var arr = new Array();
			arr.push(3.5);
			arr.push(2);
			arr.push('char info');
	    	console.log('-----------date object info %o',arr)
	    	
	    	
	    	//console.dir可以将一个对象的所有方法和属性打印出来
	    	console.dir(console)
	    	console.dirxml('<div>this is a div</div>')
	    	
	    	//信息的分组
	    	var groupname = "Group 1";
		    console.group("Message group %s", groupname);
		    console.debug("This is the 1 message in %s", groupname);
		    console.debug("This is the 2 message in %s", groupname);
		    console.debug("This is the 3 message in %s", groupname);
		    console.groupEnd();
		                
		    goupname = "Group 2";
		    console.group("Message group %s", goupname);
		    console.debug("This is the 1 message in %s", goupname);
		                
		    var subgroupname = "Sub group 1";
		    console.group("Message group %s",subgroupname);
		    console.debug("This is the 1 message in %s", subgroupname);
		    console.debug("This is the 2 message in %s", subgroupname);
		    console.debug("This is the 3 message in %s", subgroupname);
		    console.groupEnd();
		                
		    console.debug("This is the 2 message in %s", goupname);
		    console.groupEnd();
		}else{
			alert("only support firefox ");
		}
 */