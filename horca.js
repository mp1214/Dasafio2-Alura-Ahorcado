var pincel = document.getElementById("canvas").getContext("2d");
pincel.fillStyle = "#E5E5E5";


var color = "#0A3871"




function crearHorca(){
    
    pincel.lineWidth = 2;
    pincel.strokeStyle = color;
    pincel.beginPath();
    pincel.moveTo(40,140);
    pincel.lineTo(280,140);
    pincel.stroke();
}

function palo(){
    pincel.lineWidth = 4;
    pincel.strokeStyle = color
    pincel.beginPath()
    pincel.moveTo(90,30)
    pincel.lineTo(90,140)
    pincel.stroke()
}


function palo1(){
    pincel.lineWidth = 2.5;
    pincel.strokeStyle = color
    pincel.beginPath()
    pincel.moveTo(88,29)
    pincel.lineTo(245,29)
    pincel.stroke()
    }
    
function soga(){
    pincel.lineWidth = 4;
    pincel.strokeStyle = color
    pincel.beginPath()
    pincel.moveTo(205,45)
    pincel.lineTo(205,30)
    pincel.stroke()
}

function cabezaAdentro(){
    var color = "#E5E5E5";
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(205, 55, 9, 0, 2*Math.PI);
    pincel.fill();
}

function cabeza(){
    pincel.lineWidth = 5;
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(205, 55, 11, 0, 2*Math.PI);
    pincel.closePath();
    pincel.fill();
   // cabezaAdentro()
    }

function torso(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = color
    pincel.beginPath()
    pincel.moveTo(205,65)
    pincel.lineTo(205,100)
    pincel.stroke()
}

function brazoDer(){
    pincel.lineWidth = 2;
    pincel.strokeStyle = color
    pincel.beginPath()
    pincel.moveTo(205,65)
    pincel.lineTo(180,78)
    pincel.stroke()
}

function brazoIzq(){
    pincel.lineWidth = 2;
    pincel.strokeStyle = color
    pincel.beginPath()
    pincel.moveTo(205,65)
    pincel.lineTo(233,78)
    pincel.stroke()
}

function pieIzq(){
    pincel.lineWidth = 2;
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.moveTo(205,100);
    pincel.lineTo(180,114);
    pincel.stroke()
}

function pieDer(){
    pincel.lineWidth = 2;
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.moveTo(205,100);
    pincel.lineTo(230,114);
    pincel.stroke()
}

function crearAhorcado(opcion){
    var pincel = document.getElementById("canvas").getContext("2d");
    pincel.fillStyle = "#E5E5E5";

    switch (opcion) {
        
    case 1:palo();break;
    case 2:palo1();break;
    case 3:soga();break;
    case 4:cabeza();break;
    case 5:torso();break;
    case 6:brazoDer();break;
    case 7:brazoIzq();break;
    case 8:pieIzq();break;
    case 9:pieDer();break;
 }
}
 




