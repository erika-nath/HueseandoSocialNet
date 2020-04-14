import { components, userInterface } from '../views/components.js'

//objeto controlador de vistas
export const viewController = {
  changeView: (router) => {
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
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            container.appendChild(components.post(user))
            userInterface.init.post();

           // console.log(user.email);
            console.log(user.email)
            
          } else {
            console.log("no esta registrado");
            window.location.hash = '';
          }
        });
        userInterface.init.readPost();

         

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



};//fin de obj view controller


