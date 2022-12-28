import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../../../firebase/firebase'
import './Helper.css'



const Helper=({value})=>{

    const done =async()=>{
        console.log('algo')
        const saleRef=doc(db,'salesClient',value.id)
        updateDoc(saleRef,{state:'done'})       
} 

    const pending =async()=>{
        console.log('algo')
        const saleRef=doc(db,'salesClient',value.id)
        updateDoc(saleRef,{state:'pending'})
        
}

    if(value.state!=="pending"){
        return(<>
            <td id="listo">
                <button id='done' onClick={pending}>
                        Listo
                </button>
            </td>
        </>)
    }else{
        return(
            <>
                <td id='pending'>
                    <button id='pending' onClick={done}>
                        Pendiente
                    </button>
                </td>
            </>
        )
    }
}
export default Helper