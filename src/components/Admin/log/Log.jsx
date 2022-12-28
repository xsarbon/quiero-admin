import "./Log.css";
import dashboard from '../../images/dashboard.png';
import { useState } from "react";
import Auth from "../../ProtectedRoute/ProtectedRoute";

const Log = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const Submit = async () => {
        Auth(email,password)
    }

    return (
        <>
            <div className="log-container">
                <img src={dashboard} className="img-log" />
                <div className="form-container" >
                    <h1 className="log-tittle">Inicia Sesión</h1>
                    <p className="log-p">Para comenzar como administrar</p>
                    <input required className="log-email" type="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)} />
                    <input required className="log-pass" type="password" placeholder="Contraseña" onChange={(ev) => setPassword(ev.target.value)} />
                    <input onClick={Auth({email,password})} type='submit' className="log-input" />
                </div>
            </div>
        </>
    )
}
export default Log