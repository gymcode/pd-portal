import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import imageSvg from "../../assets/img.svg"

const PersonalInfoPage = React.lazy(() => import("./PersonalInfo"))
const LicenseInfoPage = React.lazy(() => import("./LicenseInfo"))

const RegistrationPage = () => {
    const [firstName, setFirstName] = React.useState("First name")
    const [lastName, setLastName] = React.useState("Last name")
    const [email, setEmail] = React.useState("someone@gmail.com")
    return (
        <div>
            {/* desktop view  */}
            <div className="hidden md:block lg:block standard-font">
                <header className="h-24 px-40 flex justify-between items-center border-b border-gray-300 ">
                    <div>
                        <img src={require("../../assets/logo.png")} width={"65"} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='h-12 w-12 rounded-xl flex justify-center items-center text-2xl text-white bg-[#FF8B00] mr-3'>{firstName.charAt(0)}{lastName.charAt(0)}</div>
                        <div>{firstName} {lastName}</div>
                    </div>
                </header>
                <div className="h-full h-[20vh] px-80 ml-10 bg-cover bg-center py-6">
                    <div className='flex'>
                        <div>
                            <div className='h-24 flex justify-center items-center'>
                                <img src={imageSvg} color="red" className="h-[70%] text-gray-300" alt="" />
                            </div>
                            <div>
                                <div className='h-8 w-36 flex justify-center items-center font-semibold bg-[#695DEF] text-xs rounded-xl text-white'>Add/change photo</div>
                            </div>
                        </div>
                        <div>
                            <div className='px-5'>
                                <div className='text-3xl font-bold'>{firstName} {lastName}</div>
                                <div className='text-xs pt-1 text-gray-500'>{email}</div>
                                <div className='text-xs pt-1 text-gray-500'>Courier account</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-full h-[5vh] px-80 ml-10 text-sm flex items-center'>
                    <NavLink to={"/register/personal"}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }}
                    >
                        <div className='cursor-pointer'>Personal</div>
                    </NavLink>

                    <NavLink to={"/register/license"}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }}
                    >
                        <div className='ml-28 cursor-pointer'>Driver's license</div>
                    </NavLink>

                </div>
                <main className='bg-[#F7F9FC] h-[55vh] px-80 mx-10 grid grid-cols-3 pt-12'>
                    <div className='col-span-2'>
                        <Routes>
                            <Route path='/personal' element={
                            <PersonalInfoPage 
                                    setFristName={setFirstName} 
                                    setLastName={setLastName}
                                    setEmail={setEmail}
                                    />}/>
                            <Route path='/license' element={<LicenseInfoPage />} />
                        </Routes>
                    </div>
                    <div className=''>
                        <div className='bg-[#D3E1FC] text-[#0F2A60] w-64 h-28 p-4 text-sm'>
                            Your information is always kept encrypted and can never be accessed by third parties. <span className='font-bold text-orange-600'>View Our Privacy Policy</span>
                        </div>
                    </div>
                </main>
                <div className='bg-[#F4F4F6] h-[10vh] px-40 flex justify-between items-center'>
                    <img src={require("../../assets/logo.png")} width={"65"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage