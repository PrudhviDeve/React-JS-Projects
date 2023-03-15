import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAnFNaMRK4FJAoju05D9vR2RP6Pv4ym0jM",
    authDomain: "clone-1cb6a.firebaseapp.com",
    projectId: "clone-1cb6a",
    storageBucket: "clone-1cb6a.appspot.com",
    messagingSenderId: "10437436964",
    appId: "1:10437436964:web:e0b95abd499888d0305ab1",
    measurementId: "G-YZF74WGPXL"
};


 const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)




