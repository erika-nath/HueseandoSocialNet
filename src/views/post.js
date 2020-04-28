export default(user) =>{
let viewPublish = document.createElement("div");
let description = document.createElement("input");
description.setAttribute("type","text");
description.setAttribute("id","description");
description.setAttribute("placeholder","task");
let muro= document.createElement("table");
muro.setAttribute("id" ,"tabla");
let tbodyE = document.createElement("tbody");
tbodyE.setAttribute("id", "tbodyPost");
muro.appendChild(tbodyE);
let comment=document.createElement("textarea");
comment.setAttribute("id","task");
comment.setAttribute("placeholder","insert description");
let send= document.createElement("input");//boton no borrar
send.setAttribute("id","buttonSend");
send.setAttribute("type","button");
send.setAttribute("value","enviar");

viewPublish.appendChild(description);

viewPublish.appendChild(comment);
viewPublish.appendChild(send);//boton no borrar
viewPublish.appendChild(muro);//tavla no borrar
//////NO BORRAR NADA DE ARRIBA 



return viewPublish;


};