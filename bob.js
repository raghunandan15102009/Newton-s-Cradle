class Bob {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction: 20,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y,50, options)
        World.add(world, this.body);
        this.radius=50;
    }
    display() {
        var pos = this.body.position;
        fill("purple");
        push()
        translate(pos.x, pos.y);
        ellipseMode(RADIUS)
        ellipse(0, 0,50);
        pop()
    }
}