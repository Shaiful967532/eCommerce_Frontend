import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            OnlineShopping was born from a passion for innovation and a vision
            to transform the way people shop online. Our journey began with a
            simple goal: to create a reliable platform where customers can
            easily discover, explore, and purchase a wide range of products from
            the comfort of their homes.
          </p>
          <p>
            Since our inception, we have worked tirelessly to curate a diverse
            collection of high-quality products that suit every style and need.
            From fashion and beauty to electronics and home essentials, we offer
            an extensive range sourced from trusted brands and verified
            suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at OnlineShopping is to empower customers with choice,
            convenience, and confidence. We are committed to delivering a
            smooth, secure, and enjoyable shopping experience — from effortless
            browsing and easy ordering to fast, reliable delivery and dedicated
            customer support.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Ouality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
