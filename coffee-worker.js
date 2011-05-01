
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
        console.log("worker update")
    }
    
}).call(CoffeeScriptWorker.prototype);

});