const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');



const anoNovo = "1 Jan 2022"; 

function contagem() {
    const anoNovoData = new Date(anoNovo);
    const dataAtual = new Date();

    const segundosTotais = (anoNovoData - dataAtual) / 1000;

    const dias = Math.floor(segundosTotais / 3600 / 24);
    const horas = Math.floor(segundosTotais / 3600) % 24;  
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const segundos = Math.floor(segundosTotais % 60)

    diasEl.innerHTML = dias 
    horasEl.innerHTML = formatarTempo(horas);
    minutosEl.innerHTML = formatarTempo(minutos); 
    segundosEl.innerHTML = formatarTempo(segundos);
}

function formatarTempo (time){
    return time < 10 ? (`0${time}`) : time;
}

// chamando o inicio

contagem();

setInterval(contagem, 1000)



