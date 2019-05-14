jQuery(document).ready(function($) {
    var canvas = document.getElementById("canvas");  
    var ctx = canvas.getContext("2d");
    var mouseIsDown = false;
    var canvasX = [], canvasY = [];

    var point = 0;

    canvas.addEventListener("mousedown", mouseDown, false);
  //  canvas.addEventListener("mousemove", mouseXY, false);

    //canvas.addEventListener("mouseup", mouseUp, false);


    //document.body.addEventListener("mouseup", mouseUp, false);


       
    function checkIfClickOnRect(){
        if (ctx.isPointInPath(canvasX[0], canvasY[0]) && mouseIsDown ){
            point = point + 1;
            updatePoint(point);
        }
        else{
            console.log('not click on rectangle');
        }
    }
      
    function mouseDown(){           //MouseDown
        mouseIsDown = true;
       mouseXY();
        checkIfClickOnRect();
    }

    function mouseUp() {            //MouseUP
        mouseIsDown = false;
        mouseXY();
    }

    function mouseXY(e) {           //Mouse event
        if (!e){
            e = event;
            canvasX[0] = e.pageX - canvas.offsetLeft;
            canvasY[0] = e.pageY - canvas.offsetTop;
        }
    }
   
    
    /*Randomly generating a point in the canvas*/
    function randomx(){
        return Math.floor((Math.random() * 500) + 1);
    }

    function randomy(){
        return Math.floor((Math.random() * 250) + 1);
    }



    function Shape(x,y,width,height,ctx){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;

        this.draw = function(){
            ctx.fillStyle = "#f2c100"; //yellow
            ctx.beginPath();
            this.ctx.rect(this.x,this.y,this.width,this.height);
            this.ctx.fill();

        }
    }

    function timer(time,ctx){
        updateTimeText(time, ctx);
    }

    function updateTimeText(time, ctx){
        var timer = "Time: " + time + " s";
        $(".header").html(timer);
        ctx.clearRect(0,0,900,400);
         var reg = new Shape(randomx(),randomy(),100,100,ctx);
         ctx.beginPath();
         reg.draw();
         ctx.closePath();

        if( time -1 >= 0){
             setTimeout( function() { updateTimeText(time-1,ctx) }, 1000);
            return;
        }       
    }

    /*updating points*/ 
    function updatePoint(point){
        var text = "Point: " + point + "";
        console.log(point);
        $(".points").html(text);

    }

    /*Starting the game */
    $('.start').on('click', function(){
        timer(10,ctx);
    });	
		
});
