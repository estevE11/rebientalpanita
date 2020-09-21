class Entity {
    constructor(id) {
        this.w = 50;
        this.pos = new Vector2(0, 0);
        this.pos.x = Math.floor(Math.random()*(width-this.w));
        this.pos.y = Math.floor(Math.random()*(height-this.w));
        this.vel = this.randVel();
        this.id = id;

        this.maxvel = 1.5;

        this.moveTime = 0;
        this.maxMoveTime = 100;
    }

    update() {
        if(this.moveTime > this.maxMoveTime) {
            this.vel = this.randVel();
            this.moveTime = 0;
        }
        this.moveTime++;

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        if(this.pos.x < 0) this.vel.x = this.maxvel;
        if(this.pos.x > width-this.w) this.vel.x = -this.maxvel;
        if(this.pos.y < 0) this.vel.y = this.maxvel;
        if(this.pos.y > height-this.w) this.vel.y = -this.maxvel;
    }

    render() {
        ctx.fillStyle = color(255, 255, 255);
        ctx.drawImage(images[this.id], this.pos.x, this.pos.y, this.w, this.w);
    }

    randVel() {
        return new Vector2(Math.floor(Math.random()*2) == 0 ? -1.5 : 1.5, Math.floor(Math.random()*2) == 0 ? -1.5 : 1.5);
    }

    checkInside(x, y) {
        if(x > this.pos.x && x < this.pos.x + this.w && y > this.pos.y && y < this.pos.y + this.w) {
            return true;
        }
        return false;
    }
}