$(function () {
    // init layout
    var main_layout = $('#main_layout').w2layout({
        name: 'main_layout',
        panels: [
            { type: 'top', size: 45,  overflow: 'hidden', content: '<div class="wd-panel-title" style="height: 100%; padding-top: 3px; font-weight: normal; font-size: 18px;">W2-desktop || Demo</div>'},
            { type: 'left', size: 240, resizable: true, style: 'border-right: 1px solid silver;', title: 'Navigation' },
            { type: 'main' }
        ]
    });

    // init tree
    wd['main_layout'].content('left', $().w2tree({
        name: 'demo-tree', 
        img: null,
        nodes: [
        /*
            { id: 'combo', text: 'Combinations', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'combo-1', text: 'Tree & Grid', img: 'icon-leaf' },
                    { id: 'combo-2', text: 'Grid & Edit', img: 'icon-leaf' },
                    { id: 'combo-3', text: 'Spreadsheet Like Grid', img: 'icon-leaf' },
                    { id: 'combo-4', text: 'Buffered Scroll', img: 'icon-leaf' },
                    { id: 'combo-9', text: 'Infinite Scroll', img: 'icon-leaf' },
                    { id: 'combo-5', text: 'Tabs With Content', img: 'icon-leaf' },
                    { id: 'combo-6', text: 'Layout & Dynamic Tabs', img: 'icon-leaf' },
                    { id: 'combo-7', text: 'Popup & Grid', img: 'icon-leaf' },
                    { id: 'combo-8', text: 'Popup & Layout', img: 'icon-leaf' },
                    { id: 'combo-10', text: 'Dependent Fields', img: 'icon-leaf' }
                ]
            },
            */
            { id: 'layout', text: 'Layout', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'layout-1', text: 'Simple Layout', img: 'icon-leaf' },
                    { id: 'layout-2', text: 'Resizable Panels', img: 'icon-leaf' },
                    { id: 'layout-3', text: 'Show/Hide Panels', img: 'icon-leaf' },
                    { id: 'layout-4', text: 'Load Content', img: 'icon-leaf' },
                    { id: 'layout-5', text: 'Transitions', img: 'icon-leaf' },
                    { id: 'layout-6', text: 'Event Listeners', img: 'icon-leaf' },
                    { id: 'layout-7', text: 'Nested Layouts', img: 'icon-leaf' },
                    { id: 'layout-8', text: 'Panel With Tabs', img: 'icon-leaf' },
                    { id: 'layout-9', text: 'Panel With Toolbar', img: 'icon-leaf' },
                    { id: 'layout-10', text: 'Panel With Title', img: 'icon-leaf' }
                ]
            },
            { id: 'grid', text: 'Grid', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'grid-1', text: 'Simple Grid', img: 'icon-leaf' },
                    { id: 'grid-3', text: 'Grid Elements', img: 'icon-leaf' },
                    { id: 'grid-2', text: 'Row Formating', img: 'icon-leaf' },
                    { id: 'grid-23',text: 'Cell Formatting', img: 'icon-leaf' },
                    { id: 'grid-4', text: 'Data Source', img: 'icon-leaf' },
                    { id: 'grid-5', text: 'Load Data Once', img: 'icon-leaf' },
                    { id: 'grid-6', text: 'Single or Multi Select', img: 'icon-leaf' },
                    { id: 'grid-7', text: 'Tree-Like Grid', img: 'icon-leaf' },
                    { id: 'grid-8', text: 'Show/Hide Columns', img: 'icon-leaf' },
                    { id: 'grid-9', text: 'Add/Remove Records', img: 'icon-leaf' },
                    { id: 'grid-10', text: 'Select/Unselect Records', img: 'icon-leaf' },
                    { id: 'grid-11', text: 'Fixed/Resisable', img: 'icon-leaf' },
                    { id: 'grid-12', text: 'Column Sort', img: 'icon-leaf' },
                    { id: 'grid-13', text: 'Column Groups', img: 'icon-leaf' },
                    { id: 'grid-14', text: 'Summary Records', img: 'icon-leaf' },
                    { id: 'grid-15', text: 'Simple Search', img: 'icon-leaf' },
                    { id: 'grid-16', text: 'Advanced Search', img: 'icon-leaf' },
                    { id: 'grid-17', text: 'Grid Toolbar', img: 'icon-leaf' },
                    { id: 'grid-18', text: 'Master -> Detail', img: 'icon-leaf' },
                    { id: 'grid-19', text: 'Two Grids', img: 'icon-leaf' },
                    { id: 'grid-20', text: 'Render to a New Box', img: 'icon-leaf' },
                    { id: 'grid-21', text: 'Inline Editing', img: 'icon-leaf' },
                    { id: 'grid-22', text: 'Resizable Columns', img: 'icon-leaf' },
                    { id: 'grid-24', text: 'Lock/Unlock Grid', img: 'icon-leaf' },
                    { id: 'grid-25', text: 'Re-Order Columns', img: 'icon-leaf' },
                    { id: 'grid-26', text: 'Re-Order Records', img: 'icon-leaf' }
                    //{ id: 'grid-27', text: 'Locked Columns', img: 'icon-leaf' }
                ]
            },
            { id: 'messagebox', text: 'MessageBox', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'messagebox-1', text: 'Alert', img: 'icon-leaf' },
                    { id: 'messagebox-2', text: 'Confirm', img: 'icon-leaf' },
                    { id: 'messagebox-3', text: 'Prompt', img: 'icon-leaf' },
                    { id: 'messagebox-4', text: 'Prompt Multiline', img: 'icon-leaf' },
                    { id: 'messagebox-5', text: 'Icon', img: 'icon-leaf' },
                    { id: 'messagebox-6', text: 'Button', img: 'icon-leaf' },
                    { id: 'messagebox-7', text: 'Custom', img: 'icon-leaf' }
                ]
            },
            { id: 'toolbar', text: 'Toolbar', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'toolbar-1', text: 'Simple Toolbar', img: 'icon-leaf' },
                    { id: 'toolbar-2', text: 'Advanced Toolbar', img: 'icon-leaf' },
                    { id: 'toolbar-3', text: 'Add/Remove Buttons', img: 'icon-leaf' },
                    { id: 'toolbar-4', text: 'Show/Hide Buttons', img: 'icon-leaf' },
                    { id: 'toolbar-5', text: 'Enable/Disable Buttons', img: 'icon-leaf' }
                ]
            },
            { id: 'tree', text: 'Tree', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'tree-1', text: 'Simple Tree', img: 'icon-leaf' },
                    { id: 'tree-2', text: 'Add/Remove', img: 'icon-leaf' },
                    { id: 'tree-3', text: 'Show/Hide', img: 'icon-leaf' },
                    { id: 'tree-4', text: 'Enable/Disable', img: 'icon-leaf' },
                    { id: 'tree-5', text: 'Expand/Collapse', img: 'icon-leaf' },
                    { id: 'tree-6', text: 'Select/Unselect', img: 'icon-leaf' },
                    { id: 'tree-8', text: 'Top & Bottom HTML', img: 'icon-leaf' },
                    { id: 'tree-7', text: 'Events', img: 'icon-leaf' }
                ]
            },
            // { id: 'listview', text: 'ListView', img: 'icon-folder', group1: true,
            //     nodes: [
            //         { id: 'listview-1', text: 'Simple ListView', img: 'icon-leaf' },
            //         { id: 'listview-2', text: 'Different view types', img: 'icon-leaf' },
            //         { id: 'listview-5', text: 'Table view type', img: 'icon-leaf' },
            //         { id: 'listview-3', text: 'Selecting items', img: 'icon-leaf' },
            //         { id: 'listview-4', text: 'Add/Remove items', img: 'icon-leaf' }
            //     ]
            // },
            { id: 'tabs', text: 'Tabs', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'tabs-1', text: 'Simple Tabs', img: 'icon-leaf' },
                    { id: 'tabs-2', text: 'Set a Tab Active', img: 'icon-leaf' },
                    { id: 'tabs-3', text: 'Closable Tabs', img: 'icon-leaf' },
                    { id: 'tabs-4', text: 'Add/Remove Tabs', img: 'icon-leaf' },
                    { id: 'tabs-5', text: 'Enable/Disabled Tabs', img: 'icon-leaf' },
                    { id: 'tabs-6', text: 'Show/Hide Tabs', img: 'icon-leaf' }
                ]
            },
            { id: 'mask', text: 'Mask', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'mask-1', text: 'Simple Masked', img: 'icon-leaf' }
                ]
            },
            { id: 'forms', text: 'Forms', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'forms-1', text: 'Simple Form', img: 'icon-leaf' },
                    { id: 'forms-10',text: 'Auto Templates', img: 'icon-leaf' },
                    { id: 'forms-2', text: 'Field Types', img: 'icon-leaf' },
                    { id: 'forms-3', text: 'Large Form', img: 'icon-leaf' },
                    { id: 'forms-4', text: 'Multi Page Form', img: 'icon-leaf' },
                    { id: 'forms-5', text: 'Form Tabs', img: 'icon-leaf' },
                    { id: 'forms-9', text: 'Form Toolbar', img: 'icon-leaf' },
                    { id: 'forms-8', text: 'Form in a Popup', img: 'icon-leaf' },
                    { id: 'forms-6', text: 'Events', img: 'icon-leaf' }
                ]
            },
            { id: 'fields', text: 'Fields', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'fields-1', text: 'Numeric', img: 'icon-leaf' },
                    { id: 'fields-2', text: 'Date & Time', img: 'icon-leaf' },
                    { id: 'fields-3', text: 'Drop Down Lists', img: 'icon-leaf' },
                    { id: 'fields-4', text: 'Multi Selects', img: 'icon-leaf' },
                    { id: 'fields-5', text: 'File Upload', img: 'icon-leaf' },
                    { id: 'fields-6', text: 'Remote Source', img: 'icon-leaf' }
                ]
            },
            { id: 'popup', text: 'Popup', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'popup-1', text: 'Simple Popup', img: 'icon-leaf' },
                    { id: 'popup-2', text: 'More Options', img: 'icon-leaf' },
                    { id: 'popup-3', text: 'Popup Elements', img: 'icon-leaf' },
                    { id: 'popup-4', text: 'Based on Markup', img: 'icon-leaf' },
                    { id: 'popup-5', text: 'Load Content', img: 'icon-leaf' },
                    { id: 'popup-6', text: 'Transitions', img: 'icon-leaf' },
                    { id: 'popup-7', text: 'Slide a Message', img: 'icon-leaf' },
                    { id: 'popup-9', text: 'Lock Content', img: 'icon-leaf' },
                    { id: 'popup-8', text: 'Dialogs', img: 'icon-leaf' }
                ]
            },
            { id: 'utils', text: 'Utilities', img: 'icon-folder', group1: true,
                nodes: [
                    { id: 'utils-1', text: 'Validation', img: 'icon-leaf' },
                    { id: 'utils-2', text: 'Encoding', img: 'icon-leaf' },
                    { id: 'utils-3', text: 'Transitions', img: 'icon-leaf' },
                    { id: 'utils-4', text: 'Overlays', img: 'icon-leaf' }
                ]
            }
        ],
        onClick: function (event) {
            var node = event.node;
            var cmd = event.target;            

            if (parseInt(cmd.substr(cmd.length-1)) != cmd.substr(cmd.length-1)) return;
            var tmp = wd['demo-tree'].get(cmd);
            document.title = tmp.parent.text + ': ' + tmp.text + ' | W2-desktop | Dida Nurwanda | www.didanurwanda.com';
            // delete previously created items
            for (var widget in wd) {
                var nm = wd[widget].name;
                if (['main_layout', 'demo-tree'].indexOf(nm) == -1) $().w2destroy(nm);
            }
            // set hash
            if (tmp.parent && tmp.parent.id != '') {
                var pid = wd['demo-tree'].get(cmd).parent.id;
                document.location.hash = '!'+ pid + '/' + cmd;
            }
            // load example
            $.get('examples/'+ cmd +'.html', function (data) {
                var tmp = data.split('<!--CODE-->');
                if (tmp.length == 1) {
                    alert('ERROR: cannot parse example.');
                    console.log('ERROR: cannot parse example.', data);
                    return;
                }
                var html = tmp[1] ? $.trim(tmp[1]) : '';
                var js   = tmp[2] ? $.trim(tmp[2]) : '';
                var css  = tmp[3] ? $.trim(tmp[3]) : '';
                var json = tmp[4] ? $.trim(tmp[4]) : '';
                js = js.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
                js = $.trim(js);
                css = css.replace(/^<style[^>]*>/, '').replace(/<\/style>$/, '');
                css = $.trim(css);
                json = json.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
                json = $.trim(json);
                wd['main_layout'].content('main', tmp[0]);
                $('#example_view').html(
                        ' '+ html +
                        '<script type="text/javascript">' + js + '</script>' +
                        '<style>' + css + '</style>');
                var code = '<!DOCTYPE html>\n'+
                           '<html>\n'+
                           '<head>\n'+
                           '    <title>W2-desktop Demo: '+ node.text +'</title>\n'+
                           '    <link rel="stylesheet" type="text/css" href="http://w2-desktop.didanurwanda.com/dist/w2-desktop.css" />\n'+
                           '    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>\n'+
                           '    <script type="text/javascript" src="http://w2-desktop.didanurwanda.com/dist/w2-desktop.js"></script>\n'+
                           '</head>\n'+
                           '<body>\n\n'+
                           html + '\n\n'+
                           (js != '' ? '<script type="text/javascript">\n' + js + '\n</script>\n\n' : '') +
                           (css != '' ? '<style>\n' + css + '</style>\n\n' : '') +
                           '</body>\n'+
                           '</html>';
                $('#example_code').html('<a href="javascript:" onclick="$(this).next().show(); initCode(); $(this).hide();" class="btn-source">Show Source Code</a>'+
                    '<div id="sourcecode" style="display: none;">'+
                    '<h2>Complete Code '+
                    '<span style="font-weight: normal; padding-left: 10px;">- &nbsp;&nbsp;Copy & paste into your editor or <a href="javascript:" class="jsfiddle">fiddle with code online</a></span> </h2>'+
                    '<textarea class="preview" id="code">'+
                        code.replace(/<textarea/gi, '&lt;textarea').replace(/<\/textarea>/gi, '&lt;/textarea&gt;') +
                    '</textarea>'+
                    (json != '' ?
                        '<h2>JSON file</h2>'+
                        '<textarea class="json" id="json">'+ json +'</textarea>'
                        :
                        '')+
                    '</div>'+
                    '<div style="display: none">'+
                    '<form id="fiddleForm" target="_blank" action="http://jsfiddle.net/api/post/jquery/2.1/" method="post">'+
                    '    <textarea name="title">W2-desktop Demo: '+ node.text +'</textarea>'+
                    '    <textarea name="resources">http://w2-desktop.didanurwanda.com/dist/w2-desktop.js,http://w2-desktop.didanurwanda.com/dist/w2-desktop.css</textarea>'+
                    '    <textarea name="html">'+ html.replace(/<textarea/gi, '&lt;textarea').replace(/<\/textarea>/gi, '&lt;/textarea&gt;') +'</textarea>'+
                    '    <textarea name="js">'+ js +'</textarea>'+
                    '    <textarea name="css">'+ css +'</textarea>'+
                    '</form>'+
                    '</div>');
            });
        }
    }));

    // check hash
    setTimeout(function () {
        var tmp = String(document.location.hash).split('/');
        switch (tmp[0]) { 
            case '#!combo':
                wd['demo-tree'].expand('combo');
                wd['demo-tree'].click(tmp[1] || 'combo-1');
                break;

            case '#!layout':
                wd['demo-tree'].expand('layout');
                wd['demo-tree'].click(tmp[1] || 'layout-1');
                break;

            case '#!grid':
                wd['demo-tree'].expand('grid');
                wd['demo-tree'].click(tmp[1] || 'grid-1');
                break;

            case '#!messagebox':
                wd['demo-tree'].expand('messagebox');
                wd['demo-tree'].click(tmp[1] || 'messagebox-1');
                break;

            case '#!mask':
                wd['demo-tree'].expand('mask');
                wd['demo-tree'].click(tmp[1] || 'mask-1');
                break;

            case '#!toolbar':
                wd['demo-tree'].expand('toolbar');
                wd['demo-tree'].click(tmp[1] || 'toolbar-1');
                break;

            case '#!tree':
                wd['demo-tree'].expand('tree');
                wd['demo-tree'].click(tmp[1] || 'tree-1');
                break;

            // case '#!listview':
            //     wd['demo-tree'].expand('listview');
            //     wd['demo-tree'].click(tmp[1] || 'listview-1');
            //     break;

            case '#!tabs':
                wd['demo-tree'].expand('tabs');
                wd['demo-tree'].click(tmp[1] || 'tabs-1');
                break;

            case '#!popup':
                wd['demo-tree'].expand('popup');
                wd['demo-tree'].click(tmp[1] || 'popup-1');
                break;

            case '#!forms':
                wd['demo-tree'].expand('forms');
                wd['demo-tree'].click(tmp[1] || 'forms-1');
                break;

            case '#!fields':
                wd['demo-tree'].expand('fields');
                wd['demo-tree'].click(tmp[1] || 'fields-1');
                break;

            case '#!utils':
                wd['demo-tree'].expand('utils');
                wd['demo-tree'].click(tmp[1] || 'utils-1');
                break;
        }
    }, 100);
});

function initCode() {
    // CodeMirror
    var text = $('#example_code .preview');
    if (text.length > 0) {
        var cm = CodeMirror(
            function(elt) { text[0].parentNode.replaceChild(elt, text[0]); },
            {
                value        : $.trim(text.val()),
                mode        : "text/html",
                readOnly    : true,
                gutter        : true,
                lineNumbers    : true
            }
        );
        cm.setSize(null, cm.doc.height + 15);
    }
    var text = $('#example_code .json');
    if (text.length > 0) {
        var cm = CodeMirror(
            function(elt) { text[0].parentNode.replaceChild(elt, text[0]); },
            {
                    value        : $.trim(text.val()),
                mode        : "javascript",
                readOnly    : true,
                gutter        : true,
                lineNumbers    : true
            }
        );
        cm.setSize(null, cm.doc.height + 15);
    }
    $('#example_code .jsfiddle').on('click', function () {
        // $('#fiddleForm textarea[name=html]').val(html || '');
        // $('#fiddleForm textarea[name=js]').val(js || '');
        // $('#fiddleForm textarea[name=css]').val(css || '');
        $('#fiddleForm').submit();
    });
}
