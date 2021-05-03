class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name,cost,pow,res){
        super(name,cost);
        this.pow = pow;
        this.res = res;
    }
    attack(unit){
        unit.res -= this.pow;
    }
}
class Effect extends Card{
    constructor(name,cost,stat,magnitude){
        super(name,cost);
        this.text = "";
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {

            //Determining if stat is raised or lowered.
                if(this.magnitude > 0){
                    this.text += "Raise";
                }
                else if(this.magnitude < 0){
                    this.text += "Lower";
                }
                else{
                    throw new Error("unit's magnitude cannot be 0.")
                }

            //adding to string filler words.
            this.text += " the target's ";

            //Determining the amount stat is raised or lowered.
                if(this.stat == 'pow'){
                    this.text += "power";
                }
                else if(this.stat == 'res'){
                    this.text  += "resilience";
                }
                else{
                    throw new Error("unit's stat must be chosen")
                }

            //adding to string filler words.
            this.text += " by ";

            //adding mag to string.
            let absAmount = Math.abs(this.magnitude);
            this.text += absAmount;

        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
        
}


redBeltNinja = new Unit('Red Belt Ninja',5,3,5);
blackBeltNinja = new Unit('Black Belt Ninja',4,4,6);
hardAlgo = new Effect('Hard Algorithm', 2, 'pow', 1);
unReject = new Effect('Unhandled Promise Rejection', 5, 'res', 3);
pair = new Effect('Pair Programming', 7, 'res', -4);

console.log(redBeltNinja);
console.log(blackBeltNinja);

hardAlgo.play(redBeltNinja);
unReject.play(redBeltNinja);
pair.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);

console.log(unReject.text);
console.log(blackBeltNinja);
