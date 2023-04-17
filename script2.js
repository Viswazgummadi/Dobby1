// Get the inner and outer cursors
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

// Update the cursor position on mouse move
document.addEventListener("mousemove", mouseCursor);

function mouseCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    // Update the position of the cursors
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;

    // Increase the size of the inner cursor on hover
    let links = Array.from(document.querySelectorAll("a"));
    links.forEach(link =>{
        link.addEventListener("mouseover", ()=>{
            innerCursor.classList.add('grow');
        });
        link.addEventListener("mouseleave", ()=>{
            innerCursor.classList.remove('grow');
        });
    });
}

// Get the circles and set initial coordinates
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

// Update the coordinates on mouse move
window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

// Animate the circles
function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    // Update the position and size of the circle
    circle.style.left = x - circle.offsetWidth / 2 + "px";
    circle.style.top = y - circle.offsetHeight / 2 + "px";
    circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

    circle.x = x;
    circle.y = y;

    // Update the next circle's position
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.12;
    y += (nextCircle.y - y) * 0.12;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
