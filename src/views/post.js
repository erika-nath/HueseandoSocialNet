export default(user) =>{
  //console.log(user.email);
/*
 const viewPost = 
 
 `
 <h1> pagina de post</h1>
 <div id:user>   </div>
 <input type="text" id="description" placeholder="insert name task" >
 <textarea placeholder="insert description" id="task" ></textarea>
 <input id="buttonSend" class="buttonSend" type="button" value="enviar">
 <table id="tabla" class="table">
 <thead>
 <tr>
 <th scope='col'>ID</th>
 <th scope='col'>email</th>
 <th scope='col'>task</th>
 </tr>
 </thead>
 </table>
 
 `;

  = document.createElement('div');
 */



let viewPublish = document.createElement("div");
let description = document.createElement("input");
description.setAttribute("type","text");
description.setAttribute("id","description");
description.setAttribute("placeholder","task");
let muro= document.createElement("table");
muro.setAttribute("id" ,"tabla");
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