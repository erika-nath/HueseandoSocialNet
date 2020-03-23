export default () => {
  const viewSignUp = `
    <form id ="formSignUp">
    <img src="../img/Logo.png">
    <br><br>
    <label for="signupname">Ingrese su nombre:</label> 
    <input id="signupName" type="text" placeholder ="Escribe tu nombre"> <br><br>
    <label for="signupemail">Ingrese su correo:</label> 
    <input id="signupemail" type="text" placeholder ="Escribe tu correo"> <br><br>
    <label for="signuppassword">Ingrese su password:</label>
     <input type="password" id="signuppassword" type="text" placeholder ="Escribe tu password">
    <br>     <br>
    <input id="buttonSignup" class="buttonSignup" type="button" value="registrarte">
    </form>
    
  `;


  const divElement = document.createElement('div');  
  divElement.innerHTML = viewSignUp;


  return divElement;

};
//ggit