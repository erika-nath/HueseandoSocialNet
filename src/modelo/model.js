//Firebase


(function(){
    const firebaseConfig = {
        apiKey: "AIzaSyBzfIF1sOh9gu2K2ueLTahZiqj0IbOPKeE",
        authDomain: "hueseando-e10e6.firebaseapp.com",
        databaseURL: "https://hueseando-e10e6.firebaseio.com",
        projectId: "hueseando-e10e6",
        storageBucket: "hueseando-e10e6.appspot.com",
        messagingSenderId: "24093363529",
        appId: "1:24093363529:web:7cb3b10629b41c8919de98"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
      const getEmail = document.getElementById('signupemail');
      const getPassword = document.getElementById('signuppassword');
      const btnSignUp = document.getElementById('buttonSignup');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const btnLogin = document.getElementById('buttonLogin');

      
      
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








//signupName
//signupemail
//signuppassword
//submitSignup boton que envia*/
