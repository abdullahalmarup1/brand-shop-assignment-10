import { Link, useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "../BrandProduct/BrandProduct";

const BrandProducts = () => {

    const brandProducts = useLoaderData();
    const { brandName } = useParams();
    console.log(brandProducts);


    return (
        <div className=" mx-auto py-10 text-center">

            <h2 className="text-4xl font-bold"> {brandName} </h2>
            <p className="text-3xl my-5 text-center">
                Total {brandProducts.length} 🚗
                are available now!!! </p>


                <div>
                <Link to='/'>
                    <button className="btn btn-active btn-link  font-bold">Back to home</button>
                </Link>
            </div>


            {
                brandProducts.length === 0 && (
                    <div>
                        <h2 className="text-3xl space-y-5 py-4 font-bold text-center ">No Car's Added Yet
                        </h2>
                        <div className=" my-3">
                            <Link to="/ addCar">
                                <button className="btn btn-primary">Add a Car</button>
                            </Link>
                        </div>
                    </div>
                )
            }



            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 py-5 bg-slate-200">
                {
                    brandProducts.map(brandProduct =>
                        <BrandProduct
                            key={brandProduct._id} brandProduct={brandProduct}>
                        </BrandProduct>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;