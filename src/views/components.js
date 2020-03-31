import signUp from './sign-up.js';
import login from './login.js';
import post from './post.js';
import model from '../modelo/model.js';

//vistas
export const components = {
  signUp: signUp,
  login: login,
  post: post,
};

//objeto funcionalidad
export const userInterface = {
  init: {
    signup: () => {
      const btnSignUp = document.getElementById('buttonSignup'); //signUP

      btnSignUp.addEventListener('click', (e) => {
        e.preventDefault();

        let userData = {
          name: document.getElementById('signupName').value,
          email: document.getElementById('signupemail').value,
          password: document.getElementById('signuppassword').value
        }
        console.log(userData);
        if (userData.email !== '' && userData.password !== '' && userData.password.length >= 6) {
          // view1.detecthash("/login");
          model.userModel.createEmailAndPassword(userData)
            .then((data) => {
              console.log(data);
              window.location.hash = '/login';
            })
            .catch((err) => {
              console.log(err);
              alert('There was an error')
            });
        } else {
          alert("Debes de llenar los campos")
        }
      }); //funcion de evento
    }, //fin sigup

    login: () => {

      const btnLogin = document.getElementById('buttonLogin');
      console.log(btnLogin);
      btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("funciona boton");

        let loginData = {
          emailLogin: document.getElementById('email').value,
          passwordLogin: document.getElementById('password').value
        }
        model.userModel.loginUser(loginData)
          .then((data) => {
            console.log(data);
            window.location.hash = '#/post';
          })
          .catch((err) => {
            console.log(err);
            alert('There was an error')
          });


      });//funcion de boton login
    }, //fin object login

    post: () => {
       const btnSend = document.getElementById('buttonSend');
      btnSend.addEventListener('click', (e) => {
        e.preventDefault();
//objeto con contenido post
        let contentPost = {
           description : document.getElementById('description').value,
           task :document.getElementById('task').value
        }
        //renombrando para firestone

        let getPost={
          first: description,
          last: task
        }
      

      model.userModel.getPost(contentPost)

      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });

        
      });//fin de send

    }//fin de post
  } //no borra init
}; //no borrar object view1