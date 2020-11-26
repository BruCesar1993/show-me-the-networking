let target_date = new Date("november 26, 2020").getTime();
let dias, horas, minutos, segundos;
let regressiva = document.getElementById("regressiva");

setInterval(function () {

    let current_date = new Date().getTime();
    let segundos_f = (target_date - current_date) / 1000;

    dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400 ;
    
    horas = parseInt(segundos_f  / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').innerHTML = dias;
    document.getElementById('hora').innerHTML = horas ;
    document.getElementById('minuto').innerHTML = minutos;
    document.getElementById('segundo').innerHTML = segundos;

    let hora = new Date
    let dia = hora.getDate()
    console.log(dia)

    if(dia == 26 && segundos > 0){
           
        target_date = new Date("november 27, 2020").getTime();
        document.getElementById('dia').innerHTML = 0;
        document.getElementById('hora').innerHTML = horas -4 ;
        document.getElementById('minuto').innerHTML = minutos ;
        document.getElementById('segundo').innerHTML = segundos 

 }else{

        document.getElementById('dia').innerHTML = 0;
        document.getElementById('hora').innerHTML = 0 ;
        document.getElementById('minuto').innerHTML = 0;
        document.getElementById('segundo').innerHTML = 0;

    }


}, 1000);




function abrir(){
    document.getElementById('modal').style.display = 'block';
}

function fechar(){
    document.getElementById('modal').style.display = 'none'
}


function Habilitar() {
   
      document.getElementById('mc-embedded-subscribe').disabled = ""
      
  }
  
 