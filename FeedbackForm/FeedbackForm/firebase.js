// const firebaseConfig = {
//     apiKey: "AIzaSyAoOBUX4wqIRBX8WpiKBnfKAB8TCWr6nhw",
//     authDomain: "feeback-form-4e8c5.firebaseapp.com",
//     databaseURL: "https://feeback-form-4e8c5-default-rtdb.firebaseio.com",
//     projectId: "feeback-form-4e8c5",
//     storageBucket: "feeback-form-4e8c5.appspot.com",
//     messagingSenderId: "754643924837",
//     appId: "1:754643924837:web:4041d903dacf845376d38c",
//     measurementId: "G-2VX67K6XFB"
//   };

//   firebase.initializeApp(firebaseConfig);

//   var fbFormDB = firebase.database().ref("feebackForm");

//   document.getElementById("fbform").addEventListener("submit", submitForm);

//   function submitForm(e) {
//     e.preventDefault();
  
//     var name = getElementVal("name");
//     var email = getElementVal("email");
//     var subject = getElementVal("subject");
  
//     saveMessages(name,email,subject);
  
//   const saveMessages = (name, email, subject) => {
//     var newfbform = fbFormDB.push();
  
//     newfbform.set({
//       name: name,
//       email: email,
//       subject: subject,
//     });
//   };
  
//   const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
 
const firebaseConfig = {
    apiKey: "AIzaSyAoOBUX4wqIRBX8WpiKBnfKAB8TCWr6nhw",
    authDomain: "feeback-form-4e8c5.firebaseapp.com",
    databaseURL: "https://feeback-form-4e8c5-default-rtdb.firebaseio.com",
    projectId: "feeback-form-4e8c5",
    storageBucket: "feeback-form-4e8c5.appspot.com",
    messagingSenderId: "754643924837",
    appId: "1:754643924837:web:4041d903dacf845376d38c",
    measurementId: "G-2VX67K6XFB"
  };

  const app = initializeApp(firebaseConfig);