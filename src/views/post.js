export default() =>{
 const viewPost = `
 <h1> pagina de post</h1>

 <input type="text" id="description" placeholder="insert name task" >

 <textarea placeholder="insert description" id="task" ></textarea>
 <input id="buttonSend" class="buttonSend" type="button" value="enviar">


 
 `;

 const divPost = document.createElement('div');
 divPost.innerHTML = viewPost;
 
 return divPost;
};