(function (window) {
var hellotoj = {};
var helloword = "Hello";
hellotoj.func = function (name) {
  console.log(helloword + " " + name);
}
window.hellotoj = hellotoj;	

})(window);