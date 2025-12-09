import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full text-justify md:w-2/3 text-gray-600 justify-">
            We are committed to bringing you high-quality products carefully
            selected to meet your everyday needs. From the latest trends to
            essential items, we focus on offering great value, secure payments,
            and reliable delivery. Our goal is to create a smooth, trustworthy,
            and enjoyable shopping experience for every customer.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+8801631967532</li>
            <li>onlineshopping@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-700">
        <hr className="border-gray-200" />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 onlineshopping.com. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
