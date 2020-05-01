export default(user) =>{
  let viewPublish = document.createElement("div");
  let description = document.createElement("input");
  let tbodyE = document.createElement("tbody");
  let muro= document.createElement("table");
  let comment=document.createElement("textarea");
  let send= document.createElement("input");//boton no borrar
  
  description.setAttribute("type","text");
  description.setAttribute("id","description");
  description.setAttribute("placeholder","task");

  tbodyE.setAttribute("id", "tbodyPost");
  
  muro.setAttribute("id" ,"tabla");
  muro.appendChild(tbodyE);

  comment.setAttribute("id","task");
  comment.setAttribute("placeholder","insert description");
  
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