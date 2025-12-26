import { useState } from "react";

export default function AddUserPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
    })

    const handleChange = (e)=>{        
        const {name, value} = e.target
        setFormData(prevState => (
            {...prevState, [name]: value}
        ))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

    }

  return (
    <div className="flex flex-col items-center">
      <div className="w-2/5 space-y-4">
        <div className="">
          <h1 className="font-bold text-xl">افزودن کاربر</h1>
        </div>
        <div className="w-full h-fit p-3 bg-gray-50 dark:bg-gray-500 shadow-md rounded-md">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex flex-col gap-2">
                <label>نام</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} className="border-2 border-gray-300 rounded-md p-2 hover:border-blue-400 focus:border-blue-400 focus:shadow-sm focus:shadow-blue-300 outline-none"/>
            </div>
            <div className="flex flex-col gap-2">
                <label>ایمیل</label>
                <input id="email" name="email" value={formData.email} onChange={handleChange} className="border-2 border-gray-300 rounded-md p-2 hover:border-blue-400 focus:border-blue-400 focus:shadow-sm focus:shadow-blue-300 outline-none"/>
            </div>
            <div className="flex flex-col gap-2">
                <label>شماره موبایل</label>
                <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border-2 border-gray-300 rounded-md p-2 hover:border-blue-400 focus:border-blue-400 focus:shadow-sm focus:shadow-blue-300 outline-none"/>
            </div>
            <div className="flex flex-col gap-2">
                <label>وب سایت</label>
                <input id="website" name="website" value={formData.website} onChange={handleChange} className="border-2 border-gray-300 rounded-md p-2 hover:border-blue-400 focus:border-blue-400 focus:shadow-sm focus:shadow-blue-300 outline-none"/>
            </div>
            <div className="w-full flex justify-center">
                <button type="submit" className="bg-blue-500 text-gray-50 px-5 py-1 rounded-md">ثبت</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
