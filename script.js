const hour = document.querySelector(".hour"); //seleciona a classe hour
const min = document.querySelector(".min"); //seleciona a classe min
const sec = document.querySelector(".sec"); //seleciona a classe sec

function getTime() { //função getTime
    const time = new Date(); //cria uma nova data

    const getHourRot = (360 / 12) * time.getHours(); //calcula a rotação da hora
    const getMinRot = (360 / 60) * time.getMinutes(); //calcula a rotação do minuto
    const getSecRot = (360 / 60) * time.getSeconds(); //calcula a rotação do segundo

    hour.style.transform = `rotate(${getHourRot}deg)`; //aplica a rotação da hora
    min.style.transform = `rotate(${getMinRot}deg)`; //aplica a rotação do minuto
    sec.style.transform = `rotate(${getSecRot}deg)`; //aplica a rotação do segundo
}

setInterval(() => { //atualiza o tempo a cada segundo
    getTime(); //chama a função getTime
}, 1000); //tempo de atualização

getTime(); //chama a função getTime