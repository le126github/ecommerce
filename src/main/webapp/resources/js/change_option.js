// JavaScript Document
function advshow(){
	if(document.getElementById("search-ad").style.display == "none"){
		document.getElementById("search-ad").style.display = "";	
		document.getElementById("search-sp").style.display = "none";
		document.getElementById("advlink").innerHTML="隐藏高级选项";
	}
	else{ 
	document.getElementById("search-ad").style.display = "none";
	document.getElementById("search-sp").style.display = "";
	document.getElementById("advlink").innerHTML="更多高级选项";	
	}
}

window.onload =function(){
    var o=document.getElementById("searchinput");
    if (!o && typeof(o)!="undefined" && o!=0)
    {
    	return;
    }
    o.setAttribute("valueCache",o.value);
    o.onblur =function(){
		if(o.value=="")
        {
            o.valueCache="";
            o.value=o.tips;
        }else
		o.valueCache=o.value;
    }
    o.onfocus =function(){
        o.value=o.valueCache;
		var e =event.srcElement;varr =e.createTextRange();
        r.moveStart('character',e.value.length);
        r.collapse(true);
        r.select();
    }
    o.onblur();
}

function advopen(divId){
	if(document.getElementById(divId).style.display == ""){
		document.getElementById(divId).style.display = "none";	
		document.getElementById("advopenbtn").className = "btn-close";	
	}
	else{ 
		document.getElementById(divId).style.display = "";
		document.getElementById("advopenbtn").className = "btn-open";		
	}
}

function tab_change(number,index)
{
  for (var i = 1; i <= number; i++) 
  {
    if(document.getElementById("tit"+i).className =="hot")
	{
      document.getElementById("tit"+i).className = "";
	 }
      document.getElementById("tit"+index).className = "hot";
  }
  
  for(var j=1;j<= number;j++)
  {
  	  if(document.getElementById("tab-table"+j).style.display=="")
	  {
	  document.getElementById("tab-table"+j).style.display ="none";
	  }
	  document.getElementById("tab-table"+index).style.display ="";
  }
}