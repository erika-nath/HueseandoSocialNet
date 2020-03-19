export default () => {
    const viewLogin = `
    <form id ="formlogin">
    <img src="../img/Logo.png">
    <h2> Login </h2>
    <label for="nombre">ingrese su nombre:</label>
    <input id="email" type="text" placeholder ="Escribe tu correo">
    <input id="password" type="text" placeholder ="Escribe tu contraseña">
    <input id="buttonLogin" class="buttonLogin" type="submit" value="intro">
    <br>    <br>

    <a href="#/sign-up">sign-up</a>.
    </form>

    `
    const divElement1 = document.createElement('div');
    divElement1.innerHTML = viewLogin;
    
    return divElement1;
    };