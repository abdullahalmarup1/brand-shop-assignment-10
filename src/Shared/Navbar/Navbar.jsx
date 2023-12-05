import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, userSignOut } = useContext(AuthContext)

    /* user sign out */
    const handleSignOut = () => {
        userSignOut()
            .then()
            .catch()
    }




    const navLinks =
        <>
            <li className="text-xl">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xl">
                <NavLink to="/myCart">My Cart</NavLink>
            </li>
            <li className="text-xl">
                <NavLink to="/login">Login</NavLink>
            </li>

        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navLinks}

                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end">
                <p className="mx-4">Connect With</p>
                <div className="flex text-center gap-3">

                    <Link to='/googleLogin'>
                        <button className="btn btn-neutral">Google</button>

                    </Link>


                    {
                        user ?
                            <button
                                onClick={handleSignOut}
                                className="btn btn-link text-lg">
                                Sign Out
                            </button>
                            :
                            <Link to='/login'>
                                <button
                                    className="btn btn-link text-lg">
                                    Login
                                </button>
                            </Link>
                    }








                    {/* <Link to="/login">
                        <button className="btn btn-neutral">Email</button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;