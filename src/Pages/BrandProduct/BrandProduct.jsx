import { Link } from "react-router-dom";

const BrandProduct = (props = {}) => {
    const { brandProduct } = props || {};
    // console.log(Object.keys(brandProduct).join(","))

    const
        { _id,
            image,
            name,
            country,
            product_type,
            description,
            rating,
            price,
            brand_name,
            model } = brandProduct;

    return (


        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure className=" h-full w-full">
                <img src={image} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name}</h2>
                <p className="text-lg badge badge-accent badge-outline">Made in {country}</p>
                <div className="badge">
                    Type: {product_type} </div>

                <div className="badge">
                    Brand: {brand_name} </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 ">
                    <div className="collapse-title text-xl font-medium  italic hover:not-italic text-green-500">
                        Click me to to show you details
                    </div>
                    <div className="collapse-content">

                        <p className="badge text-lg">Price : BDT {price}.00 Taka </p>
                        <p className="badge text-lg">Model:{model} </p>
                        <p className="badge text-lg">Rating:{rating}⭐</p>

                    </div>
                </div>

                <div className="card-actions justify-end">

                    <Link to={`/product-details/${_id}`}>
                        <button className="btn btn-primary">
                            View Details</button>
                    </Link>

                    <Link to={`/update-product/${_id}`} className="btn btn-primary">
                        Update
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default BrandProduct;




//  <div className="card card-compact  bg-base-100 shadow-xl">
// <figure className=" h-full w-full">
//     <img src= {image} alt="img" /></figure>
// <div className="card-body">
//     <h2 className="card-title"> {name}</h2>
//     <p className="text-lg badge badge-accent badge-outline">Made in {country}</p>
//     <div className="badge"> Type: {product_type} </div>
// <p className="badge">Model:{model} </p>
// <p className="badge">Rating:{rating}⭐</p>
//     <div className="card-actions justify-end">
//         <button className="btn btn-primary">Buy Now</button>
//     </div>
// </div>
// </div> 