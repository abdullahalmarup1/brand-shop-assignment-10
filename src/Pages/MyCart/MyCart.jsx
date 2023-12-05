import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import SingleProductCart from "../../Components/SingleProductCart/SingleProductCart";
import Swal from "sweetalert2";


const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        fetch(` https://brand-shop-server-assignment-10-qok2u6qwf.vercel.app/myCart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCartData(data));
    }, [user]);


    const handleDelete = (id) => {
        console.log(id)
        fetch(` https://brand-shop-server-assignment-10-qok2u6qwf.vercel.app/cart/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Successfully deleted from your Cart",
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    });
                    const remaining = cartData.filter(brandProduct => brandProduct._id != id)
                    setCartData(remaining)
                }
            })
    }




    return (
        <div className="mx-auto">
            <h2 className="text-3xl font-light justify-center my-10 badge badge-accent badge-outline">
                {cartData.length}  Cars added to your Cart</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 min-h-[500px]">
                {
                    cartData?.map(product =>
                        <SingleProductCart key={product.id}
                            brandProduct={product}
                            handleDelete={handleDelete}>
                        </SingleProductCart>)
                }
            </div>
        </div>
    );
};

export default MyCart;