import React,{useState} from "react"
import { useForm } from "react-hook-form"
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import {db} from '../firebase/firebase'
import { NavLink } from "react-router-dom";
import './FiltroCategories.css'

const Menu = () => {
    const {register, handleSubmit}=useForm();
    const [category,setCategory]=useState([])
    const cat=[]

    const myFuncion=async()=>{
        const catRef=collection(db, "categories")
        const q=query(catRef,orderBy("category"))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        cat.push({category:doc.data().category ,id:doc.id})
        return(setCategory(cat))
        });
    }

   const [ref,setRef]=useState('')

    const onSubmit=async(data)=>{
        setRef(data.category)
    }


    return (
        <div>
            <form id="form-cat" onChange={handleSubmit(onSubmit)}>
                <label>Categoria: </label>
                <select {...register('category')} onClick={myFuncion}>
                <option value='false' hidden>Seleccione una categoria</option>
                    {
                        category.map((e)=>{
                            return (<option value={e.category} key={e.id} >{e.category}</option>)
                        })
                    }
        </select>       
        <NavLink className="ir" to={`category/${ref}`}><button className="ir">Filtrar</button></NavLink>
            </form>
        </div>
    )
}
export default Menu