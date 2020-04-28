readPost: () => {
    firebase.firestore().collection("post").onSnapshot((querySnapshot) => {
      const tabla = document.getElementById("tabla");
      let rowsTamplate = document.createElement('tbody');
      tabla.innerHTML = '';
      let userUid = firebase.auth().currentUser.uid;
      //llamar a funcion observador y a controlador la funcion de observador,en la callback user,

      querySnapshot.forEach((doc) => {
        ///console.log(`${doc.id}=>${doc.data().first}`);
        //UserId comparar con el user del obsevador uid
        //If si doc.userId == user.uid  pintar 
        const tr = document.createElement('tr');

        tr.innerHTML += `
          <td scope='col'>${doc.id}</td>
          <td scope='col'>${doc.data().task}</td>
          <td scope='col'>${doc.data().description}</td>
          <td class="actions__btn">
            
          </td>`

        if (userUid === doc.data().id) {
          //<button data-id="${doc.id}">Eliminar</button> 
          //<button id="btnEdit">Editar</button>
          //aqui agreagmos los botones con eventos
          let delt = tr.querySelector("button[data-id='" + doc.id + "']");
          console.log(delt);
          delt.addEventListener('click', (e) => {
            console.log(e.target.dataset.id)
            model.userModel.delete(e.target.dataset.id)
              .then(function () {
                console.log("Document successfully deleted!");
              }).catch(function (error) {
                console.error("Error removing document: ", error);
              });
          })
        }
        /* let eliminar= document.createElement("button");//boton no borrar
eliminar.setAttribute("id","btnEliminar");
eliminar.setAttribute("type","button");

tabla.appendChild(eliminar);
*/


        rowsTamplate.appendChild(tr);

      })//no borrar
      tabla.appendChild(rowsTamplate)
    })//no borrar
  },//no borrar
} //no borra initTODO ARRIBA
}; //no borrar object view1TODO ARRIBA


