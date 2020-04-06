export default(user) =>{
  //console.log(user.email);

 const viewPost = `
 <h1> pagina de post</h1>

 <input type="text" id="description" placeholder="insert name task" >

 <textarea placeholder="insert description" id="task" ></textarea>
 <input id="buttonSend" class="buttonSend" type="button" value="enviar">
 <table id="tabla" class="table">
 <thead>
 <tr>
 <th scope='col'>ID</th>
 <th scope='col'>name</th>
 <th scope='col'>task</th>
 </tr>
 </thead>
 </table>
 
 `;

 const divPost = document.createElement('div');
 divPost.innerHTML = viewPost;
 
 return divPost;
};