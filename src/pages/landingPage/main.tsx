import Bg_image from "../../assets/bg.png"
import M_Bg_image from "../../assets/mbg.png"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            {/* desktop view  */}
            <div className="hidden md:block lg:block">
                <header className="h-24 px-80 flex items-center">
                    <img src={require("../../assets/logo.png")} width={"65"} alt="" />
                </header>
                <div className="h-full h-[90vh] px-80 bg-cover bg-center bg-[#695DEF] text-white"
                    style={{ backgroundImage: `url(${Bg_image})` }}>
                    <div className="pt-56 w-[37%] standard-font">
                        <h1 className="text-7xl">Welcome to <br /> Pamo delivery</h1>
                        <p className="py-8 text-lg font-light">Before you sign up kindly make your National ID (Ghana Card) and Drivers' Licence available as you will need it to complete registration.</p>
                        <Link to={"/register/personal"}>
                            <div className="w-52 rounded-xl h-12 bg-[#FF8B00] cursor-pointer flex justify-center items-center font-semibold">Sign Up Now!</div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* mobile view  */}
            <div className="block md:hidden lg:hidden h-full">
                <div className="bg-red-300">
                    <div className="standard-font">
                        {/* <h1 className="text-7xl">Welcome to <br /> Pamo delivery</h1>
                        <p className="py-8 text-lg font-light">Before you sign up kindly make your National ID (Ghana Card) and Drivers' Licence available as you will need it to complete registration.</p>
                        <Link to={"/register/personal"}>
                            <div className="w-52 rounded-xl h-12 bg-[#FF8B00] cursor-pointer flex justify-center items-center font-semibold">Sign Up Now!</div>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage