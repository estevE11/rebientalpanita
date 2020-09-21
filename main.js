let
canvas, ctx, 
cw = 800, ch = 600;
width = 600, height = 600,

entities = [], target_id = null,
round = 0, n = 50,

time_steps = 1,

images = [
    document.getElementById("esteve"),
    document.getElementById("raul"),
    document.getElementById("juke"),
    document.getElementById("diego"),
    document.getElementById("escopu")
];

function start() {
    init();

    startRound();

    window.requestAnimationFrame(loop);
}

function init() {
    canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    canvas.addEventListener("click", onclick);

}

function startRound() {
    entities = [];
    target_id = Math.floor(Math.random()*images.length);
    console.log("Target ID: " + target_id);

    for(let i = 0; i < n; i++) {
        let id = getRandomID();
        while(id === target_id) {
            id = getRandomID();
        }
        
        entities.push(new Entity(id));
    }

    entities.splice(Math.floor(Math.random()*n), 0, new Entity(target_id));
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
    //Background
    ctx.fillStyle = color(255, 255, 255);
    ctx.fillRect(0, 0, cw, ch);

    //Right border
    ctx.fillStyle = color(0, 0, 0);
    ctx.fillRect(width, 0, 5, height);

    for(i = 0; i < entities.length; i++) {
        entities[i].render();
    }

    //Target
    ctx.drawImage(images[target_id], 615, 10, 200, 200);
}

function onclick(e) {
    let mx = e.offsetX, my = e.offsetY;

    for(let i = 0; i < entities.length; i++) {
        if(entities[i].checkInside(mx, my)) {
            if(entities[i].id == target_id) {
                round++;
                startRound();
            }
        }
    }
}

function getRandomID() {
    return Math.floor(Math.random()*images.length);
}

function color(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

window.onload = function() {
    start();
}