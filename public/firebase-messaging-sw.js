importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js')
const config = {
    apiKey: "AIzaSyC6ivyHNdn02oDinN6ufY1psplDbkafBns",
    authDomain: "pwa-quizapp.firebaseapp.com",
    projectId: "pwa-quizapp",
    storageBucket: "pwa-quizapp.appspot.com",
    messagingSenderId: "431816107544",
    appId: "1:431816107544:web:8e472889d17fc171ff456d"
};
firebase.initializeApp(config)
firebase.messaging();