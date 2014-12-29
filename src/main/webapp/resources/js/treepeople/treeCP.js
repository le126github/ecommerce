var treeCP1;
var treeCP2;
var treeCP3;
var settingCP1 = {
    check: {
        enable: true,
        chkboxType: {"Y":"", "N":""}
    },
    view: {
        dblClickExpand: false
    },
    data: {
        simpleData: {
            enable: true,
            idKey : "id",
            pIdKey : "pId",
            rootPId : 0
        }
    },
    callback: {
        beforeClick: beforeClickCP1,
        onCheck: onCheckCP1
    }
    
};
var settingCP2 = {
	    check: {
	        enable: true,
	        chkboxType: {"Y":"", "N":""}
	    },
	    view: {
	        dblClickExpand: false
	    },
	    data: {
	        simpleData: {
	            enable: true,
	            idKey : "id",
	            pIdKey : "pId",
	            rootPId : 0
	        }
	    },
	    callback: {
	        beforeClick: beforeClickCP2,
	        onCheck: onCheckCP2
	    }
	    
	};
var settingCP3 = {
	    check: {
	        enable: true,
	        chkboxType: {"Y":"", "N":""}
	    },
	    view: {
	        dblClickExpand: false
	    },
	    data: {
	        simpleData: {
	            enable: true,
	            idKey : "id",
	            pIdKey : "pId",
	            rootPId : 0
	        }
	    },
	    callback: {
	        beforeClick: beforeClickCP3,
	        onCheck: onCheckCP3
	    }
	    
	};
function beforeClickCP1(treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeCP1");
    zTree.checkNode(treeNode, !treeNode.checked, null, true);
    return false;
}
function beforeClickCP2(treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeCP2");
    zTree.checkNode(treeNode, !treeNode.checked, null, true);
    return false;
}
function beforeClickCP3(treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeCP3");
    zTree.checkNode(treeNode, !treeNode.checked, null, true);
    return false;
}

function onCheckCP1(e, treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeCP1"),
    nodes = zTree.getCheckedNodes(true),
    v = "";
    var checkedP = "";
    for (var i=0, l=nodes.length; i<l; i++) {
        v += nodes[i].name + ",";
        checkedP += nodes[i].id + ",";
    }
    if (v.length > 0 ) v = v.substring(0, v.length-1);
    if (checkedP.length > 0 ) checkedP = checkedP.substring(0, checkedP.length-1);
    var cityObj = $("#cp1Sel");
    cityObj.attr("value", v);
    var checkPeopleObj = $("#higherAbilityIdlist");
    checkPeopleObj.attr("value", checkedP);
}

function onCheckCP2(e, treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeCP2"),
    nodes = zTree.getCheckedNodes(true),
    v = "";
    var checkedP = "";
    for (var i=0, l=nodes.length; i<l; i++) {
        v += nodes[i].name + ",";
        checkedP += nodes[i].id + ",";
    }
    if (v.length > 0 ) v = v.substring(0, v.length-1);
    if (checkedP.length > 0 ) checkedP = checkedP.substring(0, checkedP.length-1);
    var cityObj = $("#cp2Sel");
    cityObj.attr("value", v);
    var checkPeopleObj = $("#sibleAbilityIdlist");
    checkPeopleObj.attr("value", checkedP);
}

function onCheckCP3(e, treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeCP3"),
    nodes = zTree.getCheckedNodes(true),
    v = "";
    var checkedP = "";
    for (var i=0, l=nodes.length; i<l; i++) {
        v += nodes[i].name + ",";
        checkedP += nodes[i].id + ",";
    }
    if (v.length > 0 ) v = v.substring(0, v.length-1);
    if (checkedP.length > 0 ) checkedP = checkedP.substring(0, checkedP.length-1);
    var cityObj = $("#cp3Sel");
    cityObj.attr("value", v);
    var checkPeopleObj = $("#underAbilityIdlist");
    checkPeopleObj.attr("value", checkedP);
}

function showMenuCP1() {
    var cityObj = $("#cp1Sel");
    var cityOffset = $("#cp1Sel").offset();
    $("#menuContentCP1").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

    $("body").bind("mousedown", onBodyDownCP1);
}
function showMenuCP2() {
    var cityObj = $("#cp2Sel");
    var cityOffset = $("#cp2Sel").offset();
    $("#menuContentCP2").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

    $("body").bind("mousedown", onBodyDownCP2);
}
function showMenuCP3() {
    var cityObj = $("#cp3Sel");
    var cityOffset = $("#cp3Sel").offset();
    $("#menuContentCP3").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

    $("body").bind("mousedown", onBodyDownCP3);
}
function hideMenuCP1() {
    $("#menuContentCP1").fadeOut("fast");
    $("body").unbind("mousedown", onBodyDownCP1);
}
function hideMenuCP2() {
    $("#menuContentCP2").fadeOut("fast");
    $("body").unbind("mousedown", onBodyDownCP2);
}
function hideMenuCP3() {
    $("#menuContentCP3").fadeOut("fast");
    $("body").unbind("mousedown", onBodyDownCP3);
}
function onBodyDownCP1(event) {
    if (!(event.target.id == "menuBtn" || event.target.id == "cp1Sel" || event.target.id == "menuContentCP1" || $(event.target).parents("#menuContentCP1").length>0)) {
        hideMenuCP1();
    }
}
function onBodyDownCP2(event) {
    if (!(event.target.id == "menuBtn" || event.target.id == "cp2Sel" || event.target.id == "menuContentCP2" || $(event.target).parents("#menuContentCP2").length>0)) {
        hideMenuCP2();
    }
}
function onBodyDownCP3(event) {
    if (!(event.target.id == "menuBtn" || event.target.id == "cp3Sel" || event.target.id == "menuContentCP3" || $(event.target).parents("#menuContentCP3").length>0)) {
        hideMenuCP3();
    }
}