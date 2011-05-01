(function() {

    var ace = require("ace/ace");
    var CoffescriptMode = require("ace/mode/coffee").Mode;
    var Theme = require("ace/theme/twilight");
    
    var editor = ace.edit("coffeeedit");
    editor.getSession().setMode(new CoffescriptMode());
    editor.setTheme(Theme);
    
    var viewer = ace.edit("jsedit");
    viewer.setTheme(Theme);
    viewer.setReadOnly(true);
    
})();