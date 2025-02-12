//this is body
document.body.style.backgroundColor = "black";
     //main div the parent of all divs
let a = document.createElement("div");
a.style.display = "flex";
a.style.justifyContent = "center";
a.style.alignItems = "center";
a.style.height = "100vh";
document.body.appendChild(a);

//first div child of main div
let one = document.createElement("div");
one.style.backgroundColor = "white";
one.style.transition = "width 5s";
one.style.width = "230px"
one.style.margin = "5px";
//i make this div is the child of main div
a.appendChild(one);

//img1 is the child of first div
let img1 = document.createElement("img");
img1.src = "html5.png";
img1.style.marginTop = "20px";
one.appendChild(img1);

//h2 is the child of first div
let first = document.createElement("h2");
first.style.color = "blue";
first.textContent = "HTML";
first.style.fontWeight = "bold";
first.style.textAlign = "center";
//i make h2 is the child of first div
one.appendChild(first);

//second div child of main div
let two = document.createElement("div");
two.style.backgroundColor = "white";
two.style.width = "230px";
two.style.margin = "5px";
//i make this div is the child of main div
a.appendChild(two);

//img2 is the child of second div
let img2 = document.createElement("img");
img2.src = "css.png";
img2.style.marginLeft = "-10px";
img2.style.height = "244px";
two.appendChild(img2);


//h2 is the child of second div
let second = document.createElement("h2");
second.style.color = "blue";
second.textContent = "CSS";
second.style.textAlign = "center";
second.style.fontWeight = "bold";
//i make h2 is the child of div
two.appendChild(second);

//third div is the child of main div
let three = document.createElement("div");
three.style.backgroundColor = "white";
three.style.width = "210px";
three.style.margin = "5px";
//i make this div is the child of main div
a.appendChild(three);

//img3 is the child of third div
let img3 = document.createElement("img");
img3.src = "js.png";
img3.style.height = "235px";
img3.style.marginLeft = "-90px";
img3.style.marginTop = "10px";
three.appendChild(img3);


//h2 is the child of third div
let third = document.createElement("h2");
third.style.color = "blue";
third.textContent = "Javascript";
third.style.textAlign = "center";
third.style.fontWeight = "bold";
//i make h2 is the child of div
three.appendChild(third);


