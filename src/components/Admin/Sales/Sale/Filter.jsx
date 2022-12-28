import Product from "./Product/Product"


const Filter =({lista})=>{
    return lista.map(pro=><Product product={pro} key={pro.id}/>)
}
export default Filter
