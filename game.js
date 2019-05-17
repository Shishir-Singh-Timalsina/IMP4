function startGame(){
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#f9f2ec";
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
}