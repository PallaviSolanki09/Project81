canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");

//Code for make a rectangle.

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 3;
ctx.rect(170,140,450,250);
ctx.stroke();

//Code for make a circle.

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(270,230,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(390,230,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(510,230,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "orange";
ctx.lineWidth= 5;
ctx.arc(330,290,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(450,290,50,0,2 * Math.PI);
ctx.stroke();