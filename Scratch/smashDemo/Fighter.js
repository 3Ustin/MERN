class Fighter{
    constructor(name,playerNum,percentage = 0){
        this.name = name;
        this.playerNum = playerNum;
        this.percentage = percentage;
    }

    attack(otherPlayer){
        otherPlayer.percentage += 20;
    }
}

let mewtwo = new Fighter("Mewtwo",1,30);
mewtwo.attack(ness);
let ness = new Fighter("Ness", 2, 60);


console.log(mewtwo);
console.log(ness);