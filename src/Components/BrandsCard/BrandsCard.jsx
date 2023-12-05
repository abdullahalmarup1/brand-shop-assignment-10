import { Link } from "react-router-dom";


const BrandsCard = (props = {}) => {

    const { brand } = props || {};
    const { _id,brand_name,models, logo_url} = brand
    // console.log(Object.keys(brand).join(","))
    return (
        <Link to ={`/brand_name/${brand_name}`} className="card bg-base-200 shadow-xl">
            <div className="card-actions ml-5 mt-5">
                    <button className="btn btn-success">Buy Now</button>
                </div>
            <figure className="px-10 pt-10">
                <img src={logo_url} alt="img" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Models:{models} </h2>
                <p> Brand_name: {brand_name} </p>
                {/* <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </Link>
        
    );
};

export default BrandsCard;