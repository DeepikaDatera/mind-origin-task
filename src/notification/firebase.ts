// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyAvHzKYR4kHBzxfLBrzpZEoTW8alYIah7w",
    authDomain: "mindorigin-task.firebaseapp.com",
    projectId: "mindorigin-task",
    storageBucket: "mindorigin-task.firebasestorage.app",
    messagingSenderId: "529948904742",
    appId: "1:529948904742:web:fd5707a34b963e069c05e7",
    measurementId: "G-J43FP18XZ7"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: "BOvtvczLkTKUgE89TV5OgHbB-LV3N8cdGjMkYbsZYZ1fF0rVI2gJq9DYrJmgm8jk-ZC9UXp8tpQfJA-42P__rNk"
            });

            return token;
        } else {
            console.log('Notification permission denied');
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}