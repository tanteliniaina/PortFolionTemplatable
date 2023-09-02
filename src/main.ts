import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUdglyLVsxZ2nkXwhq6nZsT6xAkbncAy0",
  authDomain: "portfolio-482fb.firebaseapp.com",
  projectId: "portfolio-482fb",
  storageBucket: "portfolio-482fb.appspot.com",
  messagingSenderId: "1080324780832",
  appId: "1:1080324780832:web:574d71769f7e8e22dbdd45",
  measurementId: "G-332CTCPVJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);