var hero = document.getElementById("hero");
var images = ["url(https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg)",
    "url(https://images.pexels.com/photos/4065814/pexels-photo-4065814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/108160/pexels-photo-108160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/11246062/pexels-photo-11246062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/8376383/pexels-photo-8376383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/235222/pexels-photo-235222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/205740/pexels-photo-205740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/627677/pexels-photo-627677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/10804347/pexels-photo-10804347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/5279905/pexels-photo-5279905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"]
var counter = 0

function imageChanger() {
    if (counter >= images.length) {
        counter = 0;
    }
    hero.style.backgroundImage = images[counter];
    counter++;
}

setInterval(imageChanger, 5000);

var header = document.getElementsByTagName("header")[0];

var toggler = document.getElementById("menu-toggler");

var bar1 = document.getElementById("menu-toggler2");
var bar3 = document.getElementById("menu-toggler3");

var nav = document.getElementsByTagName("nav")[0];
var btn = document.getElementById("menu-btn");

btn.onclick = function(){
  toggler.classList.toggle("ex");
  bar1.classList.toggle("ex");
  bar3.classList.toggle("ex");
  nav.classList.toggle("ex");
};


/*toggler.onclick = function () {
    if (toggler.className == "ex") {
        toggler.className = "";
        bar1.className = "";
        bar3.className = "";
        nav.className = "";
        header.style.backgroundColor = "";
    } else{
        toggler.className = "ex";
        bar1.className = "ex";
        bar3.className = "ex";
        nav.className = "ex";
        header.style.backgroundColor = "#333";
    }
};*/

var link1 = document.getElementsByTagName("li")[0];
var link2 = document.getElementsByTagName("li")[1];
var link3 = document.getElementsByTagName("li")[2];
var link4 = document.getElementsByTagName("li")[3];

link1.onclick = function(){
    toggler.classList.remove("ex");
    bar1.classList.remove("ex");
    bar3.classList.remove("ex");
    nav.classList.remove("ex");
}

link2.onclick = function(){
    toggler.classList.remove("ex");
    bar1.classList.remove("ex");
    bar3.classList.remove("ex");
    nav.classList.remove("ex");
}

link3.onclick = function(){
    toggler.classList.remove("ex");
    bar1.classList.remove("ex");
    bar3.classList.remove("ex");
    nav.classList.remove("ex");
}

link4.onclick = function(){
    toggler.classList.remove("ex");
    bar1.classList.remove("ex");
    bar3.classList.remove("ex");
    nav.classList.remove("ex");
}


window.onscroll= function(){
    if(scrollY>=130){
        header.classList.add("ex");
    }else if(scroll<130){
        header.classList.remove("ex");
    }
}

let a = [];

for(let i = 0; i < 70000; i++){
    // a[i] = 2;
    a.push(2);
    i+=3;
}

console.log(a);
let b = [];

// b[1000000000] = 2;

console.log(b)

function push(item){
    let len = b.length;
    b[len] = item;
}