import src from '../Assets/spinner.gif'

const Spinner = (props)=>{
    return(
        <div className="spinner text-center">
            <img src={src} alt="" />
        </div>
    );
}
export default Spinner;