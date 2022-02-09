'use strict'

//Variáveis
const lampada = document.getElementById('lampada')
const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const piscar = document.getElementById('piscar')
let idPiscar = null


//Funções para ligar, desligar e quebrar lâmpada
const lampadaQuebrada = () => {
    return lampada.src.includes('quebrada')
}

const ligarLampada = () =>{ 
    if(!lampadaQuebrada())
        lampada.src = './img/ligada.jpg'
}

const desligarLampada = () =>{ 
    if(!lampadaQuebrada())
        lampada.src = './img/desligada.jpg'
}

const quebrarLampada = () => lampada.src = './img/quebrada.jpg'

const lampadaDesligada = () =>{
    return lampada.src.includes('desligada')
}
const ligarDesligar = () =>{
    if (lampadaDesligada())
        ligarLampada()
    else
        desligarLampada()
    
}

const piscarLampada = () => {
    if(idPiscar == null){
        //Pegando o intervalo para chamar entre funções
        idPiscar = setInterval(ligarDesligar, 500)
        piscar.textContent = 'Parar'
    }else{
        clearInterval(idPiscar)
        piscar.textContent = 'Piscar'
        idPiscar = null
    }
}



//Evento para ligar, desligar e quebrar a lâmpada
ligar.addEventListener('click', ligarLampada)
desligar.addEventListener('click', desligarLampada)
lampada.addEventListener('dblclick', quebrarLampada)
piscar.addEventListener('click', piscarLampada)