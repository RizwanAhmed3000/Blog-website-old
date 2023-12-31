const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const newPassword = document.querySelector('#new-password')
const repeatPassword = document.querySelector('#repeat-password')
const password = document.querySelector('#password')
const emailAddress = document.querySelector('#email-address')
const email = document.querySelector('#email')
const passwordWarning = document.querySelector('.passwordWarning')
// const passwordBtn = document.querySelector('.passwordBtn')
const creatAcctountBtn = document.querySelector('#creatAcctountBtn')
const loginBtn = document.querySelector('#loginBtn')


// ------------------------Firebase connections-----------------------------------//
import { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc } from "../firebaseConfig.js";

creatAcctountBtn.addEventListener('click', signupHandler)
loginBtn.addEventListener('click', loginHandler)

// passwordWarning.style.visibility = "hidden"

// function showHide(p) {
//     if (p.type == "password") {
//         p.setAttribute('type', 'text')
//         passwordBtn.classList.add('active')
//     } else {
//         p.setAttribute('type', 'password')
//         passwordBtn.classList.remove('active')
//     }
// }

function loginHandler() {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                window.location.href = '../Dashboard/dashboard.html'
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            alert(`${errorMessage}`)
        });
}


function signupHandler() {

    if (firstName.value == "" || lastName.value == "" || emailAddress.value == "" || newPassword.value == "" || repeatPassword.value == "") {
        alert('Fill all the fields')
    } else if ((firstName.value.length < 3) || (lastName.value.length < 1)){
        alert('first name should be atleast 4 character & last name should be atleast 1 character')

    } else if (newPassword.value != repeatPassword.value) {
        alert('password do not match')

    } else {
        createUserWithEmailAndPassword(auth, emailAddress.value, newPassword.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                if (user) {
                    addUserHandler(user.uid)
                    emptyInput()
                    alert(`User register successful`)
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode)
                console.error(errorMessage)
            });
    }
}


function genderHandler(g) {
    gender = g
}

function emptyInput() {
    firstName.value = ""
    lastName.value = ""
    emailAddress.value = ""
    newPassword.value = ""
    repeatPassword.value = ""

}

async function addUserHandler(uid) {
    try {
        const response = await setDoc(doc(db, "users", uid), {
            firstName: firstName.value,
            lastName: lastName.value,
            emailAddress: emailAddress.value,
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}