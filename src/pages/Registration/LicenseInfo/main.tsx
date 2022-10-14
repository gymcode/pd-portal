import React from 'react'
import { NavLink } from "react-router-dom"
import { FormContext } from "../../../App"

type InputTypeProps = {
    e: React.ChangeEvent<HTMLInputElement>
    type: string
}

const LicenseInfoPage = () => {
    const {formData, setFormData} = React.useContext(FormContext)

    function onInputChange({e, type}: InputTypeProps){
        const data = {...formData, [type]:e.target.value} 
        setFormData(data)
    }
    return (
        <>
            <form action="">
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="file" className="text-gray-600 text-sm mb-4">* First Name</label>
                        <input type="file" id="file" onChange={(e)=> onInputChange({e, type: "dl_front"})} className="border-none rounded-lg h-10 px-4 text-sm outline-none" placeholder="Kenneth" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Last Name</label>
                        <input type="file" onChange={(e)=> onInputChange({e, type: "dl_front"})} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="Lartey" />
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Driver's license number</label>
                        <input type="text" onChange={(e)=> onInputChange({e, type: "license"})}  className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="Haatso" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Driver's license expiration date</label>
                        <input type="text" onChange={(e)=> onInputChange({e, type: "expirationDate"})} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="+233268211334" />
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Vehicle type</label>
                        <input type="text" onChange={(e)=> onInputChange({e, type: "vehicleType"})} className="rounded-lg h-10 text-sm px-4 outline-none" placeholder="Stacy" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* National ID(Ghana Card)</label>
                        <input type="text" onChange={(e)=> onInputChange({e, type: "nationalID"})} className="rounded-lg h-10 text-sm px-4 outline-none" placeholder="+233268211333" />
                    </div>
                </div>
                <div className="flex justify-between w-[94%] mt-6">
                    <NavLink to={"/register/personal"}>
                        <div className="w-24 border border-[#695DEF] text-sm rounded-xl h-10 text-[#695DEF] text-white cursor-pointer flex justify-center items-center font-semibold">
                            Back
                        </div>
                    </NavLink>
                    <NavLink to={"/register/license"}>
                        <div className="w-44 text-sm rounded-xl h-10 bg-[#FF8B00] text-white cursor-pointer flex justify-center items-center font-semibold">
                            Complete
                        </div>
                    </NavLink>
                </div>
            </form>
        </>
    )
}

export default LicenseInfoPage