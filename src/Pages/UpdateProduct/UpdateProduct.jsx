import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const updateProductData = useLoaderData()
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
            model } = updateProductData
    // console.log(updateProductData)


    const handleUpdate = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const image = form.get("image")
        const name = form.get("name")
        const description = form.get("description")
        const rating = form.get("rating")
        const price = form.get("price")
        const model = form.get("model")

        const updatedData = { image, name, description, rating, price, model }

        console.log(updatedData)


        fetch(` https://brand-shop-server-assignment-10-qok2u6qwf.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Well done !!! It has been updated successfully!",
                        icon: "success"
                    });
                }
            })
    }


    return (

        <div className=" mx-auto py-10">
            <h2 className="text-2xl text-center font-bold text-slate-500">
                Update Product of  {brand_name}
            </h2>


            <div className="max-w-xl mx-auto">
                <form onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ImageURL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Image"
                            name="image"
                            className="input input-bordered"
                            defaultValue={image}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="input input-bordered"
                            defaultValue={name} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Description</span>
                        </label>
                        <textarea placeholder="Description" name="description"
                            defaultValue={description}
                            className="textarea input-bordered">
                        </textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating
                            </span>
                        </label>
                        <input type="text" placeholder="Rating"
                            name="rating"
                            defaultValue={rating}
                            className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Price"
                            name="price"
                            className="input input-bordered"
                            defaultValue={price} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Model
                            </span>
                        </label>


                        <select
                            name="model" className="form-control" id="model">
                            <option
                                value="{model}">{name}{model}
                            </option>
                            <option
                                value="previousModel">
                                {name}2012
                            </option>
                            <option
                                value="currentModel">
                                {name}2024
                            </option>
                            <option
                                value="upcomingModel">
                                {name}2025
                            </option>
                        </select>

                        <div className="form-control my-5">
                            <button
                                className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>

                </form>
            </div>
            <Link to='/'>
                <button className="btn btn-active btn-link text-md font-bold">Back to home</button>
            </Link>
        </div>
    );
};

export default UpdateProduct;