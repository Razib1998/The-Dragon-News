import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


 export const MyContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // New User Create
    
    const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
     return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscriber = onAuthStateChanged(auth, currentUser =>{
        console.log("User set", currentUser);
        setUser(currentUser)
       }) 
       return ()=>{
        unSubscriber()
       }
    },[])

    const authInfo = {
    user,
    createUser,
    signIn,
    logOut
    }
    return (
        <MyContext.Provider value={authInfo}>
            {children}
        </MyContext.Provider>
    );
};



AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;