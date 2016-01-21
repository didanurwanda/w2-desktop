$(function () {
    // init layout
    $('#main_layout').w2layout({
        name: 'layout',
        panels: [
            { type: 'top', size: 45,  overflow: 'hidden', content: '<div class="wd-panel-title" style="height: 100%; padding-top: 3px; font-weight: normal; font-size: 18px;">W2-desktop || Documentation</div>'},
            { type: 'left', size: 240, resizable: true, style: 'border-right: 1px solid silver;' },
            { type: 'main', style: 'background-color: white;' }
        ]
    });

    // init tree
    wd['layout'].content('left', $().w2tree({
        name: 'docs',
        img: null,
        nodes: [
            { id: 'w2layout', text: 'w2layout', img: 'icon-folder', group1: true, expanded: true, nodes: [
                { id: 'w2layout-events', text: 'Events', icon: 'fa-tag' },
                { id: 'w2layout-props', text: 'Properties', icon: 'fa-star-empty' },
                { id: 'w2layout-methods', text: 'Methods', icon: 'fa-cog' }
            ]},
            { id: 'w2grid', text: 'w2grid', img: 'icon-folder', group1: true, nodes: [
                { id: 'w2grid-events', text: 'Events', icon: 'fa-tag' },
                { id: 'w2grid-props', text: 'Properties', icon: 'fa-star-empty' },
                { id: 'w2grid-methods', text: 'Methods', icon: 'fa-cog' }
            ] },
            { id: 'w2message', text: 'w2message', img: 'icon-folder', group1: true, nodes: [
                { id: 'w2message-events', text: 'Events', icon: 'fa-tag' },
                //{ id: 'w2message-props', text: 'Properties', icon: 'fa-star-empty' },
                { id: 'w2message-methods', text: 'Methods', icon: 'fa-cog' }
            ] },
            { id: 'w2mask', text: 'w2mask', img: 'icon-folder', group1: true, nodes: [
                //{ id: 'w2mask-events', text: 'Events', icon: 'fa-tag' },
                //{ id: 'w2mask-props', text: 'Properties', icon: 'fa-star-empty' },
                //{ id: 'w2mask-methods', text: 'Methods', icon: 'fa-cog' }
            ] },
            { id: 'w2toolbar', text: 'w2toolbar', img: 'icon-folder', group1: true, nodes: [
                { id: 'w2toolbar-events', text: 'Events', icon: 'fa-tag' },
                { id: 'w2toolbar-props', text: 'Properties', icon: 'fa-star-empty' },
                { id: 'w2toolbar-methods', text: 'Methods', icon: 'fa-cog' }
            ] },
            { id: 'w2tabs', text: 'w2tabs', img: 'icon-folder', group1: true, nodes: [
                { id: 'w2tabs-events', text: 'Events', icon: 'fa-tag' },
                { id: 'w2tabs-props', text: 'Properties', icon: 'fa-star-empty' },
                { id: 'w2tabs-methods', text: 'Methods', icon: 'fa-cog' }
            ] },
            { id: 'w2tree', text: 'w2tree', img: 'icon-folder', group1: true, nodes: [
                { id: 'w2tree-events', text: 'Events', icon: 'fa-tag' },
                { id: 'w2tree-props', text: 'Properties', icon: 'fa-star-empty' },
                { id: 'w2tree-methods', text: 'Methods', icon: 'fa-cog' }
            ] },
            { id: 'w2form', text: 'w2form', img: 'icon-folder', group1: true, nodes: [
                { id: 'w2form-events', text: 'Events', icon: 'fa-tag' },
                { id: 'w2form-props', text: 'Properties', icon: 'fa-star-empty' },
                { id: 'w2form-methods', text: 'Methods', icon: 'fa-cog' }
            ]},
            { id: 'w2popup', text: 'w2popup', img: 'icon-folder', group1: true, nodes: [
                { id: 'w2popup-events', text: 'Events', icon: 'fa-tag' },
                { id: 'w2popup-props', text: 'Properties', icon: 'fa-star-empty' },
                { id: 'w2popup-methods', text: 'Methods', icon: 'fa-cog' }
            ] },
            { id: 'w2utils', text: 'w2utils', img: 'icon-folder', group1: true, nodes: [
                { id: 'w2utils-props', text: 'Properties', icon: 'fa-star-empty' },
                { id: 'w2utils-methods', text: 'Methods', icon: 'fa-cog' }
            ] }
        ],
        onClick: function(id, data) {
            doClick(id, data);
            window.skipChange = true;
            document.location = '#' + id;

            $('#layout_layout_panel_main').w2mask();
        }
    }));

    // create test objects
    $().w2layout({ name: 'test-layout' });
    $().w2grid({ name: 'test-grid' });
    $().w2tree({ name: 'test-tree' });
    $().w2toolbar({ name: 'test-toolbar' });
    $().w2tabs({ name: 'test-tabs' });
    $().w2form({ name: 'test-form' });

    // init properties and methods
    init('layout');
    init('grid');
    init('tree');
    init('toolbar');
    init('tabs');
    init('form');
    initPopup();

    // utils
    var props   = [];
    var methods = [];
    for (var o in w2utils) {
        if (typeof w2utils[o] == 'function') methods.push(o); else props.push(o);
    }
    props.sort();
    methods.sort();
    // properties
    var nodes = [];
    for (var o in props) nodes.push({ id: 'w2utils.' + props[o], text: props[o], icon: 'fa-tag' });
    wd['docs'].add('w2utils-props', nodes);
    // methods
    var nodes = [];
    for (var o in methods) nodes.push({ id: 'w2utils.' + methods[o], text: methods[o], icon: 'fa-cog' });
    wd['docs'].add('w2utils-methods', nodes);

    // remove internal methods/props
    wd['docs'].remove(
        'w2layout.panel',
        'w2grid.isIOS', 'w2grid.editChange', 'w2grid.initColumnDrag', 'w2grid.prepareData',
        'w2toolbar.item',
        'w2tree.node',
        // 'w2listview.item', 'w2listview.vType', 'w2listview.itemExtra', 'w2listview.itemNode', 'w2listview.itemNodeId', 'w2listview.itemNodeOffsetInfo',
        'w2tabs.tab'
    );

    function init (type) {
        var methods = [];
        var props   = [];
        for (var o in w2obj[type].prototype) {
            if (typeof w2obj[type].prototype[o]== 'function') methods.push(o); else props.push(o);
        }
        for (var o in wd['test-'+ type]) {
            if (props.indexOf(o) == -1) props.push(o);
        }
        methods.sort();
        props.sort();
        var nodes = [];
        for (var o in methods) {
            //console.log('---' + methods[o]);
            nodes.push({ id: 'w2'+ type +'.' + methods[o], text: methods[o], icon: 'fa-cog' });
        }
        // add to tree
        wd['docs'].add('w2'+ type +'-methods', nodes);
        var nodes1 = [];
        var nodes2 = [];
        for (var o in props) {
            //console.log('--->' + props[o]);
            if (wd['docs'].get('w2'+ type +'.' + props[o]) != null) continue;
            if (props[o].substr(0, 2) == 'on') {
                nodes1.push({ id: 'w2'+ type +'.' + props[o], text: props[o], icon: 'fa-tag' });
            } else {
                nodes2.push({ id: 'w2'+ type +'.' + props[o], text: props[o], icon: 'fa-star-empty' });
            }
        }
        wd['docs'].add('w2'+ type +'-events', nodes1);
        wd['docs'].add('w2'+ type +'-props', nodes2);
    }

    function initPopup () {
        var methods = [];
        var events  = [];
        var props   = [];
        for (var m in w2popup) {
            if (m.substr(0,2) == 'on' && m != 'on') {
                events.push({ id: 'w2popup.' + m, text: m, icon: 'fa-tag' });
            } else if (typeof w2popup[m] == 'function') {
                methods.push({ id: 'w2popup.' + m, text: m, icon: 'fa-cog' });
            } else {
                props.push({ id: 'w2popup.' + m, text: m, icon: 'fa-star-empty' });
            }
        }
        methods.sort(function (a, b) { return a.text > b.text ? 1 : -1 });
        events.sort(function (a, b) { return a.text > b.text ? 1 : -1 });
        props.sort(function (a, b) { return a.text > b.text ? 1 : -1 });
        wd.docs.set('w2popup-events', { nodes: events });
        wd.docs.set('w2popup-props', { nodes: props });
        wd.docs.set('w2popup-methods', { nodes: methods });

        console.log(events);

        wd.docs.set('w2message-events', { 
            nodes: [ 
                {icon: 'fa-tag', id: 'w2message.fn', text: 'fn'} 
            ] 
        });
        wd.docs.set('w2message-props', { nodes: []});
        wd.docs.set('w2message-methods', { 
            nodes: [
                { icon: 'fa-cog', id: 'w2message.hide', text: 'hide' }
            ]
        });
    }

    // show latest hash
    function goHash() {
        if (window.skipChange === true) {
            window.skipChange = false;
            return;
        }
        var hash = String(document.location.hash).substr(1);
        if (wd['docs'].get(hash) != null) {
            doClick(hash);
            wd['docs'].collapseAll();
            wd['docs'].select(hash);
            wd['docs'].expandParents(hash);
        }
    }
    $(window).on('hashchange', goHash);
    setTimeout(goHash, 1);
});

