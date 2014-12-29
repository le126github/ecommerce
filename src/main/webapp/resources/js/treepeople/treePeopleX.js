var treeX;
var settingX = {
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
        beforeClick: beforeClickX,
        onCheck: onCheckX
    }
    
};
function beforeClickX(treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeX");
    zTree.checkNode(treeNode, !treeNode.checked, null, true);
    return false;
}

function onCheckX(e, treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeX"),
    nodes = zTree.getCheckedNodes(true),
    v = "";
    var checkedP = "";
    for (var i=0, l=nodes.length; i<l; i++) {
        v += nodes[i].name + ",";
        checkedP += nodes[i].id + ",";
    }
    if (v.length > 0 ) v = v.substring(0, v.length-1);
    if (checkedP.length > 0 ) checkedP = checkedP.substring(0, checkedP.length-1);
    var cityObj = $("#peopleSelX");
    cityObj.attr("value", v);
    var checkPeopleObj = $("#underUseridlist");
    checkPeopleObj.attr("value", checkedP);
}

function showMenuX() {
    var cityObj = $("#peopleSelX");
    var cityOffset = $("#peopleSelX").offset();
    $("#menuContentX").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

    $("body").bind("mousedown", onBodyDownX);
}
function hideMenuX() {
    $("#menuContentX").fadeOut("fast");
    $("body").unbind("mousedown", onBodyDownX);
}
function onBodyDownX(event) {
    if (!(event.target.id == "menuBtn" || event.target.id == "peopleSelX" || event.target.id == "menuContentX" || $(event.target).parents("#menuContentX").length>0)) {
        hideMenuX();
    }
}