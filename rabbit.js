class Rabbit{
    constructor(x,y){
        this.R1 = loadImage("images/rabbit_right.jpg");
        this.L1 = loadImage("images/rabbit_left.jpg");
    }

display(){
imageMode(CENTER);

image(this.L1, this.position.x, this.position.y);


if (this.position.x < 0){
    image(this.R1, this.position.x, this.position.y);
}


}
}