import firebase from "cooper-app/Firebase";



class AuthService {

    static login = (email, password, callback):Promise<void | never> => {
        return firebase.login(email, password, callback);
    };

    static logout = ():Promise<void> => {
        return firebase.logout();
    };

    static isAuthenticated = ():boolean => {
        return firebase.getCurrentUser() != null;
    };

    static getCurrentUser = ():firebase.User => {
        return firebase.getCurrentUser();
    };

    static isInitialized = () => {
        return firebase.isInitialized();
    };
}

export default AuthService;
