import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { FormContext } from "../../../App"

type Props = {
    setFristName: React.Dispatch<React.SetStateAction<string>>
    setLastName: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
}


const PersonalInfoPage = ({ setFristName, setLastName, setEmail }: Props) => {

    const { formData, setFormData } = useContext(FormContext)

    function firstName(e: React.ChangeEvent<HTMLInputElement>){
        const firstName = e.target.value
        setFristName(firstName)
        setFormData({...formData, firstName: firstName})
    }

    function lastName(e: React.ChangeEvent<HTMLInputElement>){
        const lastName = e.target.value
        setLastName(lastName)
        setFormData({...formData, lastName: lastName})
    }

    function email(e: React.ChangeEvent<HTMLInputElement>){
        const email = e.target.value
        setEmail(email)
        setFormData({...formData, email: email})
    }

    return (
        <>
            <form action="">
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* First Name</label>
                        <input type="text" onChange={(e) => firstName(e)} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="Kenneth" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Last Name</label>
                        <input type="text" onChange={(e) => lastName(e)} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="Lartey" />
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Email</label>
                        <input type="text" onChange={(e) => email(e)} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="someone@gmail.com" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Mobile Phone</label>
                        <input type="text" onChange={(e) => { setFormData({ ...formData, msisdn: e.target.value})}} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="+233268211334" />
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Actual Address</label>
                        <input type="text" onChange={(e) => { setFormData({ ...formData, address: e.target.value})}} className="rounded-lg h-10 px-4 text-sm outline-none" placeholder="Haatso" />
                    </div>
                    <div className="flex w-[88%]">
                        <div className="w-[80%]">
                            <label htmlFor="" className="text-gray-600 text-sm mb-4">* Date of birth</label>
                            {/* <DatePicker selected={date} onChange={(date):ReactDatePickerProps<never, undefined>=> setDate(date)} className="rounded-lg"/> */}
                            <input type="text" className="rounded-lg h-10 w-[100%]" />
                        </div>
                        <div className="mx-2 w-[50%]">
                            <label htmlFor="" className="text-gray-600 text-sm mb-4">* Gender</label>
                            <select onChange={(e)=>{ setFormData({ ...formData, gender: e.target.value})}} className="rounded-lg h-10 w-[100%] bg-white outline-none">
                                <option value="male">male</option>
                                <option value="femail">female</option>
                            </select>
                        </div>
                        <div className="w-[60%]">
                            <label htmlFor="" className="text-gray-600 text-sm mb-4">* Marital Status</label>
                            <select onChange={(e)=>{ setFormData({ ...formData, maritalStatus: e.target.value})}} className="rounded-lg h-10 w-[100%] bg-white outline-none">
                                <option value="single">single</option>
                                <option value="married">married</option>
                                <option value="s">searching</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Emmergency contact name</label>
                        <input type="text" onChange={(e) => { setFormData({ ...formData, emergencyContactName: e.target.value})}} className="rounded-lg h-10 text-sm px-4 outline-none" placeholder="Stacy" />
                    </div>
                    <div className="flex flex-col w-[88%]">
                        <label htmlFor="" className="text-gray-600 text-sm mb-4">* Emergency contact number</label>
                        <input type="text" onChange={(e) => { setFormData({ ...formData, emergencyContactNumber: e.target.value})}} className="rounded-lg h-10 text-sm px-4 outline-none" placeholder="+233268211333" />
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