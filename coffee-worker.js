
define(function(require, exports, module) {
    
var oop = require("pilot/oop");
var Mirror = require("ace/worker/mirror").Mirror;

window.addEventListener = function() {};
importScripts(require.tlns.jsconf + "/coffeescript.js");

var CoffeeScriptWorker = exports.CoffeeScriptWorker = function(sender) {
    Mirror.call(this, sender);
    this.setTimeout(200);
};

oop.inherits(CoffeeScriptWorker, Mirror);

(function() {
    
    this.onUpdate = function() {
        var value = this.doc.getValue();
        var js;
        try {
            js = CoffeeScript.compile(value);
        } catch(e) {
            return;
        }
        this.sender.emit("js", js);
    }
    
}).call(CoffeeScriptWorker.prototype);

});