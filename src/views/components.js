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
          task: document.getElementById('task').value,
          
        }
        

        model.userModel.getPost(contentPost)

          .then(function (docRef) {
           console.log("Document written with ID: ", docRef.id);
           console.log("Document written with ID: ",currentUser.uid);
          // console.log("Document written with ID: ",docRef.uid);

           document.getElementById('description').value = '';
            document.getElementById('task').value = '';
      
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });

      });//fin de send

    },//fin de post

    readPost:()=>{
      firebase.firestore().collection("post").onSnapshot((querySnapshot)=>{
        const tabla = document.getElementById("tabla");
        let rowsTamplate = document.createElement('tbody');
        tabla.innerHTML='';
        querySnapshot.forEach((doc)=>{
          ///console.log(`${doc.id}=>${doc.data().first}`);
          const tr = document.createElement('tr');

          tr.innerHTML += `
            <td scope='col'>${doc.id}</td>
            <td scope='col'>${doc.data().task}</td>
            <td scope='col'>${doc.data().description}</td>
            <td><button data-id="${doc.id}">Eliminar</button></td>
            <td><button id="btnEdit">Editar</button></td>`

     let delt = tr.querySelector("button[data-id='"+doc.id+"']");
     console.log(delt);
     delt.addEventListener('click', (e) => {
       console.log(e.target.dataset.id)
       model.userModel.delete(e.target.dataset.id)
      .then(function() {
        console.log("Document successfully deleted!");
      }).catch(function(error) {
        console.error("Error removing document: ", error);
      });
     } )
      rowsTamplate.appendChild(tr);

        })//no borrar
        tabla.appendChild(rowsTamplate)
        })//no borrar
      },//no borrar

      


              } //no borra initTODO ARRIBA
      }; //no borrar object view1TODO ARRIBA

/*
      */

