"use strict";

var _person = require("./person.js");

console.log("App is working!!");

console.log((0, _person.isAdult)(23));

var template = React.createElement(
  "h1",
  null,
  "Hello world!!"
);
ReactDOM.render(template, document.getElementById("App"));
