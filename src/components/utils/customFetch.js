/* Funcion para simular el lag de que puede tener la consulta con la base de datos */
const customFetch = (products) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export default customFetch