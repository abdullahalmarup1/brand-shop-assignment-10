import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";

const GoogleLogin = () => {


    // eslint-disable-next-line no-unused-vars
    const { user, googleLogin } = useContext(AuthContext)


    const handleGoogleLogin = (media) => {
        media()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div>
            <button
                onClick={() => handleGoogleLogin(googleLogin)}
                className="btn btn-outline w-full">
                <FcGoogle className="text-2xl"></FcGoogle>
                Continue with google
            </button>

            <Link to='/'>
                <button className="btn btn-active btn-link text-2xl font-bold">Back to home</button>
            </Link>

        </div>
    );
};

export default GoogleLogin;