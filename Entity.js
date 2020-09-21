class Entity {
    constructor(pos, id) {
        this.w = 50;
        this.pos = new Vector2(0, 0);
        this.pos.x = Math.floor(Math.random()*(width-this.w));
        this.pos.y = Math.floor(Math.random()*(height-this.w));
        this.vel = new Vector2(Math.floor(Math.random()*2) == 0 ? -2 : 2, Math.floor(Math.random()*2) == 0 ? -2 : 2);
    
        if(!id) {
            id = 0;
        }
    }

    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        if(this.pos.x < 0) this.vel.x = 2;
        if(this.pos.x > width-this.w) this.vel.x = -2;
        if(this.pos.y < 0) this.vel.y = 2;
        if(this.pos.y > height-this.w) this.vel.y = -2;
    }

    render() {
        ctx.fillStyle = color(255, 255, 255);
        ctx.drawImage(images[0], this.pos.x, this.pos.y, this.w, this.w);
    }
}