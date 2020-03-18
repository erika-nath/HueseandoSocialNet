export default () => {
    const viewLogin = `
    <div class="form">
    <img src="../img/Logo.png">
    <h2> Login </h2>
    <label for="nombre">ingrese su nombre:</label>
    <input id="email" type="text" placeholder ="Escribe tu correo">
    <input id="password" type="text" placeholder ="Escribe tu contraseña">
    <input class="button" type="submit" value="sign-up">
    `
    const divElement1 = document.createElement('div');
    divElement1.innerHTML = viewLogin;
    
    return divElement1;
    };