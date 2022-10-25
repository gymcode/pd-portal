import React from 'react'
import { NavLink } from "react-router-dom"
import { FormContext } from "../../../App"

type InputTypeProps = {
    e: React.ChangeEvent<HTMLInputElement>
    type: string
}

const LicenseInfoPage = () => {
    const { formData, setFormData } = React.useContext(FormContext)

    function onInputChange({ e, type }: InputTypeProps) {
        const data = { ...formData, [type]: e.target.value }
        setFormData(data)
    }
    return (
        <>
            <form action="">
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%] pb-3">
                    <label htmlFor="" className="text-gray-600 text-sm mb-4">* Driver's license front</label>
                        <div className="flex justify-center items-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="" />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col w-[88%]">
                    <label htmlFor="" className="text-gray-600 text-sm mb-4">* Driver's license back</label>
                        <div className="flex justify-center items-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Driver's license number</label>
                        <input type="text" onChange={(e) => onInputChange({ e, type: "license" })} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="Haatso" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Driver's license expiration date</label>
                        <input type="text" onChange={(e) => onInputChange({ e, type: "expirationDate" })} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="+233268211334" />
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Vehicle type</label>
                        <input type="text" onChange={(e) => onInputChange({ e, type: "vehicleType" })} className="rounded-lg h-10 text-sm px-4 outline-none" placeholder="Stacy" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* National ID(Ghana Card)</label>
                        <input type="text" onChange={(e) => onInputChange({ e, type: "nationalID" })} className="rounded-lg h-10 text-sm px-4 outline-none" placeholder="+233268211333" />
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