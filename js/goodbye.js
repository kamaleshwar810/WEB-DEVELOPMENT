(function (window) {
var gudbye = {};
var gudword = "Good Bye";
gudbye.func = function (name) {
  console.log(gudword + " " + name);
}
window.gudbye = gudbye;
})(window);



