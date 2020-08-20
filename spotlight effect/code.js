window.addEventListener("load", function() {
   var header = document.

querySelector("header");
    var node =  document.
createElement("span");
    var handle 
    header.insertBefore (node, header.firstChild); 
    
    header.addEventListener("mousemove",
function(e){
var shape = this.firstChild;
var x = e.offsetX;
var y = e.offsetY;
shape.style.left = x + "px";
shape.style.top = y + "px";
shape.style.backgroundPosition = (0-x)+"px
"+(0-y)+"px";
});
});