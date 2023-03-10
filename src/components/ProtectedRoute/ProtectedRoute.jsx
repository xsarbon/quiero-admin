//import { getAuth, signInWithEmailAndPassword } from "@firebase/auth"
import 'firebase/auth';
import Auth from '../Admin/log/Auth/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {
const [user,setUser]=useState({})


const Auth = async(email,password)=>{
    const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
        try {
            setUser({email:email,password:password})
            return ( user )
        } catch (error) {
            console.log('error');
        }

        return(user)
}


    return children
}
export default ProtectedRoute