const areaRespuesta= document.getElementById("respuesta")
const imagen = document.getElementById("imagenchatbot")

function decirHola(){
    areaRespuesta.value= "Hola!,Me alegra saludarte";
    imagen.src = "./img/chatbot/saludo.jpeg";

}

function comoEstas(){
    areaRespuesta.value=" Estoy bien,funcionando correctamente y listo para trabajar";
    imagen.src = "./img/chatbot/saludo2.jpeg";
}

function comoTeSientes(){
    areaRespuesta.value="Mesiento de maravilla ycon ganasde aprenderbiologia";
    imagen.src = "./img/chatbot/saludo3.jpeg";
}
