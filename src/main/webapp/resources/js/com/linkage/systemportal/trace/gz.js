
var http_request = false;
var stopFlag = false;//是否停止定时查询
var task_id = 0;//任务ID
var recNum = 0;//当前记录条数
var filePath;//记录文件路径
var gzdx = 1;//记录跟踪对象的数量  该变量的值随着跟踪的主机的增加而增加
var over = false;//标识查询是否完成
var nodata = true;//标识是否已经查询到数据
var fileexist = false;
var i = 0;
function getRadioValue(radioName) {
	var radio = document.getElementsByName(radioName);
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			return radio[i].value;
		}
	}
}
function createTrace() {
	var f = document.gz_form;
	var lx = getRadioValue("gzlx");
	var url;
	if (lx == 0) {
		url = "createTrace.jsp?dialing=" + f.dialing_num_1.value + "&taskid=" + task_id;
	} else {
		if (lx == 1) {
			url = "createTrace.jsp?dialed=" + f.dialed_num_1.value + "&taskid=" + task_id;
		} else {
			url = "createTrace.jsp?dialing=" + f.dialing_num_2.value + "&dialed=" + f.dialed_num_2.value + "&taskid=" + task_id;
		}
	}
	send_request(url);
}
function queryTrace() {
	send_request("queryTrace.jsp?task_id=" + task_id + "&type=" + getRadioValue("gzfw") + "&gzdx=" + gzdx);
}
function updateStatus() {
	if (over) {
		document.getElementById("gz_status").innerHTML = "状态：跟踪已经停止，总共跟踪到【" + recNum + "】行数据";
	} else {
		document.getElementById("gz_status").innerHTML = "状态：正在跟踪，已经跟踪到【" + recNum + "】行数据";
	}
		//使表格右侧的滚动条始终保持在最下方
	var div = document.getElementById("traceTable");
	div.scrollTop = div.scrollHeight;
}
function saceTraceData() {
	send_request("saveTraceData.jsp?task_id=" + task_id + "&filePath=" + filePath);
}
function stopTrace() {
	send_request("stopTrace.jsp?task_id=" + task_id);
}
function saveTrace() {
	window.location.href("saveTrace.jsp?filePath=" + filePath);
	buttonControl(3);
}
function send_request(url) {
	http_request = false;
	if (window.XMLHttpRequest) {
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType("text/xml");
		}
	} else {
		if (window.ActiveXObject) {
			try {
				http_request = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (e) {
				try {
					http_request = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e) {
				}
			}
		}
	}
	if (!http_request) {
		window.alert("Can't create XMLHttpRequest object instance");
		return false;
	}
	if (url.indexOf("createTrace.jsp") != -1) {
		http_request.onreadystatechange = processCreateRequest;
	} else {
		if (url.indexOf("queryTrace.jsp") != -1) {
			http_request.onreadystatechange = processQueryRequest;
		} else {
			if (url.indexOf("stopTrace.jsp") != -1) {
				http_request.onreadystatechange = processStopRequest;
			} else {
				if (url.indexOf("saveTraceData.jsp") != -1) {
					http_request.onreadystatechange = processSaveRequest;
				}
			}
		}
	}
	http_request.open("GET", url, false);
	http_request.send(null);
}
function processCreateRequest() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var response_value = http_request.responseText.split("|");
			if (response_value[0] == 0) {
			    //创建跟踪任务成功，控制按钮显示，进度条进度，并发起查询调用
				buttonControl(2);
				task_id = response_value[1];
				var num = response_value[2] / response_value[3] * 100;
				var percent;
				if (num == 100) {
					percent = 99;
				} else {
					percent = new String(num).substr(0, 2);
				}
				updateProcessBar(percent, "\u6b63\u5728\u521b\u5efa\u8ddf\u8e2a...");
				filePath = response_value[4];
				gzdx=1;
				setTimeout("queryTrace()", 500);
			} else {
				if (response_value[0] == 1) {
					updateProcessBar(100, "");
					buttonControl(1);//按钮设为初始状态
					alert("\u521b\u5efa\u8ddf\u8e2a\u5931\u8d25," + response_value[2]);
				}
			}
		} else {
			alert("The web you requested is abnormal");
		}
	}
}
function processQueryRequest() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var response_value = http_request.responseText.split("|");
			if (response_value[0] == 0) {
				nodata = false;
				updateProcessBar(100, "");
				document.getElementById("table_div").innerHTML = response_value[1];
				recNum = response_value[2];
				updateStatus();//更新状态栏 并把滚轴拉到最下
				var flag;
				if(response_value.length == 4){
				  flag=response_value[3];
				}
				if(flag == 1){
				  gzdx=1;//最后一条鉴权数据已经查询，重新查询接口设备
				  setTimeout("queryTrace()", 1500);
				}else{
				  gzdx=2;//继续查询接口设备
				  setTimeout("queryTrace()", 100);
				}
			} else {
				if (response_value[0] == 1) {//所有接口设备没有查询到数据，继续查询接口设备
					if (nodata == true) {
						if (i <= 49) {
							i = i + 2;
						} else {
							i = 2;
						}
						if(i>=50){
						   i=50;
						}
						var num = i / 50 * 100;
						var percent;
						if (num == 100) {
							percent = 99;
						} else {
							percent = new String(num).substr(0, 2);
						}
						updateProcessBar(percent, "\u5f53\u524d\u6ca1\u6709\u8ddf\u8e2a\u5230\u6570\u636e...");
					}
					gzdx = 1;
					setTimeout("queryTrace()", 1500);
				} else {
					if (response_value[0] == 2) {//接口设备的数据已经查询完毕，开始查询鉴权设备
						gzdx = 3;
						setTimeout("queryTrace()", 100);
					} else {
						if (response_value[0] == 3) {//后台跟踪已经停止,如果有数据就保存数据.
							nodata = false;
							gzdx = 1;
							  if(recNum!=0){setTimeout("saceTraceData()", 100);}
							  else{
							    updateProcessBar(100,"");
				                buttonControl(3);
							    alert("跟踪结束,没有跟踪到数据!");
							    }
						}
					}
				}
			}
		} else {
			alert("The web you requested is abnormal");
		}
	}
}
function processSaveRequest() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var response_value = http_request.responseText;
			if (response_value == 0) {
			    updateProcessBar(100,"");
				fileexist = true;
				buttonControl(3);
				over = true;
				updateStatus();
				alert("\u8ddf\u8e2a\u7ed3\u675f\uff0c\u8ddf\u8e2a\u6570\u636e\u5df2\u7ecf\u4fdd\u5b58\u8fdb\u6587\u4ef6!");
			} else {
			    updateProcessBar(100,"");
				buttonControl(3);
				alert("\u8ddf\u8e2a\u7ed3\u675f..");
			}
		} else {
			alert("The web you requested is abnormal");
		}
	}
}
function processStopRequest() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var response_value = http_request.responseText.split("|");
			if (response_value[0] == 0) {
			    buttonControl(0);
                alert(response_value[2]+",稍候将停止查询");
			}else{
			   if(response_value[0] == 1){
			     alert(response_value[2]+",稍候将停止查询");
			     buttonControl(0);
			   }
			} 
		} else {
			alert("The web you requested is abnormal");
		}
	}
}
function check() {
	var gzlx_group = document.getElementsByName("gzlx");
	if (gzlx_group[0].checked) {
		document.getElementById("tj_dialing").style.display = "block";
		document.getElementById("tj_dialed").style.display = "none";
		document.getElementById("tj_all").style.display = "none";
	} else {
		if (gzlx_group[1].checked) {
			document.getElementById("tj_dialing").style.display = "none";
			document.getElementById("tj_dialed").style.display = "block";
			document.getElementById("tj_all").style.display = "none";
		} else {
			document.getElementById("tj_dialing").style.display = "none";
			document.getElementById("tj_dialed").style.display = "none";
			document.getElementById("tj_all").style.display = "block";
		}
	}
}
function check_num() {
	var gzlx_group = document.getElementsByName("gzlx");
	if (gzlx_group[0].checked) {
		if (document.gz_form.dialing_num_1.value == "") {
			alert("\u8bf7\u8f93\u5165\u4e3b\u53eb\u53f7\u7801\uff01");
			document.gz_form.dialing_num_1.focus();
			return false;
		}
	} else {
		if (gzlx_group[1].checked) {
			if (document.gz_form.dialed_num_1.value == "") {
				alert("\u8bf7\u8f93\u5165\u88ab\u53eb\u53f7\u7801\uff01");
				document.gz_form.dialed_num_1.focus();
				return false;
			}
		} else {
			if (document.gz_form.dialing_num_2.value == "") {
				alert("\u8bf7\u8f93\u5165\u4e3b\u53eb\u53f7\u7801\uff01");
				document.gz_form.dialing_num_2.focus();
				return false;
			}
			if (document.gz_form.dialed_num_2.value == "") {
				alert("\u8bf7\u8f93\u5165\u88ab\u53eb\u53f7\u7801\uff01");
				document.gz_form.dialed_num_2.focus();
				return false;
			}
		}
	}
	return true;
}
function begin() {
	init();
	if (check_num()) {
		buttonControl(0);
		document.getElementById("table_div").innerHTML = "";
		updateProcessBar(1, "\u5f00\u59cb\u521b\u5efa\u8ddf\u8e2a\u4efb\u52a1..");//初始创建跟踪进度条
		setTimeout("createTrace()", 100);
	}
}
function init() {
	stopFlag = false;
	fileexist = false;
	task_id = 0;
	filePath="";
	recNum = 0;
	gzdx = 1;
	i = 0;
	nodata = true;
	over = false;
}
function stopt() {
	buttonControl(0);
	setTimeout("stopTrace()", 100);
}
function save() {
	if (fileexist == true) {
		saveTrace();
		document.getElementById("gz_status").innerHTML = "\u72b6\u6001\uff1a\u8ddf\u8e2a\u4fe1\u606f\u5df2\u4fdd\u5b58\uff0c\u5f53\u524d\u5171\u3010" + recNum + "\u3011\u6761\u8bb0\u5f55";
	} else {
		alert("\u6ca1\u6709\u8ddf\u8e2a\u6570\u636e\u53ef\u4ee5\u4e0b\u8f7d");
	}
}
function updateProcessBar(percent, desc) {
	var progress_bar = document.getElementById("progressBar");
	var progress = document.getElementById("progress");
	var progressPersent = document.getElementById("progressPersent");
	progress_bar.style.display = "none";
	if (percent == 100) {
		progress.width = "1%";
		progressPersent.innerHTML = "0%";
		document.getElementById("complete").innerHTML = desc;
	} else {
		progress.width = percent + "%";
		progressPersent.innerHTML = percent + "%";
		document.getElementById("complete").innerHTML = desc;
		progress_bar.style.display = "block";
	}
}
/**
	**		@func		根据点击的按钮操作控制按钮的禁用与恢复
	**		@param  String str 
	**    0--开始跟踪操作 1--停止跟踪操作 2--保存跟踪信息操作
	**/
function buttonControl(num) {
    //0-点击开始跟踪到有response期间的状态/用户点击了停止按钮到跟踪停止，所有按钮都灰掉
	if (num == 0) {
		document.getElementById("begin_gz").disabled = true;
		document.getElementById("stop_gz").disabled = true;
		document.getElementById("save_gz").disabled = true;
	}
	//1-创建跟踪失败 初始状态  开始按钮不为灰
	if (num == 1) {
		document.getElementById("begin_gz").disabled = false;
		document.getElementById("stop_gz").disabled = true;
		document.getElementById("save_gz").disabled = true;
	}
	//2-创建跟踪成功并且正在跟踪数据，用户没有点击停止 只有停止按钮不灰
	if (num == 2) {
		document.getElementById("begin_gz").disabled = true;
		document.getElementById("stop_gz").disabled = false;
		document.getElementById("save_gz").disabled = true;
	}
	//3-跟踪停止(前后台都停止)，只有停止按钮为灰色
	if (num == 3) {
		document.getElementById("begin_gz").disabled = false;
		document.getElementById("stop_gz").disabled = true;
		document.getElementById("save_gz").disabled = false;
	}
}

