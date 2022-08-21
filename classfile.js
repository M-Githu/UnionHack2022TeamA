//図形
class Figure{
    #context;
    #positionX;
    #positionY;
    #fillStyle;
    constructor(context, positionX, positionY){
        this.#context = context;
        this.#positionX = Math.abs(positionX);
        this.#positionY = Math.abs(positionY);
    }

    get positionX(){
        return this.#positionX;
    }

    get positionY(){
        return this.#positionY;
    }

    get context(){
        return this.#context;
    }

    set fillStyle(fillStyle){
        this.#fillStyle = fillStyle;
    }

    get fillStyle(){
        return this.#fillStyle;
    }
    
    fill(){
        this.#context.fillStyle = this.#fillStyle;
    }

    isIn(){
        return false;
    }
}

class Circle extends Figure{
    #radius;
    constructor(context, positionX, positionY, radius){
        super(context, positionX, positionY);
        this.#radius = Math.abs(radius);
    }


    fill(){
        super.fill();
        super.context.beginPath();
        super.context.arc(super.positionX, super.positionY, this.#radius, 0, 2*Math.PI, 1);
        super.context.fill();
    }

    isIn(x,y){
        return (x-super.positionX)**2+(y-super.positionY)**2<=this.#radius**2;
    }
}

class Rectangle extends Figure{
    #width;
    #height;
    constructor(context, positionX, positionY, width, height){
        super(context, positionX, positionY);
        this.#width = Math.abs(width);
        this.#height = Math.abs(height);
    }

    fill(){
        super.fill();
        super.context.fillRect(super.positionX, super.positionY, this.#width, this.#height);
    }

    isIn(x,y){
        const px = super.positionX, py = super.positionY;
        return px <= x && x <= px + this.#width && py <= y && y <= py + this.#height;
    }
}