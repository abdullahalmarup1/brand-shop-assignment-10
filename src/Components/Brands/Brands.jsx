import { useLoaderData } from "react-router-dom";
import BrandsCard from "../BrandsCard/BrandsCard";

const Brands = () => {

    const brands = useLoaderData()
    console.log(brands)
    return (
        <div>
            <div className=" py-10 mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-600 my-6"> By your side, our creation, always by your side.🚘🚗
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 min-h-[500px]">
                    {
                        brands?.map(brand => <BrandsCard
                            key={brand._id}
                            brand={brand}>
                        </BrandsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;