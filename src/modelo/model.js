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


//contentPost


const userModel = {

    createEmailAndPassword: (userData) => {
      const promiseAuth = firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password);
      return promiseAuth;
    },
    

 loginUser:(loginData)=>{
    const promiseLogin = firebase.auth().signInWithEmailAndPassword(loginData.emailLogin, loginData.passwordLogin);
    return promiseLogin;
    
  },


  getPost: (contentPost) => {
    const promisePost = firebase.firestore().collection("post").add(contentPost);
    return promisePost;
 },

 delete:(id)=>{
  const promiseDlt=firebase.firestore().collection("post").doc(id).delete();
  return promiseDlt;
 },

 



}   //fin de modelo  no borrar



export default {
  userModel: userModel,

}
          
      