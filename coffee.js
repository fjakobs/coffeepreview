define(function(require, exports, module) {

var CoffeeMode = require("ace/mode/coffee").Mode;
var WorkerClient = require("ace/worker/worker_client").WorkerClient;
var oop = require("pilot/oop");

function CoffeeModeExt() {
    CoffeeMode.call(this);
};

oop.inherits(CoffeeModeExt, CoffeeMode);

CoffeeModeExt.prototype.createWorker = function(session) {
    var doc = session.getDocument();
    var worker = new WorkerClient(["ace", "pilot", "jsconf"], "worker-coffee.js", "jsconf/coffee-worker", "CoffeeScriptWorker");
    worker.call("setValue", [doc.getValue()]);
    
    doc.on("change", function(e) {
        e.range = {
            start: e.data.range.start,
            end: e.data.range.end
        };
        worker.emit("change", e);
    });
    
    worker.on("js", function(e) {
        session._dispatchEvent("js", e);
    });    
}

exports.Mode = CoffeeModeExt;

});