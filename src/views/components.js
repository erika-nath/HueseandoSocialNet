
import signUp from './sign-up.js' ;
import login from './login.js';
import model from '../modelo/model.js'
//objeto con las vistas 


export const components = {
    signUp: signUp ,
    login: login
    
};


export const view1 = {
    init:{
      signup: () => {
        const btnSignUp = document.getElementById('buttonSignup'); //signUP
        console.log(btnSignUp);
        
        btnSignUp.addEventListener('click', (e) => {
          e.preventDefault();
          console.log("Hola desde signup");
          
          let userData = {
            name: document.getElementById('signupName').value,
            email: document.getElementById('signupemail').value,
            password: document.getElementById('signuppassword').value
          }
          console.log(userData);
          //view1.authEmailAndPassword(userData);
        if(userData.email !== '' && userData.password !== '' && userData.password.length >= 6) {
         // view1.detecthash("/login");
                  model.userModel.createEmailAndPassword(userData)
                  .then((data) => {
                      console.log(data);
                      window.location.hash = '/login';
                  })
                  .catch((err) =>{
                    console.log(err);
                    alert('There was an error')
                  });
                  

        } else {
          alert("Debes de llenar los campos")
        }
          //window.location.hash = '/login';

      });
     
    }

  }


};
