
function gamme(){

    var uno = document.getElementById('botonOn');

        if (uno.innerHTML == 'off') 
            uno.innerHTML = 'on';
        else{
            var max = 100;
            var min = 1;
            var numerom = Math.random()*(max-min) + min;
            numerom = parseInt(numerom);
            while(true){ 
                var usuario = prompt("COLOCA EL NUMERO QUE ESTAS PENSANDO"); 

                if(usuario == numerom){ 
                alert("He adivinado tu número");
                break;
                }

                else if (usuario > max){
                    alert("El número es mayor a 100, intenta de nuevo");
                break;
                }

                else if (usuario == 0){
                    alert("Hasta luego");
                break;
                }

                else if (usuario > numerom){

                }
                        
                else if (usuario < numerom){

                }
            }
        }
    }
                        