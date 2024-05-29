const container= document.querySelector('.container')

function obtenerTemperatura(){
    let temperaturaCelsius= parseFloat(prompt("ingrese la temperatura en grados Celsius"));

    if(!isNaN(temperaturaCelsius)){
        mostrar(convertidorDeTemperatura(temperaturaCelsius), convertidorDeTemperaturaAKelvin(temperaturaCelsius))
    }else{
        container.innerHTML=`<h1>La temperatura no es un numero </h1>`
    }


}

obtenerTemperatura();


function convertidorDeTemperatura(temperaturaEnCelsius){


        let temperaturaFarenheit= (temperaturaEnCelsius*9)/5 +32;
        return temperaturaFarenheit;
   
    

    
}
// console.log(typeof temperaturaCelsius);

// convertidorDeTemperatura(temperaturaCelsius);
function convertidorDeTemperaturaAKelvin(temperaturaEnCelsius){

       
            let temperaturaKelvin=temperaturaEnCelsius+273.15;
            return temperaturaKelvin;
       

}
// convertidorDeTemperatura(temperaturaCelsius);

function mostrar(farenheit, kelvin){

   container.innerHTML+=`<h1>La temperatura en grados farenheit  es:${farenheit} </h1>
   <h1>La temperatura en grados kelvin  es:${kelvin} </h1>`
   

}

