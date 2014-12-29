
        var demoTreeCar;
        var settingCar = {
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
                    beforeClick: beforeClickCar,
                    onCheck: onCheckCar
                }
    		};
        
        var zNodesCar =[];  
        
        function beforeClickCar(treeId, treeNode) {
            var zTree = $.fn.zTree.getZTreeObj("treeCar");
            zTree.checkNode(treeNode, !treeNode.checked, null, true);
            return false;
        }

        function onCheckCar(e, treeId, treeNode) {
            var zTree = $.fn.zTree.getZTreeObj("treeCar"),
            nodes = zTree.getCheckedNodes(true),
            v = "";
            var checkedP = "";
            for (var i=0, l=nodes.length; i<l; i++) {
                v += nodes[i].name + ",";
                checkedP += nodes[i].id + ",";
            }
            if (v.length > 0 ) v = v.substring(0, v.length-1);
            if (checkedP.length > 0 ) checkedP = checkedP.substring(0, checkedP.length-1);
            var cityObj = $("#carSel");
            cityObj.attr("value", v);
            var checkPeopleObj = $("#carList");
            checkPeopleObj.attr("value", checkedP);
        }
        
        function showMenuCar() {
            var cityObj = $("#carSel");
            var cityOffset = $("#carSel").offset();
            $("#menuContentCar").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

            $("body").bind("mousedown", onBodyDownCar);
        }
        function hideMenuCar() {
            $("#menuContentCar").fadeOut("fast");
            $("body").unbind("mousedown", onBodyDownCar);
        }
        function onBodyDownCar(event) {
            if (!(event.target.id == "menuBtn" || event.target.id == "carSel" || event.target.id == "menuContentCar" || $(event.target).parents("#menuContentCar").length>0)) {
                hideMenuCar();
            }
        }

        