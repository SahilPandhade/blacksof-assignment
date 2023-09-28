import React, { ChangeEvent, useState } from 'react'

const ContactForm = () => {
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        country: '',
        contactNumber: '',
        requirement: '',
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form values:', formState);
    };
    const handleInputChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    return (
        <div className="text-black container mx-auto p-10 bg-gradient-to-b from-white to-gray-300 w-100 rounded-2xl flex flex-col gap-5">
            <div className='flex flex-col gap-2'>
                <h2 className='font-bold'>Fill out the form</h2>
                <h3 className='text-[12px]'>Our team will touch base with you within 24 hours.</h3>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div>
                    <input
                        type="text"
                        name="fullName"
                        className="bg-transparent w-full p-2 border-b border-gray-500 placeholder-gray-400 focus:outline-none"
                        onChange={handleInputChange}
                        placeholder="Full Name*"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        className="bg-transparent w-full p-2 border-b border-gray-500 placeholder-gray-400 focus:outline-none"
                        onChange={handleInputChange}
                        placeholder="Email ID*"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="country"
                        className="bg-transparent w-full p-2 border-b border-gray-500 placeholder-gray-400 focus:outline-none"
                        onChange={handleInputChange}
                        placeholder="Country"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name='contactNumber'
                        className="bg-transparent w-full p-2 border-b border-gray-500 placeholder-gray-400 focus:outline-none"
                        onChange={handleInputChange}
                        placeholder="Contact Number"
                    />
                </div>
                <div className="col-span-2">
                    <textarea
                        name='requirement'
                        className="bg-transparent w-full p-2 border-b border-gray-500 placeholder-gray-400 focus:outline-none"
                        rows={4}
                        onChange={handleInputChange}
                        placeholder="Tell us your requirement*"
                    ></textarea>
                </div>
            </form>
            <div className="flex gap-2">
                <button type="submit" className="bg-gray-900 text-white py-2 px-4 rounded-3xl text-[12px] p-4 hover:bg-gray-500">
                    Submit
                </button>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-3xl w-10 h-10 flex items-center justify-center hover:bg-gray-500">
                    <span>&rarr;</span>
                </button>
            </div>
        </div>
    )
}

export default ContactForm