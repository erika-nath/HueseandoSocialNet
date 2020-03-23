
import signUp from './sign-up.js' ;
import login from './login.js';

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
          //window.location.hash = '/login';

      });
     
    }

  }


};
