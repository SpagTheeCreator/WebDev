var header = document.getElementsByTagName("header");
header[0].setAttribute("style", "color: blue;");
header[0].style.backgroundColor = "gray";
header[0].style.height = "550px";
header[0].style.alignItems = "flex-start";
header[0].style.backgroundImage = "url(https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
header[0].style.backgroundRepeat = "no-repeat";
header[0].style.backgroundSize = "cover"
header[0].style.backgroundPosition = "center";
header[0].style.width = "100%";
header[0].style.overflow = "hidden";
header[0].style.position = "relative";


var heroText = document.createElement("div");
var p = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");
heroText.append(p,p2,p3);
heroText.setAttribute("id", "hero")
console.log(heroText);
p.innerHTML = "CAR PARK";
p2.innerHTML = "We Deal In All Things Cars"
p3.innerHTML = "Home To Amazing Rides For Your Comfort At Good Prices" 
heroText.setAttribute("style", "position: absolute;")
heroText.style.inset= "0";
heroText.style.color = "white"
heroText.style.top ="40%"
heroText.style.left = "40px"
heroText.style.fontSize = "50px"
p.setAttribute("style", "margin-bottom: 5%")
p.style.fontWeight ="900";
p2.setAttribute("style", "margin-bottom: 3%")
p2.style.fontWeight = "700"
p3.setAttribute("style", "margin-bottom: 3%")
p3.style.fontWeight = "700"
p3.style.lineHeight="50px"
header[0].appendChild(heroText)


