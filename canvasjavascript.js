var end_point    =  [] ;
var starting_line  = null ;
var ending_line  = null ;
var drawing_line = false ;
var starting_point  =  [] ;


function point( taken_x_coordinate,taken_y_coordinate ){
    this.x = taken_x_coordinate ;
    this.y = taken_y_coordinate ;
}

function mouseDown( event ){
    var mouse_x, mouse_y ;

    if ( event.offsetX && event.offsetY ){
        mouse_x = event.offsetX ;
        mouse_y = event.offsetY ;
    }
    else if ( event.clientX && event.clientY ){
        var canvas = event.target ;
        mouse_x = event.clientX - canvas.offsetLeft ;
        mouse_y = event.clientY - canvas.offsetTop ; 
    }

    starting_line = new point( mouse_x,mouse_y ) ;

    drawing_line = true ;
    draw() ;
}

function mouseUp( event ){
    if ( drawing_line == true ){
        var mouse_x, mouse_y ;
        if ( event.offsetX && event.offsetY ){
            mouse_x = event.offsetX ;
            mouse_y = event.offsetY ;
        }
        else if ( event.clientX && event.clientY ){
            var canvas = event.target ;

            mouse_x = event.clientX - canvas.offsetLeft ;
            mouse_y = event.clientY - canvas.offsetTop ; 
        }

        starting_point.push( starting_line ) ;
        end_point.push( new point( mouse_x, mouse_y ) ) ;
                                
        drawing_line = false ;
        starting_line = null ;
        ending_line   = null ;

        draw() ;
    }
}


function mouseMove( event ){
    if ( drawing_line == true ){
        var mouse_x, mouse_y ;
        if ( event.offsetX && event.offsetY ){
            mouse_x = event.offsetX ;
            mouse_y = event.offsetY ;
        }
        else if ( event.clientX && event.clientY ){
            var canvas = event.target ;

            mouse_x = event.clientX - canvas.offsetLeft ;
            mouse_y = event.clientY - canvas.offsetTop ; 
        }

        ending_line = new point( mouse_x, mouse_y ) ;

        draw() ;
    }
}


function draw(){
    var canvas = document.getElementById( "drawingCanvas" ) ;
    var context = canvas.getContext("2d") ;

    context.fillStyle = "#d1d2d3" ;
    context.fillRect( 0, 0, canvas.width, canvas.height ) ;

    context.lineWidth   = 1 ;
    context.strokeStyle = "black" ;

    for ( var line_index  =  0 ; line_index  <  starting_point.length ; line_index  ++ ){
        context.beginPath() ;
        context.moveTo( starting_point[ line_index ].x, starting_point[ line_index ].y ) ;
        context.lineTo( end_point[ line_index ].x, end_point[ line_index ].y ) ;
        context.closePath() ;
        context.stroke() ;
    }

    context.strokeStyle = "gray" ;

    if ( ending_line != null ){
        context.beginPath() ;
        context.moveTo( starting_line.x, starting_line.y ) ;
        context.lineTo( ending_line.x, ending_line.y ) ;
        context.closePath() ;
        context.stroke() ;
    }
}

function clearCanvas(){
    location.reload();
}
