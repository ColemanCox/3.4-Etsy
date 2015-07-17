var source   = document.querySelector("#entry-template").innerHTML;
var template = Handlebars.compile(source);

var onLoad = function(data){
    debugger;
};


loadEtsy("dogs", onLoad);
