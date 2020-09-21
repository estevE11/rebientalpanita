let
canvas, ctx, 
width = 800, height = 800,

entities = [],

time_steps = 1

images = [
    document.getElementById("esteve"),
    document.getElementById("raul"),
    document.getElementById("juke"),
    document.getElementById("diego"),
    document.getElementById("escopu")
];

function start() {
    init();

    for(let i = 0; i < 10; i++)
        entities.push(new Entity(0, new Vector2(10, 10)));

    window.requestAnimationFrame(loop);
}

function init() {
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
}

function loop() {
    update();
    render();
    window.requestAnimationFrame(loop);
}

function update() {    
    for(i = 0; i < entities.length; i++) {
        entities[i].update();
    }
}

function render() {
    ctx.fillStyle = color(255, 255, 255);
    ctx.fillRect(0, 0, width, height);
    for(i = 0; i < entities.length; i++) {
        entities[i].render();
    }

}

function color(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

window.onload = function() {
    start();
}