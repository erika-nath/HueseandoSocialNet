

export default () => {
    const viewSigUp = `
    <h1>  SIGN-UP</h1>
    <form id ="formSignUp">
    <img src="../img/Logo.png">
    <br><br>
    <label for="signupname">Ingrese su nombre:</label> 
    <input id="signupName" type="text" placeholder ="Escribe tu nombre"> <br><br>
    <label for="signupemail">Ingrese su correo:</label> 
    <input id="signupemail" type="text" placeholder ="Escribe tu correo"> <br><br>
    <label for="signuppassword">Ingrese su password:</label>
     <input id="signuppassword" type="text" placeholder ="Escribe tu password">
    <br>     <br>
    <input id="buttonSignup" class="buttonSignup" type="button" value="registrarte">
    </form>
    
  `;

  
  const divElement = document.createElement('div');
    divElement.innerHTML = viewSigUp;

  const btnSignUp = divElement.querySelector('#buttonSignup');//signUP
  btnSignUp.addEventListener('click',(e)=>{
    const userData = {
      name: document.getElementById('signupName').value,
      email:document.getElementById('signupemail').value,
      password:document.getElementById('signuppassword').value

    }
    console.log(userData);
    
    window.location.hash = '/login';
    // 1.- Obtener la data de los inputs
    // 2.- Guardar los datos(model)
    // 3.- Redireccionar, Si no los guardo tenemos que mostrara un mensaje
  });


    return divElement;
    
    };
    