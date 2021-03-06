define(function(require, exports, module) {

    var ace = require("ace/ace");
    var CoffescriptMode = require("jsconf/coffee").Mode;
    var JsMode = require("ace/mode/javascript").Mode;
    var Theme = require("ace/theme/twilight");
    
    var editor = ace.edit("coffeeedit");
    editor.getSession().setMode(new CoffescriptMode());
    editor.setTheme(Theme);
    
    var viewer = ace.edit("jsedit");
    viewer.setTheme(Theme);
    viewer.setReadOnly(true);
    viewer.getSession().setMode(new JsMode());
    
    editor.getSession().on("js", function(e) {
        var top = viewer.renderer.getScrollTop();
        viewer.getSession().setValue(e.data);
        viewer.renderer.scrollToY(top);
    });
    
});