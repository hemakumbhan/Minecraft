var canvas=new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
player_x=10;
player_y=10;
var player_object="";

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x

});
canvas.add(player_object);
});}

function block_update(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
    
    });
    canvas.add(block_object);
    });}

    window.addEventListener("keydown",down);
    function down(e){
key=e.keyCode;
console.log(key);

if(e.shiftKey==true && key=='80'){
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById('width').innerHTML=block_width;
    document.getElementById('height').innerHTML=block_height;
}


if(e.shiftKey==true && key=='77'){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById('width').innerHTML=block_width;
    document.getElementById('height').innerHTML=block_height;
}

if(key=='87'){
    block_update('wall.jpg');
    console.log("w");
}

if(key=='71'){
    block_update('ground.png');
    console.log("g");
}

if(key=='76'){
    block_update('light_green.png');
    console.log("l");
}

if(key=='84'){
    block_update('trunk.jpg');
    console.log("t");
}

if(key=='82'){
    block_update('roof.jpg');
    console.log("r");
}

if(key=='89'){
    block_update('yellow_wall.png');
    console.log("y");
    }
    
if(key=='68'){
    block_update('dark_green.png');
    console.log("d");
}

if(key=='85'){
    block_update('unique.png');
        console.log("u");}

if(key=='67'){
        block_update('cloud.jpg');
        console.log("c");
    
}
if(key=='38'){
   up();
    console.log("up");
}

if(key=='40'){
    down();
    console.log("d0wn");
}

if(key=='37'){
   left();
    console.log("left");
}

if(key=='39'){
   right();
    console.log("right");
}

}

function up(){
    if (player_y>=0){
        player_y=player_y-block_height;
        console.log("New player x and y position :",player_x,player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function down(){
    if (player_y<=550){
        player_y=player_y+block_height;
        console.log("New player x and y position :",player_x,player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x>=0){
        player_x=player_x-block_height;
        console.log("New player x and y position :",player_x,player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x<=950){
        player_x=player_x-block_height;
        console.log("New player x and y position :",player_x,player_y);
        canvas.remove(player_object);
        player_update();
    }
}


