import './Product.css'

const Product=({product})=>{
    return(
        <>          
            <tr>
                <td><img className="imagen" src={product.image} alt="" /></td>
                <td>{product.product}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>${product.quantity*product.price}</td>
            </tr>
        </>
    )
}
export default Product