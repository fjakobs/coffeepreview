(function() {

    var ace = require("ace/ace");
    var CoffescriptMode = require("ace/mode/coffee").Mode;
    var JsMode = require("ace/mode/javascript").Mode;
    var Theme = require("ace/theme/twilight");
    
    var editor = ace.edit("coffeeedit");
    editor.getSession().setMode(new CoffescriptMode());
    editor.setTheme(Theme);
    
    var viewer = ace.edit("jsedit");
    viewer.setTheme(Theme);
    viewer.setReadOnly(true);
    viewer.getSession().setMode(new JsMode());
    
    editor.getSession().on("change", update);
    update();
        
    function update() {
        try {
            var js = CoffeeScript.compile(editor.getSession().getValue());
        } catch (e) {
            return;
        }
        
        var top = viewer.renderer.getScrollTop();
        viewer.getSession().setValue(js);
        viewer.renderer.scrollToY(top);
    }
    
})();