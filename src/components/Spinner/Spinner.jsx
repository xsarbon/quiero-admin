import { TailSpin } from 'react-loader-spinner'
import './SpinnerStyles.css'

const Spinner = () => {
    return (<div className="spinner">
        <TailSpin
            height="150"
            width="150"
            color="#9300e7"
            ariaLabel="Cargando"
            radius="1"
            wrapperClass="spinner"
            visible={true}
            className="spiner"
        />
    </div>)
}
export default Spinner