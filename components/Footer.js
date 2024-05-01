import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/assets/cooliebg.png" alt="footer lgo" height={400} width={100}/>
          <p className="text-center lg:text-start">Model Engineering College ,<br/>Thrikkakara ,<br/>Ernakulam ,<br/>Kerala ,<br/>India <br/>+91 1234567890</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Company</p>
          <a href="#about"><p className="text-base">About Us</p></a>
          <p className="text-base">Blog</p>
          <p className="text-base">Support</p>
        
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Quick Links</p>
          <p className="text-base">Services</p>
          <p className="text-base">Pricing</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Legal</p>
          <p className="text-base">Terms & Conditions</p>
          <p className="text-base">Privacy policy</p>
        </div>
        <div className="flex items-center gap-5">
                <a href="https://www.instagram.com/alias_benny?igsh=MTFoaWZ4b3p3enplMQ==" target="_blank"><BsFacebook className="text-3xl text-gray-500"/></a>
                <a href="https://www.instagram.com/alias_benny?igsh=MTFoaWZ4b3p3enplMQ==" target="_blank"><BsTwitter className="text-3xl text-gray-500"/></a>
                <a href="https://www.instagram.com/alias_benny?igsh=MTFoaWZ4b3p3enplMQ==" target="_blank"><BsInstagram className="text-3xl text-gray-500"/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
