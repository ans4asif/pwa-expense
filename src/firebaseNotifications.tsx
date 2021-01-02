import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCgd2D47DVc21ptzbL2jKYkO5cFh_gWE58",
    authDomain: "expenseapp-3458b.firebaseapp.com",
    projectId: "expenseapp-3458b",
    storageBucket: "expenseapp-3458b.appspot.com",
    messagingSenderId: "117179395454",
    appId: "1:117179395454:web:5a13503f9820c2a0dfd72f"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotifications() {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log(permission);
            messaging.getToken().then((currentToken:any) => {
                if (currentToken) {
                    console.log("Token");
                    console.log(currentToken);
                    

                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err:any) => {
                console.log('An error occurred while retrieving token. ', err);

            });

        }

    })
}
