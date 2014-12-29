
        var demoTreeRa;
        var settingRa = {
        		check: {
    				enable: true,
    				chkStyle: "radio",
    				radioType: "all"
    			},
    			view: {
    				dblClickExpand: false
    			},
    			data: {
    				simpleData: {
    					enable: true
    				}
    			},
    			callback: {
    				onClick: onClickRa,
    				onCheck: onCheckRa
    			}
    		};
        
        var zNodesRa =[];        

        function onClickRa(e, treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("treeRa");
			zTree.checkNode(treeNode, !treeNode.checked, null, true);
			return false;
		}

		function onCheckRa(e, treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("treeRa"),
			nodes = zTree.getCheckedNodes(true),
			v = "";
			var checkedP = "";
			for (var i=0, l=nodes.length; i<l; i++) {
				v += nodes[i].name + ",";
				checkedP += nodes[i].id + ",";
			}
			if (v.length > 0 ) v = v.substring(0, v.length-1);
			if (checkedP.length > 0 ) checkedP = checkedP.substring(0, checkedP.length-1);
			var cityObj = $("#radoiSel");
			cityObj.attr("value", v);
			var checkPeopleObj = $("#feedbackUserid");
            checkPeopleObj.attr("value", checkedP);
		}
		

        function showRadioMenu() {
            var cityObj = $("#radoiSel");
            var cityOffset = $("#radoiSel").offset();
            $("#menuContentRa").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

            $("body").bind("mousedown", onBodyDownRo);
        }
        function hideMenuRo() {
            $("#menuContentRa").fadeOut("fast");
            $("body").unbind("mousedown", onBodyDownRo);
        }
        function onBodyDownRo(event) {
            if (!(event.target.id == "menuBtn" || event.target.id == "radoiSel" || event.target.id == "menuContentRa" || $(event.target).parents("#menuContentRa").length>0)) {
                hideMenuRo();
            }
        }