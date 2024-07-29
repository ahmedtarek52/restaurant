// import React from 'react'

import { FaPhone } from "react-icons/fa6"
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <>
    <div className="text-white mt-20 ">
     <div className="container bg-gradient-to-b from-primary to-primaryDark  rounded-t-3xl"
     data-aos="fade-down">
      
            <h1 className="py-10 text-center text-3xl font-bold text-yellow">Contact Us</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
               <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <IoLocationSharp className="text-5xl "/>
                    </div>
                    <p>
                    #92, 3rd Main, Virgo Nagar, Post,
                   <br/> Seegehalli, Bengaluru, Karnataka 560049
                    </p>
               </div>
               <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <MdEmail className="text-5xl "/>
                    </div>
                    <p>
                    info@goodfood.com
                    <br/>hr@goodfood.com
                    </p>
               </div>
               <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <FaPhone className="text-5xl "/>
                    </div>
                    <p>
                    +91 9643224232 - Sales and Services
                    <br/>+91 9623423436 - Hiring Queries
                    <br/>+91 2345232445 - Whatsapp
                    </p>
               </div>
            </div>
        <div className="flex justify-between p-4 items-center">
            <p>
            © 2024 TCJ. All rights reserved
            </p>
            <div className="flex items-center gap-6">
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a>
            </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Footer