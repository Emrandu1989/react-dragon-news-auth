import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
          setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
               setUser(currentUser);
               console.log('currentUser', currentUser)
               setLoading(false)
          })
          return ()=>{
              unsubscribe()
          }
    },[])

    const authInfo = {
              user,
              createUser,
              logOut,
              login,
              loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
     children:PropTypes.node
}