function doClick (cmd, data) {
    if (cmd.indexOf('.') == -1) {
        if (cmd.indexOf('-') == -1) {
            var path = 'overview/'+ cmd.substr(2) +'.html';
        } else {
            var path = 'summary/'+ cmd +'.php';
        }
    } else {
        var tmp  = cmd.split('.');
        switch (tmp[1]) {
            case 'box'        : cmd = 'common.box'; break;
            case 'name'        : cmd = 'common.name'; break;
            case 'handlers'    : cmd = 'common.handlers'; break;
            case 'style'    : cmd = 'common.style'; break;
            case 'render'    : cmd = 'common.render'; break;
            case 'refresh'    : cmd = 'common.refresh'; break;
            case 'destroy'    : cmd = 'common.destroy'; break;
            case 'resize'    : if (tmp[0] != 'w2popup') cmd = 'common.resize'; break;
            case 'on'        : cmd = 'common.on'; break;
            case 'off'        : cmd = 'common.off'; break;
            case 'trigger'    : cmd = 'common.trigger'; break;
            case 'onRender'    : cmd = 'common.onRender'; break;
            case 'onRefresh': cmd = 'common.onRefresh'; break;
            case 'onDestroy': cmd = 'common.onDestroy'; break;
            case 'onResize'    : cmd = 'common.onResize'; break;
        }
        wd['layout'].content('main', '');
        var path = 'details/'+ cmd +'.html';
    }
    // load file
    $.get(path, function (data) {
        data = data.replace(/href="/g, 'href="#');
        data = data.replace(/href="#\/\/wd.com/g, 'href="//wd.com');
        wd['layout'].content('main',
            '<div class="obj-desc">'+
            '<h1>' + cmd + '</h1>' +
            data +
            '</div>');
        // javascript
        $("textarea.javascript").each(function (index, el) {
            var obj = this;
            // resize to context
            var ta = $(this);
            $(ta).height(ta.scrollHeight + 2);
            // init Code Mirror
            var cm = CodeMirror(
                function (elt) {
                      obj.parentNode.replaceChild(elt, obj);
                }, {
                    value        : $.trim($(obj).val()),
                    mode        : "javascript",
                    readOnly    : true,
                    gutter        : true,
                    lineNumbers    : true
                }
            );
            cm.setSize(null, cm.doc.height + 15);
        });
        // html
        $("textarea.html").each(function (index, el) {
            var obj = this;
            // resize to context
            var ta = $(this);
            $(ta).height(ta.scrollHeight + 2);
            // init Code Mirror
            var cm = CodeMirror(
                function (elt) {
                      obj.parentNode.replaceChild(elt, obj);
                }, {
                    value        : $.trim($(obj).val()),
                    mode        : "xml",
                    readOnly    : true,
                    gutter        : true,
                    lineNumbers    : true
                }
            );
            cm.setSize(null, cm.doc.height + 15);
        });


        $('#layout_layout_panel_main').w2unmask();
    });
}
