import {app,db} from '../../firebase/firebase'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, getDocs,query ,orderBy } from "firebase/firestore";
import {v4}from 'uuid'
import React,{ useState } from 'react'
import { useForm } from "react-hook-form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./SubirProd.css"
import SideBar from '../SideBar/SideBar';

const SubirProd = () => {
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

    const storage = getStorage(app)

    const [file, setFile]=useState(null);

    /* funcion para subir el archivo */
    async function uploadFile(file){
        const storageRef=ref(storage,'products/'+v4())
        await uploadBytes(storageRef,file)
        const url = await getDownloadURL(storageRef)
        return url
    }
    const { register, handleSubmit } = useForm({

    })




    /* al clickear en subir con async/await */
    const onSubmit=async(e)=>{
        try {
            const result = await uploadFile(file);
            const productsCollection = collection(db, "listProducts");
            addDoc(productsCollection, {
                product:e.product, image:result, price:e.price, description:e.description, initial:1,category:e.category, alt:e.alt
            })            

            let formul = document.getElementById('formul')
            formul.reset() 
            
        }catch(error){
            console.log(error);
            alert('Fallo al subir, vuelva a intentar')
        }
    }

    return (<>
        <SideBar/>
        <form id='formul' onSubmit={handleSubmit(onSubmit)} > 
            <section>
                <FloatingLabel
                    
                    controlId="floatingInput"
                    label="Nombre de Producto"
                    className="mb-3">
                    <Form.Control
                    required
                    type="text" 
                    placeholder="Nombre de producto" 
                    {...register('product')}
                    />
                </FloatingLabel>
            </section>

            <section>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Precio"
                    className="mb-3">
                        <Form.Control required type="number" placeholder="Precio del producto" {...register('price')} />
                </FloatingLabel>

            </section>

            <section>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Descripcion"
                    className="mb-3">
                        
                        <Form.Control
                            type="text" 
                            required
                            placeholder="Descripcion"
                            as="textarea"
                            style={{ height: '200px' }}
                            {...register('description')}
                            />
                </FloatingLabel>
            </section>

            <section>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Optimizacion SEO"
                    className="mb-3">
                        <Form.Control 
                    required type="text" placeholder="Optimizacion SEO" {...register('alt')} />
                </FloatingLabel>
            </section>

            <section>
                <Form.Select required {...register('category')} onClick={myFuncion}>
                    <option value='false' hidden >Seleccione categoria</option>
                        {
                            category.map((e)=>{
                                return (<option value={e.category} key={e.id} >{e.category}</option>)
                            })
                        }
                </Form.Select>       
            </section>
            
            <section>
                <Form.Control required style={{ marginTop: '18px' }} type="file" onChange={e=>setFile(e.target.files[0])} />
            </section>
            
            <Button style={{marginTop:'20px', width:'100%'}} variant="primary" type="submit">
        Submit
      </Button>
        </form>
        </>
    )


}
export default SubirProd