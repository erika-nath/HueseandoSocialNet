
import { components } from '../views/components.js'
import { view1 } from '../views/components.js'


//objeto controller (router de vistas)
//changeView se convierte en una propiedad
export const viewController = {
changeView: (router) => {
    const container = document.getElementById('container');
        container.innerHTML = '';

switch(router){
case '':
container.appendChild(components.login());
break;
case '#/sign-up':
container.appendChild(components.signUp())
view1.init.signup(); 
break ;

case '#/login' :
container.appendChild(components.login()) 

break ;

default:
break;
}
}
}
