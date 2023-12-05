import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer";
import Brands from "../../Components/brands/brands";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import UpComing from "./UpComing";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <UpComing></UpComing>
            <Banner></Banner>
            <Brands></Brands>
            <section>
                <div className=" bg-slate-300 mx-auto flex my-5 rounded-lg justify-center items-center min-h-[500px]">
                    <h2>Extra section 1</h2>
                </div>
            </section>
            <section>
                <div className=" bg-slate-300 mx-auto flex my-5 rounded-lg justify-center items-center min-h-[500px]">
                    <h2>Extra section 2</h2>
                </div>
            </section>
<section>
    <Footer></Footer>
</section>
        </div>
    );
};

export default Home;