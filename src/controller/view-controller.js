import { components, view1 } from '../views/components.js'
//objeto controlador de vistas
export const viewController = {
  changeView: (router) => {
    const container = document.getElementById('container');
        container.innerHTML = '';

  switch(router){
    case '':
      container.appendChild(components.login());
      viewController.init.login(); 

    break;
    case '#/sign-up':
      container.appendChild(components.signUp())
      viewController.init.signup(); 
    break ;

    case '#/login' :
      container.appendChild(components.login()) 
      viewController.init.login(); 

    break ;

    case '#/post' :
      container.appendChild(components.post()) 
      viewController.init.post(); 
    break ;

    default:
    break;
  }
},
//propiedad init ejeccuta vistas

init:{

    signup: () => view1.init.signup(),
    login: () => view1.init.login(),
  post: () => view1.init.post(),

},


  authEmailAndPassword: (obj) => {
    modelo.authEmailAndPassword(obj);
  },

  loginEmailAndPassword: (obj) => {
    modelo.loginEmailAndPassword(obj);
  },


};//fin de obj view controller


