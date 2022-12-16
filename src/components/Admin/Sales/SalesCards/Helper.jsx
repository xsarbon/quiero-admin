import './Helper.css'
import {db} from "../../../firebase/firebase"
import { collection, getDocs, query  } from "firebase/firestore";



const Helper=({value})=>{
    const ayuda =async()=>{console.log('algo')} 

    if(value!=="pending"){
        return(<>
            <td id="listo">
                <b>
                    Listo
                </b>
            </td>
        </>)
    }else{
        return(
            <>
                <td id='pending'>
                    <button id='pending' onClick={ayuda}>
                        Pendiente
                    </button>
                </td>
            </>
        )
    }
}
export default Helper