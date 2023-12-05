import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-alegreya ">
            <Outlet></Outlet>
            <Toaster 
             position="top-center"
             reverseOrder={false}/>
        </div>
    );
};

export default Root;