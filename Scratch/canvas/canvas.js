function mouseOverFunction(element){
    element.style = "background-color: black";
}

function mouseOver(element){
    var c = document.getElementById('canvas');
    var canvas = c.getContext('2d');
    for(var i = 0; i < 1000; i++){
        var x = Math.random();
        let temp = i.toString();
        let pos1 = temp.charAt(0);
        let pos2 = temp.charAt(1);
        let pos3 = temp.charAt(2);
        let pos4 = temp.charAt(3);
        console.log("hello");
        canvas.fillStyle = `#FF${pos1}${pos2}${pos3}${pos4}`;
        canvas.fillRect(0, 0, 800, 800);
        setTimeout(function(){
            console.log("3000")
        },3000)
    }
    console.log(c.scrollWidth);
}
