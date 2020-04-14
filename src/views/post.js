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
let contenido = document.createElement("div");
let tabla= document.createElement("table");
tabla.setAttribute("id" ,"tabla");
console.log(tabla);

let send= document.createElement("button");//boton no borrar
contenido.appendChild(send);//boton no borrar
contenido.appendChild(tabla);


return contenido;



};