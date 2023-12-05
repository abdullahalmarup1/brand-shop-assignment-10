import logo from '../../../assets/carguruslogo.png'
import moment from 'moment';



const Header = () => {
    return (
        <div className='text-center my-5'>
            <img className='mx-auto' src={logo} alt="img" />
            <p className="text-2xl mt-3">The best ways to sell your cars <span className='text-base text-stone-400'>
                - CarGurus🚗 </span></p>
            <h2 className="text-2xl mt-3">{moment().format("dddd, MMMM Do YYYY, h:mm a")}</h2>
        </div>
    );
};

export default Header;