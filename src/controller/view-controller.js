import { components, userInterface } from '../views/components.js'
//objeto controlador de vistas
export const viewController = {
  changeView: (router) => {
    //router == ''
    const container = document.getElementById('container');
    container.innerHTML = '';

    switch (router) {
      case '':
        container.appendChild(components.login());
        userInterface.init.login();

        break;
      case '#/sign-up':
        container.appendChild(components.signUp())
        userInterface.init.signup();
        break;

      case '#/login':
        container.appendChild(components.login())
        userInterface.init.login();

        break;

      case '#/post':
        container.appendChild(components.post())
        userInterface.init.post();
        break;

      default:
        break;
    }
  },
  //propiedad init ejeccuta vistas

  init: {

    signup: () => userInterface.init.signup(),
    login: () => userInterface.init.login(),
    post: () => userInterface.init.post(),

  },


  authEmailAndPassword: (obj) => {
    modelo.authEmailAndPassword(obj);
  },

  loginEmailAndPassword: (obj) => {
    modelo.loginEmailAndPassword(obj);
  },


};//fin de obj view controller


