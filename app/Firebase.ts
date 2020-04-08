import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import i18n from "cooper-app/app/i18n";

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
    auth: firebase.auth.Auth;

    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    login(email, password, callback): Promise<void | never> {
        return this.auth.signInWithEmailAndPassword(email, password).catch((error) => {
            alert(i18n.t("screens.login.noUserError"));
        }).then(() => {
            callback();
        });
    }

    logout(): Promise<void> {
        return this.auth.signOut();
    }

    getCurrentUser(): firebase.User {
        return this.auth.currentUser;
    }

    async register(name, email, password): Promise<void> {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    isInitialized(): Promise<any> {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername(): string {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

}

const firebase = new Firebase();
export default firebase;


