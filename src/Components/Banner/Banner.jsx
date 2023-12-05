import logo from "../../../assets/carguruslogo.png"


const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/TcJ5Wrn/ivana-cajina-WPVt-T0-MEM00-unsplash.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">

                    <div>
                        <h1 className="mb-5 text-5xl font-bold">CarGurus</h1>
                        <img className="rounded-full" src={logo} alt="img" />
                    </div>

                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};
export default Banner;