import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBQowaE0k4CoLKf7Pl9VZJBFFen1YxZQ8M",
  authDomain: "form-auth-b8886.firebaseapp.com",
  projectId: "form-auth-b8886",
  storageBucket: "form-auth-b8886.appspot.com",
  messagingSenderId: "164996632460",
  appId: "1:164996632460:web:a52b931ce1cf52911d90a9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const FirebaseContext = React.createContext({
//   auth: null,
// });

// export const FirebaseContextProvider = (props) => {
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);

//   return (
//     <FirebaseContext.Provider value={auth}>
//       {props.children}
//     </FirebaseContext.Provider>
//   );
// };
