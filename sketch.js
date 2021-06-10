var a=prompt(" enter 1st number ")
var b=prompt(" enter 2nd number ")





function setup() { 
var button=createButton(" click here to swap ")
button.mousePressed(swap)

}

function draw() {


}

function swap() {
[a,b]=[b,a]
console.log("a is equal to b"+a)
console.log(" b is equal to a"+b)

}