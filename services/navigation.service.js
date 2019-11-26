import firebase from "../Firebase";

class NavigationService {
    goHome(navigation) {
        let user = firebase.auth().currentUser;

        if(user)
          navigation.navigate("Home", {currentUser: user});
        else
          navigation.navigate("Home", {currentUser: null});
    }
}

export default NavigationService;
