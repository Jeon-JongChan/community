import * as firebase from "firebase/app";
import "firebase/auth";
//import "firebase/database"
import "firebase/firestore"

/** 기본 서비스 */
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APPKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
    measurementId: "G-KC8ZVWJEQR"
};
//firebase.analytics();
firebase.initializeApp(firebaseConfig);
export default firebase;
export const dbService = firebase.firestore();
export const authService = {
    auth: firebase.auth(),
    createUserWithEmail: async (email,password)=>{
        return await authService.auth.createUserWithEmailAndPassword(email, password);
    },
    signInWithEmail: async (email,password)=>{
        let ret = await authService.auth.signInWithEmailAndPassword(email, password);
        return ret;
    },
    signInWithPopup: async (provider)=>{
        return await authService.auth.signInWithPopup(provider);
    },
    signOut: ()=>{
        firebase.auth().signOut().then(() => {
            console.log("SignOut");
            userService.user = null;
            return true;
        }).catch((error) => {
            return false;
        });
    },

}
export const userService = {
    user : null,
    updateProfile : (name, photo=undefined, user=userService.user)=>{
        if (user===undefined) return false;
        user.updateProfile({
            displayName: name,
            photoURL: photo
        }).then(function() {
            // Update successful.
        }).catch(function(error) {
            return error;// An error happened.
        });
    },
    emailVerification : (user=userService.user)=>{
        if (user===undefined) return false;
        user.sendEmailVerification().then(function() {
            return true;// Email sent.
        }).catch(function(error) {
            return error;// An error happened.
        });
    },
    delete: (user=userService.user)=>{
        if (user===undefined) return false;
        user.delete().then(function() {
            return true;// User deleted.
        }).catch(function(error) {
            return error;// An error happened.
        });
    },
    reauth: (user=userService.user)=>{
        if (user===undefined) return false;
        let credential;
        user.reauthenticateWithCredential(credential).then(function() {
            return true;// User re-authenticated.
        }).catch(function(error) {
            return error;// An error happened.
        });
    }
}