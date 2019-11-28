import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import i18n from "./i18n";

const config = {
    apiKey: "AIzaSyA7OAZdjFHmc5hPe1w_LnUHnragbbUt_ro",
    authDomain: "cooper-3bac0.firebaseapp.com",
    databaseURL: "https://cooper-3bac0.firebaseio.com",
    projectId: "cooper-3bac0",
    storageBucket: "cooper-3bac0.appspot.com",
    messagingSenderId: "513149183894",
    appId: "1:513149183894:web:bab585fc89f64730635fb7",
    measurementId: "G-XH22H6JDXX"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    login(email, password, callback) {
        return this.auth.signInWithEmailAndPassword(email, password).catch((error) => {
            alert(i18n.t("screens.login.noUserError"));
        }).then(() => {
            callback();
        });
    }

    logout() {
        return this.auth.signOut();
    }

    getCurrentUser() {
        return this.auth.currentUser;
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

}

const firebase = new Firebase();
export default firebase;


