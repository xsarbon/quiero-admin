/* Funcion que valída que la edad ingresada esté entre 18 y 65 años */
const edadValidator = (value) => {
    return value >= 18 && value <= 65;
}
export { edadValidator }