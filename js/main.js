//Code for the heading 
let heading=document.querySelector(".title");
let headingContent=heading.textContent;
let headingArray=headingContent.split("");
heading.textContent="";
for(let i=0;i<headingArray.length;i++)
{
    heading.innerHTML+="<span>"+headingArray[i]+"</span>";
}
let char=0;
let timer=setInterval(onTick,50);
function onTick()
{
    const span=heading.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char===headingArray.length)
    {
        complete();
        return;
    }
}
function complete()
{
    clearInterval(timer);
    timer=null;
}

// code for animating the pikachu

const field = document.getElementsByTagName("body");
const pikachu = document.getElementById("pikachu");


const maxX = field[0].clientWidth - pikachu.offsetWidth;
const maxY = field[0].clientHeight - pikachu.offsetHeight;
const gridSize = 500; // pixels

const duration = 5; // seconds

let start = null;

function bounce(time) {
  let progress, x, y;
  if (start === null)
    start = time;

  progress = (time - start) / duration / 1000;

  x = progress * maxX / gridSize;
  y = 0.5 * Math.sin(x);


  pikachu.style.left =  gridSize*x + "px";
  pikachu.style.bottom =  (gridSize * y) + "px";
  pikachu.style.top = (gridSize * y) + "px";

  if (progress >= 1.5) {
    start = null;

  }
  requestAnimationFrame(bounce);
}
requestAnimationFrame(bounce);

