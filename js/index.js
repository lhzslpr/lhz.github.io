/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 08:23:04
 * @version $Id$
 */
var a=[12,3,12];

console.log(a[0]);
if (a.constructor == Array) {
    //һ����
    a = a.join(',');
}
console.log(a.length);


var body = document.body;

console.log(body);


body.onmousedown = function(event)
{
	x=event.clientX
	y=event.clientY
	console.log("X ����: " + x + ", Y ����: " + y)
}



