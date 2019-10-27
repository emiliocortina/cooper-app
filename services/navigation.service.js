import firebase from "../Firebase";

class NavigationService {
    goHome(props) {
        let user = firebase.auth().currentUser;

        if(user) 
          props.navigation.navigate("Home", {currentUser: user});
        else 
          props.navigation.navigate("Home", {currentUser: null});
    }

    goToProfile(props) {
      let user = firebase.auth().currentUser;

      if(user) 
        props.navigation.navigate("ProfilePage", {currentUser: user});
      else 
        props.navigation.navigate("Login", {currentUser: null});
    }
}

export default NavigationService;