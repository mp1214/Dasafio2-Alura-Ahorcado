

  
    let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT","HTML","BOOPSTRAP","PYTHON","ANGULAR","PHP","DEVOPS"];
    var pantalla = document.getElementById("canvas1");
    var pantallaLetras= pantalla.getContext("2d");
    const agregar = document.querySelector(".seccion2");
    const juego = document.querySelector(".buttons");
    const inicio = document.querySelector(".seccion1");
    const lienzo = document.querySelector(".seccion3");
    var letrasPermitidas="QWERTYUIOPASDFGHJKLZXCVBNM";
    let p = document.getElementById("contenedor-letras-mal");
    let palabraSecreta ="";
    let arrayAciertos = [];
    let contadorIntentos=0;
    let arraydesaciertos = [];
    var intentosErrados=0;
    let letrasEncontradas="";
    let intentos = 0;
    let ganar=false;
    let palabraArray=[];
    let recibir = false;
    let cont=0;
    let letraspresionadacorrecta=[];
    let letraspresionadaincorrecta=[];
  let incorrecto=0;
 
  

    function iniciarJuego(){
        inicio.style.display="none";
        lienzo.style.display = 'block';
        
       intentos=0;
       recibir = true;
        agregar.style.display="none";
        
        escojerPalabraSecreta()
        crearHorca()
        dibujarlineas()
        arregloPalabra()
        esperarletra()
   
    }

    function comparaLetras(caracter){      
        let countincorrecta = false;
        let countcorrecta = false;
    
        if(letraspresionadacorrecta.length!=0){
            for(var i = 0;i < letraspresionadacorrecta.length; i++){
                if(caracter==letraspresionadacorrecta[i]){
                    countcorrecta = true;
                }
            }
        }
        if(countcorrecta == true)
        {return;}
        else{
            for(var i = 0; i<palabraSecreta.length; i++){
                if(caracter == palabraSecreta[i]){
                    countincorrecta = true;
                    letraspresionadacorrecta.push(caracter);
                    dibujarpalabrasCorrectas(caracter,i);
                    if(letraspresionadacorrecta.length == palabraSecreta.length){
                    
                        alertaGano()
                       
                        recibir = false;
                        return;
                    }
                }
            }
        }
        if(countincorrecta  == false){
            let countaux = false;
            if(letraspresionadaincorrecta.length!=0){
                for(var i = 0; i<letraspresionadaincorrecta.length; i++){
                    if(caracter==letraspresionadaincorrecta[i]){
                        countaux = true;
                       
                    }
                }
                if(countaux == false){
                    dibujarPalabrasIncorrectas(caracter);
                    letraspresionadaincorrecta.push(caracter);
                    crearAhorcado(incorrecto);
                    incorrecto++;
                    if(letraspresionadaincorrecta.length>9){
                        
                        alertaPerdio()
                        recibir = false;
                        return;
                    } 
                }
            }
            else{
                dibujarPalabrasIncorrectas(caracter)
                letraspresionadaincorrecta.push(caracter);
                dibujarpalabrasCorrectas(caracter,i);
                if(countaux==false){
                    crearAhorcado(1);
                }
                crearAhorcado(incorrecto);
                incorrecto++;
            }
        }
    
        countincorrecta = false;
        countcorrecta = false;
    
    
    }
   
   function esperarletra(){
    
        document.addEventListener('keyup', (event) => {
            var keyName = event.key;
            var carac = keyName.toUpperCase();
            var KeyCode = event.keyCode; 
            const pattern = new RegExp('^[A-Z]+$', 'i');
        
            if(KeyCode >= 65 && KeyCode <=90){
                //Imprime la letra presionada
               console.log(KeyCode)
                if(pattern.test(keyName)){
                    if(recibir){
                        comparaLetras(carac);
                    }
                }
            }
          }, false);
    }
   

    function alertar(a){
        
        Swal.fire({
           title: 'Do you want to save the changes?',
           showDenyButton: true,
           showCancelButton: true,
           confirmButtonText: 'Save',
           denyButtonText: `Don't save`,
         }).then((result) => {
           /* Read more about isConfirmed, isDenied below */
           if (result.isConfirmed) {
            palabras.push(a);       
            Swal.fire('Saved!', '', 'success')
           } else if (result.isDenied) {
             Swal.fire('Changes are not saved', '', 'info')
           } 
         }) 
         
        
       } 
       
       function alertaGano(){
        Swal.fire(
            'Buen Trabajo!',
            'Ganaste Felicitaciones!!',
            'success'
          )
}
       
  

    function escojerPalabraSecreta(){
       let palabra = palabras[Math.floor(Math.random()* palabras.length)]
        palabraSecreta=palabra;
        console.log(palabra);
       
        }
       
    
    
    function arregloPalabra(){
        palabraArray=[];
        for (let i= 0; i<palabraSecreta.length; i++) {
          palabraArray[i] = palabraSecreta[i];
           
        }
       
        
    }
    
  /*  function comparaLetras(caracter){
        if(intentos<=10){
            if (palabraSecreta.includes(caracter)){
                letrasEncontradas += caracter;
                for(let i= 0; i<palabraSecreta.length; i++){
                    if(caracter==palabraArray[i]){
                        dibujarpalabrasCorrectas(caracter,i)
                        finDelJuego()
                    }
                }
            } else{
                // dibujarPalabrasIncorrectas(caracter)
                
                  }
        } else{
            finDelJuego()
            }
    }*/
 
    function limpiarLienzo() {
        pincel.clearRect(0, 0, canvas.width, canvas.height);
        pantallaLetras.clearRect(0, 0, canvas1.width, canvas1.height);
        p.innerHTML ="";
        resetearvariables()
     }
     function resetear(){
        palabra = "";
        letraspresionadaincorrecta = [];
        letraspresionadacorrecta = [];
        countglobal = 0;
        recibir = true;
        incorrecto=1;
        pincel.clearRect(0, 0, canvas.width, canvas.height);
        p.innerHTML ="";
        salir()
        
     }
    function resetearvariables(){
        arrayAciertos = [];
        contadorIntentos=0;
        arraydesaciertos = [];
        intentosErrados=0;
        letrasEncontradas="";
        intentos=0;
        ganar=false;
        palabraSecreta ="";
        palabraArray=[];
        recibir = false;
        cont=0;

        palabra = "";
        letraspresionadaincorrecta = [];
        letraspresionadacorrecta = [];
        countglobal = 0;
        recibir = true;
        incorrecto=1;
      
       iniciarJuego()
       
   }

    function finDelJuego() {
        if(comprobarTodasLasLetras(letrasEncontradas,palabraSecreta)){
            ganar=true;
            recibir = false;
            alertaGano();

        }
        if(intentosErrados==10 && ganar==false){
            alertaPerdio()
            recibir = false;
        } 
    }
    function alertaPerdio(){
        Swal.fire({
            title: 'Oops Perdiste...',
            text: "Puedes intentarlo de nuevo!",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, jugar otra vez!'
          }).then((result) => {
            if (result.isConfirmed) {
                limpiarLienzo()
               
              Swal.fire(
                'Buenisimo!',
                'A jugar otra vez...',
                'success'
               
              ) ;
             
             
              
            } 
           else{ resetear()
           }
          })
         
         
        }
