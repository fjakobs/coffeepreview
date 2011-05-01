(function() {

    var ace = require("ace/ace");
    var CoffescriptMode = require("ace/mode/coffee").Mode;
    
    var editor = ace.edit("coffeeedit");
    editor.getSession().setMode(new CoffescriptMode());

})();