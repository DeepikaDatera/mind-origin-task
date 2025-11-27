importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAvHzKYR4kHBzxfLBrzpZEoTW8alYIah7w",
    authDomain: "mindorigin-task.firebaseapp.com",
    projectId: "mindorigin-task",
    storageBucket: "mindorigin-task.firebasestorage.app",
    messagingSenderId: "529948904742",
    appId: "1:529948904742:web:fd5707a34b963e069c05e7"

});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
    });
});
