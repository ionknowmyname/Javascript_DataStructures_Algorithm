const events = require("events");

function createEmitter(onOpen, onClose) {    

}

function opened(emitter) {

}
function closed(emitter) {

}

let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;