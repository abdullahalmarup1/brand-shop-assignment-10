import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
// import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const ProductDetails = useLoaderData();
    // console.log(Object.keys(ProductDetails).join(","))

    const {
        _id,
        image,
        name,
        country,
        product_type,
        description,
        rating,
        price,
        brand_name,
        model } = ProductDetails


    const addToCart = () => {
        const myProductCart =
        {
            image,
            name,
            country,
            product_type,
            description,
            rating,
            price,
            brand_name,
            model,
            OwnerEmail: user?.email,
            productId: _id
        }


        fetch(" https://brand-shop-server-assignment-10-qok2u6qwf.vercel.app/addToCart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(myProductCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "It has been successfully added to my Cart !",
                        icon: "success"
                    });

                    // toast.success('Successfully added to my Cart!');
                }
                // console.log(data)
            })
        // console.log(myProductCart)

    }


    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold">{brand_name}</h2>
                    <h2 className="card-title">{name} ,Model {model}
                    </h2>
                    <p> {description} </p>
                    <p>Price :{price}.ooTk</p>


                    <div>
                        <Link to='/'>
                            <button className="btn btn-active btn-link  font-bold">Back to home</button>
                        </Link>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={addToCart} className="btn btn-primary">Add to my Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;