/*function comparaLetras(caracter){
   
    if(contadorIntentos<9){

        contadorIntentos++;

      for(let i= 0; i<palabraSecreta.length; i++){
        
        if(caracter== palabraArray[i]){
            dibujarpalabrasCorrectas(caracter,i)
           
            arrayAciertos[i] = caracter;
        }else{
            arraydesaciertos[i]=caracter;
            console.log(caracter)
            dibujarPalabrasIncorrectas(caracter)
            
           
          /*  crearAhorcado(contadorIntentos);*/
          /*  letrasErradas.push(caracter);*/
           /* console.log(letrasErradas);
        }
    }
 } else{
        alert("El juego termino! maxima cantidad de intentos");
    }

}*/


    function dibujarlineas(){
        pantalla.width=pantalla.width;
        
        pantallaLetras.linewhidth = 6;
        pantallaLetras.lineCap = "round"
        pantallaLetras.lineJoin="round";
        pantallaLetras.fillStyle= "#FFFFFF";
        pantallaLetras.strokeStyle= "#FFFFFF";  
     
        let anchura = 250/palabraSecreta.length;
        for(let i=0; i< palabraSecreta.length; i++){
            pantallaLetras.moveTo(50+ (anchura*i),40)
            pantallaLetras.lineTo(70+ (anchura*i),40)
        }
        pantallaLetras.stroke();
        pantallaLetras.closePath();
     }   
     
     function dibujarpalabrasCorrectas(caracter,i){
        
       
        pantallaLetras.linewhidth = 6;
        pantallaLetras.fillStyle= "#0A3871";
        pantallaLetras.strokeStyle= "#0A3871";  
     
        let anchura = 250/palabraSecreta.length;
            pantallaLetras.font="italic small-caps bold 15px arial"      
            pantallaLetras.fillText(caracter,(anchura*i)+55,35);
            pantallaLetras.strokeText(caracter,(anchura*i)+55,35);
        
       
       
     }
     function dibujarPalabrasIncorrectas(caracter){
       // intentosErrados++;

        let p = document.getElementById("contenedor-letras-mal");
        p.innerHTML += caracter;
      
        crearAhorcado(incorrecto);//intentosErrados);
        if(/*intentosErrados*/incorrecto==10 && ganar==false){
            alertaPerdio()
            recibir = false;
        }
        
     }
     

function comprobarTodasLasLetras(l,palabra){
    for(let i = 0; i <palabra.length;i++){
        if(!l.includes(palabra[i])){
            return false;
        }
    }
    return true;
}
function agregarPalabra(){
  
    juego.style.display="none";
    recibir = false;
    agregar.style.display="block";
}
    async function  guardarPalabra(){
        let a = document.querySelector(".textarea").value;
        a = a.toUpperCase();
        
        if(a != "" && !palabras.includes(a) && comprobarTodasLasLetras(letrasPermitidas,a)){
            alertar(a)
            
            iniciarJuego();
           
        }else{
            alert("No es posible guardar en blanco, repeticiones, números o caracteres especiales incluido Ñ");
        }
        document.getElementById('area').value = '';
        
    }



function salir(){
    juego.style.display="block"
    inicio.style.display="block";
    agregar.style.display="none";
    lienzo.style.display = "none";
}
    