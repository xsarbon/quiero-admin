import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Auth = async(email,password)=>{
    const [user,setUser]=useState({})
    const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)
        try {
            setUser({email:email,password:password})
            return ( user )
        } catch (error) {
            console.log('error');
        }

        return(user)
}
export default Auth