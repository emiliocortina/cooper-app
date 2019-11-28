import firebase from "../Firebase";


const isAuthenticated = () => {
    return firebase.getCurrentUser() != null;
}

const login = (email, password, callback) => {
    firebase.login(email, password, callback);
}

const logout = () => {
    firebase.logout();
}

const getCurrentUser = () => {
    return firebase.getCurrentUser();
}

const isInitialized = () => {
    return firebase.isInitialized();
}


export {isAuthenticated, login, getCurrentUser, isInitialized, logout};
