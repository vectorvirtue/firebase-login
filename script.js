  // Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu0Fg23hTSo7ULU9OnH0mIp1M9N3PpPbs",
  authDomain: "login-example-1456e.firebaseapp.com",
  projectId: "login-example-1456e",
  storageBucket: "login-example-1456e.appspot.com",
  messagingSenderId: "1027164977297",
  appId: "1:1027164977297:web:aef9c401673b48c6586730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


  const auth = getAuth(app)

  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event){
event.preventDefault()
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
createUserWithEmailAndPassword( auth, email, password)
.then((userCredential) =>{
    const user = userCredential.user;
    console.log(user)
    alert('Account created successfully!');
    window.location.href ='login.html'
})
.catch((error) =>{
    const errorCode = error.code;
    console.log(errorCode)
    const errormessage = error.message
    console.log(errormessage)
    alert('error')

});
  })