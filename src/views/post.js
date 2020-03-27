export default() =>{
 const viewPost = `
 <h1> pagina de post</h1>


    <textarea>Que estas pensando?</textarea>

 
 `;

 const divPost = document.createElement('div');
 divPost.innerHTML = viewPost;
 
 return divPost;
};