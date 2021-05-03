class Ninja {
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName = () => console.log(this.name);
    showStats = () => console.log(this.name + "," + this.health + "," + this.speed + "," + this.strength);
    drinkSake(){
        console.log("I am in drinkSake");
        this.health = this.health + 10;
    } 
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("blah blah blah");
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

// const superNinja = new Sensei("BetterThanNinja");
// superNinja.speakWisdom();
// superNinja.showStats();