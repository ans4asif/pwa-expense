importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCgd2D47DVc21ptzbL2jKYkO5cFh_gWE58",
    authDomain: "expenseapp-3458b.firebaseapp.com",
    projectId: "expenseapp-3458b",
    storageBucket: "expenseapp-3458b.appspot.com",
    messagingSenderId: "117179395454",
    appId: "1:117179395454:web:5a13503f9820c2a0dfd72f"
  };

  firebase.initializeApp(firebaseConfig);
 firebase.messaging();