export default () => {
    const viewLogin = `
    <form id ="formlogin">
    <img src="../img/Logo.png">
    <h2> Login </h2>
    <label for="nombre">ingrese su nombre:</label>
    <input id="email" type="text" placeholder ="Escribe tu correo">
    <input type="password"  id="password" type="text" placeholder ="Escribe tu contraseña">
    <input id="buttonLogin" class="buttonLogin" type="button" value="intro">
    <br>    <br>

    <a href="#/sign-up">sign-up</a>.
    </form>

    `;
    
    const divLogin = document.createElement('div');
    divLogin.innerHTML = viewLogin;
    
    return divLogin;
    };