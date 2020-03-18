
import { components } from '../views/components.js'

//objeto controller donde orquesta las vistas por en # y dentro van las funciones de logueo
//changeView se convierte en una propiedad
export const viewController = {
changeView: (router) => {
const container = document.getElementById('container');
container.innerHTML = '';

switch(router){
case '':
container.appendChild(components.login());
break;
case '#/Home':
container.appendChild(components.home()) 
break ;

case '#/login' :
container.appendChild(components.login()) 

break ;

default:
break;
}
}
}
