import { types } from "../types/types";
// import {getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

export const setUser = (payload) => ({
    type: types.setUser,
    payload
})
// export const loginWithEmailAndPass = (payload) => {
//     return async (dispatch) => {
//         try {
//             const auth = getAuth(firebaseapp);
//             console.log("PAYLOAD EMAIL: "+payload.email);
//             console.log("PAYLOAD PASS: "+payload.pass);
//             await signInWithEmailAndPassword(auth, payload.email, payload.pass)
//             .then((userCredential) => {
//                 // Signed in
//                 const user = userCredential.user;
//                 localStorage.setItem('user', JSON.stringify(user));
//                 dispatch(setUser(user));
//                 fetchHomePhotos();
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 if(errorCode === "auth/missing-email" || errorCode === 'auth/user-not-found'){
//                     createUserWithEmailAndPassword(auth, payload.email, payload.pass)
//                     .then((userCredential) => {
//                         // Signed in
//                         const user = userCredential.user;
//                         console.log(user);
//                         // loginWithEmailAndPass({email: payload.email, pass: payload.pass});
//                         // localStorage.setItem('user', JSON.stringify(user));
//                         // dispatch(setUser(user));
//                         // ...
//                     })
//                     .catch((error) => {
//                         const errorCode = error.code;
//                         const errorMessage = error.message;
//                         console.log(errorCode);
//                         console.log(errorMessage);
//                         // ..
//                     });
//                 }
//                 console.log(errorCode);
//                 console.log(errorMessage);
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }