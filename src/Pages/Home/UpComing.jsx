import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";




const UpComing = () => {
    return (
        <div className="flex gap-5 mb-5">
            <button className="btn btn-warning">🚗✨ Rev Up Your Savings Extravaganza! 🎉🔑</button>

            <Marquee pauseOnHover={true} speed={100}>
                <Link className="text-xl" to="/signin">
                Hurry! These offers are revving up and won't last forever. Drive into our showroom today and transform your driving experience with unbeatable discounts and exclusive perks! 🚗💨</Link>
            </Marquee>

        </div>
    );
};

export default UpComing;