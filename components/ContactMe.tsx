import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '@/typings';
type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
  };

type Props = {
    pageInfo : PageInfo
}

function ContactMe({ pageInfo }: Props) {
    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData =>{
        window.location.href =`mailto:eshnithinyadav@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-12 uppercase xl:tracking-[20px] tracking-[15px] text-gray-500 text-2xl top">
                Contact
            </h3>

            <div className="flex flex-col space-y-4">
                <h4 className="xl:text-4xl text-2xl font-semibold text-center">
                    I have got just what you need.{" "}
                    <span className="decoration-[#F7AB0A]/50 underline">Lets talk.</span>
                </h4>
                <div className="xl:space-y-10 space-y-4 ">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 W-7 animate-pulse" />
                        <p className="xl:text-2xl text-lg">{pageInfo?.phoneNumber}</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 W-7 animate-pulse" />
                        <p className="xl:text-2xl text-lg">{pageInfo?.email}</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 W-7 animate-pulse" />
                        <p className="xl:text-2xl text-sm">{pageInfo?.address}</p>
                    </div>
                </div>

                <form autoComplete="off"
                 onSubmit={handleSubmit(onSubmit)}
                 className="flex flex-col  space-y-2 w-fit mx-auto" action="">
                    <div className="flex xl:flex-row xl:space-x-2 space-y-2 xl:space-y-0 flex-col ">
                        <input {...register("name")} placeholder="Name" className="contactInput" type="text"
                        autoComplete="" 
                        
                        />
                        <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
                    </div>
                    <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
                    <textarea {...register("message")} placeholder="Message" className="contactInput" />
                    <button className="bg-[#F7AB0A] py-3 xl:py-5 px-10 rounded-md text-black font-bold text-lg ml-2">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default ContactMe