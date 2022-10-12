import React from 'react'
import { NavLink } from "react-router-dom"
import DatePicker, { ReactDatePickerProps } from "react-datepicker"

type Props = {
    setFristName: React.Dispatch<React.SetStateAction<string>>
    setLastName: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
}


const PersonalInfoPage = ({setFristName, setLastName, setEmail}: Props) => {
    const [date, setDate] = React.useState(new Date())
    return (
        <>
            <form action="">
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* First Name</label>
                        <input type="text" onChange={(e)=> setFristName(e.target.value)} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="Kenneth" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Last Name</label>
                        <input type="text" onChange={(e)=> setLastName(e.target.value)} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="Lartey" />
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Email</label>
                        <input type="text" onChange={(e)=> setEmail(e.target.value)} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="someone@gmail.com" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Mobile Phone</label>
                        <input type="text" className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="+233268211334" />
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Actual Address</label>
                        <input type="text" className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="Haatso" />
                    </div>
                    <div className="flex w-[88%]">
                        <div className="w-[80%]">
                            <label htmlFor="" className="text-gray-600 text-sm mb-4">* Date of birth</label>
                            {/* <DatePicker selected={date} onChange={(date):ReactDatePickerProps<never, undefined>=> setDate(date)} className="rounded-lg"/> */}
                            <input type="text" className="rounded-lg h-10 w-[100%]" />
                        </div>
                        <div className="mx-2 w-[50%]">
                            <label htmlFor="" className="text-gray-600 text-sm mb-4">* Gender</label>
                            <select name="" id="" className="rounded-lg h-10 w-[100%] bg-white outline-none">
                                <option value="MALE">male</option>
                                <option value="FEMALE">female</option>
                            </select>
                        </div>
                        <div className="w-[60%]">
                            <label htmlFor="" className="text-gray-600 text-sm mb-4">* Marital Status</label>
                            <select name="" id="" className="rounded-lg h-10 w-[100%] bg-white outline-none">
                                <option value="SINGLE">single</option>
                                <option value="MARRIED">married</option>
                                <option value="SERCHING">searching</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Emmergency contact name</label>
                        <input type="text" className="rounded-lg h-10 text-sm px-4 outline-none" placeholder="Stacy" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Emergency contact number</label>
                        <input type="text" className="rounded-lg h-10 text-sm px-4 outline-none" placeholder="+233268211333" />
                    </div>
                </div>
                <div className="flex justify-end w-[94%] mt-5">
                    <NavLink to={"/register/license"}>
                        <div className="w-44 text-sm rounded-xl h-10 bg-[#FF8B00] text-white cursor-pointer flex justify-center items-center font-semibold">
                            Save and Continue
                        </div>
                    </NavLink>
                </div>
            </form>
        </>
    )
}

export default PersonalInfoPage