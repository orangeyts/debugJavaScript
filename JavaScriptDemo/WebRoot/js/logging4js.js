var ua = navigator.userAgent.toLowerCase();
var isFirefox = (ua.indexOf('firefox') != -1)?true:false;
//alert("ua: "+ua+"  ,isFirefox: "+isFirefox);

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
    if(isFirefox){
    	//alert("Log.prototype.level: "+Log.prototype.level);
    	//alert("debug_level: "+debug_level);
    	if(Log.prototype.level <= debug_level){
	    	console.debug(msg);
    	}
    }
};

/**
 * info 
 * @memberOf {TypeName} 
 */
Log.prototype.info = function(msg) { //添加方法  
    if(isFirefox){
    	if(Log.prototype.level <= info_level){
	    	console.info(msg);
    	}
    }
};

/**
 * warn 
 * @memberOf {TypeName} 
 */
Log.prototype.warn = function(msg) { //添加方法  
    if(isFirefox){
    	if(Log.prototype.level <= warn_level){
	    	console.warn(msg);
    	}
    }
};

/**
 * error 
 * @memberOf {TypeName} 
 */
Log.prototype.error = function(msg) { //添加方法  
    if(isFirefox){
    	//alert("Log.prototype.level: "+Log.prototype.level);
    	//alert("error_level: "+error_level);
    	if(Log.prototype.level <= error_level){
	    	console.error(msg);
    	}
    }
};

var log = new Log();
log.init("warn");

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