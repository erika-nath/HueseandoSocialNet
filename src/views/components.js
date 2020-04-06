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
      btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        let loginData = {
          emailLogin: document.getElementById('email').value,
          passwordLogin: document.getElementById('password').value
        }

////no borrar
        model.userModel.loginUser(loginData)
          .then((data) => {
            window.location.hash = '#/post';
          })
          .catch((err) => {
            alert('There was an error')
          });

      });
  
    }, //fin metodo login NO BORRAR


    post: () => {
      const btnSend = document.getElementById('buttonSend');
      btnSend.addEventListener('click', (e) => {
        e.preventDefault();
        //objeto con contenido post
        let contentPost = {
          description: document.getElementById('description').value,
          task: document.getElementById('task').value
        }

        model.userModel.getPost(contentPost)

          .then(function (docRef) {
           console.log("Document written with ID: ", docRef.id);
           
            document.getElementById('description').value = '';
            document.getElementById('task').value = '';
      
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });

      });//fin de send

    },//fin de post

    readPost:()=>{
//const tabla = document.getElementById("tabla");
firebase.firestore().collection("posts").onSnapshot((querySnapshot)=>{
  const tabla = document.getElementById("tabla");
  tabla.innerHTML='';
  querySnapshot.forEach((doc)=>{
    console.log(`${doc.id}=>${doc.data().first}`);
    tabla.innerHTML += `
    <tr>
 <th scope='col'>${doc.id}</th>
 <th scope='col'>${doc.data().task}</th>
 </tr>
    
    `})
  })
}

//readpost
  } //no borra init
}; //no borrar object view1