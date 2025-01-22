var speed = 1;
var time = 60;
var scroll = true;
var sX = 1;

var element = document.getElementById('text');

fetch("text.txt")
  .then((res) => res.text())
  .then((text) => {
    element.innerHTML = text;
   })
  .catch((e) => console.error(e));



element.scrollTop = -100;

function scrollElementBy50px(){
    
    console.log(element.scrollTop)
    if(scroll == true)
    {
        console.log("Scroll");
        element.scrollTop += speed;
    }

    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
        console.log("End of scroll");
        scroll = false;
    }

    if(scroll == true)
    {
        document.getElementById('speedometer').innerHTML = time;
        setTimeout(scrollElementBy50px, time);
    }

}


function Increase(){
    time -= 5;
    console.log(time);
}

function Decrease(){
    time += 5;
    console.log(time);
}

function Reset(){
    element.scrollTop = -10000;
    scroll = true;
}

function Mirror(){

    if(sX == 1) 
    {
        sX = -1;
        element.className = "container1";
    }
    else
    {
        sX = 1;
        element.className = "container2";
    }
    console.log(sX);
}
