/// <reference path="../intellisense/jquery-1.2.6-vsdoc-cn.js" />
/* --------------------------------------------------	
����˵��
option: {width:Number, items:Array, onShow:Function, rule:JSON}
��Ա�﷨(������ʽ)	-- para.items
-> {text:String, icon:String, type:String, alias:String, width:Number, items:Array}		--	�˵���
-> {text:String, icon:String, type:String, alias:String, action:Function }				--	�˵���
-> {type:String}																		--	�˵��ָ���
--------------------------------------------------*/
(function($) {
    function returnfalse() { return false; };
    $.fn.contextmenu = function(option) {
        option = $.extend({ alias: "cmroot", width: 150 }, option);
        var ruleName = null, target = null,
	    groups = {}, mitems = {}, actions = {}, showGroups = [],
        itemTpl = "<div class='b-m-$[type]' unselectable=on><nobr unselectable=on><img src='$[icon]' align='absmiddle'/><span unselectable=on>$[text]</span></nobr></div>";
        var gTemplet = $("<div/>").addClass("b-m-mpanel").attr("unselectable", "on").css("display", "none");
        var iTemplet = $("<div/>").addClass("b-m-item").attr("unselectable", "on");
        var sTemplet = $("<div/>").addClass("b-m-split");
        //�����˵���
        var buildGroup = function(obj) {
            groups[obj.alias] = this;
            this.gidx = obj.alias;
            this.id = obj.alias;
            if (obj.disable) {
                this.disable = obj.disable;
                this.className = "b-m-idisable";
            }
            $(this).width(obj.width).click(returnfalse).mousedown(returnfalse).appendTo($("body"));
            obj = null;
            return this;
        };
        var buildItem = function(obj) {
            var T = this;
            T.title = obj.text;
            T.idx = obj.alias;
            T.gidx = obj.gidx;
            T.data = obj;
            T.innerHTML = itemTpl.replace(/\$\[([^\]]+)\]/g, function() {
                return obj[arguments[1]];
            });
            if (obj.disable) {
                T.disable = obj.disable;
                T.className = "b-m-idisable";
            }
            obj.items && (T.group = true);
            obj.action && (actions[obj.alias] = obj.action);
            mitems[obj.alias] = T;
            T = obj = null;
            return this;
        };
        //���Ӳ˵���
        var addItems = function(gidx, items) {
            var tmp = null;
            for (var i = 0; i < items.length; i++) {
                if (items[i].type == "splitLine") {
                    //�˵��ָ���
                    tmp = sTemplet.clone()[0];
                } else {
                    items[i].gidx = gidx;
                    if (items[i].type == "group") {
                        //�˵���
                        buildGroup.apply(gTemplet.clone()[0], [items[i]]);
                        arguments.callee(items[i].alias, items[i].items);
                        items[i].type = "arrow";
                        tmp = buildItem.apply(iTemplet.clone()[0], [items[i]]);
                    } else {
                        //�˵���
                        items[i].type = "ibody";
                        tmp = buildItem.apply(iTemplet.clone()[0], [items[i]]);
                        $(tmp).click(function(e) {
                            if (!this.disable) {
                                if ($.isFunction(actions[this.idx])) {
                                    actions[this.idx].call(this, target);
                                }
                                hideMenuPane();
                            }
                            return false;
                        });

                    } //Endif
                    $(tmp).bind("contextmenu", returnfalse).hover(overItem, outItem);
                } //Endif
                groups[gidx].appendChild(tmp);
                tmp = items[i] = items[i].items = null;
            } //Endfor
            gidx = items = null;
        };
        var overItem = function(e) {
            //����˵������          
            if (this.disable)
                return false;
            hideMenuPane.call(groups[this.gidx]);
            //����ǲ˵���
            if (this.group) {
                var pos = $(this).offset();
                var width = $(this).outerWidth();
                showMenuGroup.apply(groups[this.idx], [pos, width]);
            }
            this.className = "b-m-ifocus";
            return false;
        };
        //�˵���ʧȥ����
        var outItem = function(e) {
            //����˵������
            if (this.disable )
                return false;
            if (!this.group) {
                //�˵���
                this.className = "b-m-item";
            } //Endif
            return false;
        };
        //��ָ��λ����ʾָ���Ĳ˵���
        var showMenuGroup = function(pos, width) {
            var bwidth = $("body").width();
            var bheight = document.documentElement.clientHeight;
            var mwidth = $(this).outerWidth();
            var mheight = $(this).outerHeight();
            pos.left = (pos.left + width + mwidth > bwidth) ? (pos.left - mwidth < 0 ? 0 : pos.left - mwidth) : pos.left + width;
            pos.top = (pos.top + mheight > bheight) ? (pos.top - mheight + (width > 0 ? 25 : 0) < 0 ? 0 : pos.top - mheight + (width > 0 ? 25 : 0)) : pos.top;
            $(this).css(pos).show();
            showGroups.push(this.gidx);
        };
        //���ز˵���
        var hideMenuPane = function() {
            var alias = null;
            for (var i = showGroups.length - 1; i >= 0; i--) {
                if (showGroups[i] == this.gidx)
                    break;
                alias = showGroups.pop();
                groups[alias].style.display = "none";
                mitems[alias] && (mitems[alias].className = "b-m-item");
            } //Endfor
            //CollectGarbage();
        };
        function applyRule(rule) {
            if (ruleName && ruleName == rule.name)
                return false;
            for (var i in mitems)
                disable(i, !rule.disable);
            for (var i = 0; i < rule.items.length; i++)
                disable(rule.items[i], rule.disable);
            ruleName = rule.name;
        };
        function disable(alias, disabled) {
            var item = mitems[alias];
            item.className = (item.disable = item.lastChild.disabled = disabled) ? "b-m-idisable" : "b-m-item";
        };

        /** �Ҽ��˵���ʾ */
        function showMenu(e, menutarget) {
            target = menutarget;
            showMenuGroup.call(groups.cmroot, { left: e.pageX, top: e.pageY }, 0);
            $(document).one('mousedown', hideMenuPane);
        }
        var $root = $("#" + option.alias);
        var root = null;
        if ($root.length == 0) {
            root = buildGroup.apply(gTemplet.clone()[0], [option]);
            root.applyrule = applyRule;
            root.showMenu = showMenu;
            addItems(option.alias, option.items);
        }
        else {
            root = $root[0];
        }
        var me = $(this).each(function() {
            return $(this).bind('contextmenu', function(e) {
                var bShowContext = (option.onContextMenu && $.isFunction(option.onContextMenu)) ? option.onContextMenu.call(this, e) : true;
                if (bShowContext) {
                    if (option.onShow && $.isFunction(option.onShow)) {
                        option.onShow.call(this, root);
                    }
                    root.showMenu(e, this);
                }
                return false;
            });
        });
        //������ʾ����
        if (option.rule) {
            applyRule(option.rule);
        }
        gTemplet = iTemplet = sTemplet = itemTpl = buildGroup = buildItem = null;
        addItems = overItem = outItem = null;
        //CollectGarbage();
        return me;
    }
})(jQuery);