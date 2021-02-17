import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


let firebaseConfig = {
    apiKey: "AIzaSyA4NSE-uYqLEaBxALX7RIY3nMLZ7xOK6zc",
    authDomain: "baskout-bb2e6.firebaseapp.com",
    databaseURL: "https://baskout-bb2e6-default-rtdb.firebaseio.com",
    projectId: "baskout-bb2e6",
    storageBucket: "baskout-bb2e6.appspot.com",
    messagingSenderId: "179407066427",
    appId: "1:179407066427:web:afc224e226be8adb8a931e",
    measurementId: "G-RTM9KCERHF"
}


class Firebase{
    app: app.database.Database;
    storage: app.storage.Storage;
    constructor(){
        
        app.initializeApp(firebaseConfig);

        //Referenciando a databse para acessar em outros locais
        this.app = app.database();
        
        this.storage = app.storage();
    }

    login(email: string, password: string){
        return app.auth().signInWithEmailAndPassword(email, password)
    }
    logout(){
        return app.auth().signOut();
    }
    // async register(email: string, password: string, name: string){
    //     await app.auth().createUserWithEmailAndPassword(email, password);

    //     const uid = app.auth().currentUser?.uid

    //     return app.database().ref('usuarios').child(uid).set({
    //         name : name
    //     })
    // }
    // isInitialized(){
    //     return new Promise(resolve => {
    //         app.auth().onAuthStateChanged(resolve);
    //     })
    // }

    // getCurrent(){
    //     return app.auth().currentUser && app.auth().currentUser.email
    // }
    // getCurrentUid(){
    //     return app.auth().currentUser && app.auth().currentUser.uid;
    // }
    // async getUserName(callback:any){
    //     if(!app.auth().currentUser){
    //         return null;
    //     }
    //     const uid = app.auth().currentUser.uid;
    //     await app.database().ref('usuarios').child(uid).once('value').then(callback);
    // }

}

export default new Firebase();