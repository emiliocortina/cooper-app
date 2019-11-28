import NavigationService from "../../../services/navigation.service";
import firebase from '../../../Firebase';

class HomeModel {
    nav = new NavigationService();

    logout(props)  {
        firebase.auth().signOut().then(() => {
            //this.nav.goHome(props);
        });
    }
}

export default HomeModel;
