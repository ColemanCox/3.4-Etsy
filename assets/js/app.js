var source   = document.querySelector("#entry-template").innerHTML;
var template = Handlebars.compile(source);

var onLoad = function(data) {
    var s = template(data);
    var t =


};
loadEtsy("dogs", onLoad);
