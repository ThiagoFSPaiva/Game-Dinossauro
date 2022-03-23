const dino = document.querySelector(".dino");
const background = document.querySelector('.background');
let pulando = false;
let position = 0;

function pressionarTecla(evento){   // a função vai receber um evento.

    //se evento for igual a espaço
    if(evento.keyCode === 32){   // codigo da tecla espaço é 32.
        if (!pulando){
        pular();
    }
    //imprima "pressionou espaço"

        console.log('pressionou espaço');


    }

}

function pular(){

    
    pulando = true;
    
    let invervaloPulo = setInterval ( () => {
        
        if(position >= 150){
            
            clearInterval(invervaloPulo);
            
           
            //descendo
            let invervaloDown = setInterval (()=>{

                if( position <= 0){
                    clearInterval(invervaloDown)
                    pulando = false;


                }else{

                position -= 20;
                dino.style.bottom = position + "px";

                }

            },30)
        }else{

        // Sobe
        position += 20;
        console.log(position)
        dino.style.bottom = position + "px";

        }


    },20)

   
}

function CriarObstaculo(){

    const obstaculo = document.createElement('div');
    let positionObstaculo = 1000;
    let aleatorio = Math.random() * 6000

    obstaculo.classList.add('obstaculo');
    obstaculo.style.left = 1000 + 'px';
    background.appendChild(obstaculo)

    let intervaloleft= setInterval(() => {


        if(obstaculo < -60){
            clearInterval(intervaloleft)
            background.removeChild(obstaculo);

        }else if(positionObstaculo > 0 && positionObstaculo < 60 && position < 60){
            positionObstaculo -= 10
            obstaculo.style.left = positionObstaculo + 'px'

            clearInterval(intervaloleft)
            document.body.innerHTML = "<h1> Fim de JOGO </h1>"

        }else{
            positionObstaculo -= 10;

            obstaculo.style.left = positionObstaculo + 'px';
        }


    },20)
    
    setTimeout(CriarObstaculo, aleatorio)

}
CriarObstaculo();

document.addEventListener('keyup',pressionarTecla)