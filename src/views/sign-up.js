

export default () => {
    const viewHome = `<h1> que hay </h1>
    <img src="../Logo.png">
    <a href="#/Login">Login</a>`;
    
    const divElement = document.createElement('div');
    divElement.innerHTML = viewHome;
    return divElement;
    
    };
    