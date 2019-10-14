import firebase from '../../../Firebase';

class HomeModel {
    logout()  {
        firebase.auth().signOut().then(function () {
            console.log("User signed out");
          }).catch(function (error) {
            alert("Could not sign out " + error);
          });
    }
}

export default HomeModel;