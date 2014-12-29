
	function checkStyle(){
	var total = document.all.totalcount.value;
	for (var i=1;i<=total;i++)
	{
	  var name = "flow"+i;
      var tempcss = document.getElementById(name);
	  if (tempcss!=null)
	  {
	  if (tempcss.className == "flowattention")
	       continue;
	  else if (tempcss.className == "flow_onmouseover")
	       tempcss.className = "flow_onmouseout";
	  }
	}
	}
