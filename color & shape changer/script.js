var curr="square"

var shape = ["square", "rectangle","oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright"];

var color = ["red", "orange", "green", "maroon", "pink", "violet"];

document.getElementById("up").onclick= function(){
    var ranshape = shape[math.floor(math.random()*shape.length)];
    document.getElementById("curr").setAttribute("id",ranshape);
    curr=ranshape;
}

document.getElementById("down").onclick= function(){
    var randColor = color[math.floor(math.random()*color.length)];
    document.getElementById("circle").style.backgroundColor("randColor");

}