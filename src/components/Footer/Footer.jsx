import React from "react";
// import footerLogo from "../../assets/logo.png";
// import Banner from "../../assets/website/footer-pattern.jpg";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: "bottom",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container">
        <div data-aos="zoom-in" className="grid pt-5 md:grid-cols-3 pb-44">
          {/* company details */}
          <div className="px-4 py-8">
            <h1 className="flex items-center gap-1 mb-3 text-xl font-bold text-justify text-blue-400 sm:text-3xl sm:text-left">
              <FiShoppingBag size="30" />
              {/* <img src={footerLogo} alt="" className="max-w-[50px]" /> */}
              ShopMe
            </h1>
            <p>
              At Shopeme, we believe in making your shopping experience
              seamless, enjoyable, and rewarding. From stylish fashion pieces to
              everyday essentials, our curated collection offers the best in
              quality and design.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaMapLocationDot />
                  <p>259(1)Olaipatti, Steel Plant, Salem-636030</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoCall />
                  <p>+91 9042540998</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
