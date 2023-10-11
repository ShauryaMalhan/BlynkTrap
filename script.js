// JavaScript code for spider's random movement
const spider = document.querySelector('.spider');

function moveSpiderRandomly() {
    const maxX = window.innerWidth - spider.clientWidth;
    const maxY = window.innerHeight - spider.clientHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    spider.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Call the moveSpiderRandomly function to start the spider's movement
moveSpiderRandomly();

// Set an interval to make the spider move randomly at regular intervals (e.g., every 5 seconds)
setInterval(moveSpiderRandomly, 5000);

const cursorRounded = document.querySelector('.cursor_hammer_0');
const cursorPointed = document.querySelector('.cursor_hammer_45');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)
