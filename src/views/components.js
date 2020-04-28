import signUp from './sign-up.js';
import login from './login.js';
import post from './post.js';
import model from '../modelo/model.js';

export const components = {
  signUp: signUp,
  login: login,
  post: post,
};
export const userInterface = {
  init: {
    signup: () => {
      const btnSignUp = document.getElementById('buttonSignup');

      btnSignUp.addEventListener('click', (e) => {
        e.preventDefault();

        let userData = {
          name: document.getElementById('signupName').value,
          email: document.getElementById('signupemail').value,
          password: document.getElementById('signuppassword').value
        }
        console.log(userData);
        if (userData.email !== '' && userData.password !== '' && userData.password.length >= 6) {
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
      });
    },

    login: () => {
      const btnLogin = document.getElementById('buttonLogin');
      btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        let loginData = {
          emailLogin: document.getElementById('email').value,
          passwordLogin: document.getElementById('password').value
        }
        model.userModel.loginUser(loginData)
          .then((data) => {
            window.location.hash = '#/post';
          })
          .catch((err) => {
            alert('There was an error')
          });
      });
    },

    post: () => {
      const btnSend = document.getElementById('buttonSend');
      btnSend.addEventListener('click', (e) => {
        e.preventDefault();
        //objeto con contenido post
        let contentPost = {
          description: document.getElementById('description').value,
          task: document.getElementById('task').value,
          userId: firebase.auth().currentUser.uid
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
      });
    },

    readPost: () => {
      firebase.firestore().collection("post").onSnapshot((querySnapshot) => {
        console.log(querySnapshot.size);

        const tbodyPost = document.getElementById("tbodyPost");
        //let rowsTamplate = document.createElement('tbody');
        tbodyPost.innerHTML = " ";
        querySnapshot.forEach((doc) => {
          console.log(doc.data());

          const tr = document.createElement('tr');
          tr.innerHTML += `
            <td scope='col'>${doc.id}</td>
            <td scope='col'>${doc.data().task}</td>
            <td scope='col'>${doc.data().description}</td>
            
          `
          if (firebase.auth().currentUser.uid === doc.data().userId) {
            let delt = document.createElement("button");//boton no borrar
            delt.setAttribute("id", "btnEliminar");
            delt.setAttribute("type", "button");
            delt.innerText = "eliminar";
            tr.appendChild(delt);

            delt.addEventListener('click', (e) => {
              model.userModel.delete(doc.id)
                .then(function () {
                  console.log("Document successfully deleted!");
                }).catch(function (error) {
                  console.error("Error removing document: ", error);
                });
            })
            //editar
            let edit = document.createElement("button");
            edit.setAttribute("id", "btnEdit");
            edit.setAttribute("type", "button");
            edit.innerHTML = "editar";
            tr.appendChild(edit)

            edit.addEventListener('click', (e) => {
              console.log("si funciona");
              
              document.getElementById('description').value = doc.data().description
              document.getElementById('task').value = doc.data().task

              return 
              model.userModel.edit(doc.id)

              //que no guarde un nuevo post que edite y darle la funcion con una condicion a enviar
              //para que edite llamar otra vez a el boton
                .then(function () {
                console.log("Document successfully updated!");
                const tr = document.createElement('tr');
                tr.innerHTML += `
            <td scope='col'>${doc.id}</td>
            <td scope='col'>${doc.data().task}</td>
            <td scope='col'>${doc.data().description}</td>
            `
              }).catch(function (error) {
                console.error("Error updating document: ", error);
              });
          })
      }
          tbodyPost.appendChild(tr);
      //tabla.appendChild(rowsTamplate)
    })//no borrar
  });//no borra
    }//no borra initTODO ARRIBA
  } //no borrar object view1TODO ARRIBA
};



