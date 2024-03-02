// TODO 1
const { EventEmitter } = require("events");
// TODO 2
const myEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 3
myEmitter.on("Happy-birthday", birthdayEventListener);
// TODO 4
myEmitter.emit("Happy-birthday", "muni");

// output dijalankan dgn perintah :
// node ./events/events
