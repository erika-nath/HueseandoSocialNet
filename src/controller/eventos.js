    const getEmail = document.getElementById('signupemail');//signUP
      const getPassword = document.getElementById('signuppassword');//signUP
      const btnSignUp = document.getElementById('buttonSignup');//signUP
      
      btnLogin.addEventListener('submit', e =>{
        const loginEmail = email.value;
        const loginPassword = password.value;
      const auth = firebase.auth();
      
      const promise = auth.signInWithEmailAndPassword(loginEmail,loginPassword );
      promise.catch(e => console.log(e.message));
      
      }); //finaliza funcion para login
      
      //inicia funcion para el signup
      btnSignUp.addEventListener('submit',e =>{
        const email = getEmail.value;
        const password = getPassword.value;
        const auth = firebase.auth();

        const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
        promise.catch(e=>console.log(e.message));
    });
       


}());




//Objeto que se va a utilizar para firebase
const userSignUp = {
    const email = getEmail.value,
    const password = getPassword.value

};
