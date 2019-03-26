function draw(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var start_x, start_y, end_x, end_y, x,y ;

    ctx.fillStyle = "#d1d2d3";
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);

    function setStartPoint(event){
        start_x = event.clientX - canvas.getBoundingClientRect().left;
        start_y = event.clientY - canvas.getBoundingClientRect().top;
    }

    function setEndPoint(event){

        end_x = event.clientX - canvas.getBoundingClientRect().left;
        end_y = event.clientY - canvas.getBoundingClientRect().top;
        draw();
        previewLine();


     }

    function currentPoint(event){
        x = event.clientX - canvas.getBoundingClientRect().left;
        y = event.clientY - canvas.getBoundingClientRect().top;
    }

    function draw(){
        ctx.moveTo(start_x,start_y);
        ctx.lineTo(end_x,end_y);
        ctx.stroke();
    }

    function previewLine(event) {

        ctx.fillStyle = "#d1d2d3";
        ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
        
        ctx.moveTo(start_x,start_y);
        ctx.lineTo(x,y);
        ctx.stroke();
    }

    canvas.addEventListener('mousedown',setStartPoint,false);
    canvas.addEventListener('mousemove',currentPoint,false);
    canvas.addEventListener('mouseup',setEndPoint,false);

}

function clearCanvas(){
    location.reload();
}