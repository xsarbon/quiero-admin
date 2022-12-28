import { useParams } from "react-router-dom"
import { db } from "../../../firebase/firebase"
import {doc,collection,getDoc} from 'firebase/firestore'
import Sale from "../Sale/Sale"
import { useState,useEffect } from "react"


const Filter=()=>{
    const [listProduct, setListProduct] = useState({});
    const { id } = useParams()
    useEffect(() => {
        const productsCollection = collection(db, 'salesClient')
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc)
            .then((res) => {
                setListProduct(
                    res.data()
                )
            })
            .finally(() => {
                
            })
    }, [])

    return (
        <>
            {<Sale sale={listProduct} />}
        </>
    )


}

export default Filter