var firebaseConfig = {
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

const userModel = {
    createEmailAndPassword: (userData) => {
      const promiseAuth = firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password);
      return promiseAuth;
    },
    

 loginUser:(loginData)=>{
    const promiseLogin = firebase.auth().signInWithEmailAndPassword(loginData.email, loginDatapassword);
    return promiseLogin;
    
  },

}   //fin de modelo  no borrar

export default {
  userModel: userModel,
}
          
        

      
  
      




//signupName
//signupemail
//signuppassword
//submitSignup boton que envia*/
