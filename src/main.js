import { viewController } from './controller/view-controller.js';
//funcion inicializa cambio de ruta al recargarse

const init = () => {
  viewController.changeView(window.location.hash) // window.location.hash == ''
  window.addEventListener('hashchange',() => viewController.changeView(window.location.hash));
}

window.addEventListener('load',init);
