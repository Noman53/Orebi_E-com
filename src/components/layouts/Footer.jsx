import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F7F7F5]">
        <Container>
          <Flex className="justify-between items-start pt-16 pb-10 gap-x-20">
            {/* MENU */}
            <div>
              <h4 className="font-medium text-[18px] mb-6 tracking-wide">MENU</h4>
              <ul className="space-y-5 text-[15px] text-[#222]">
                {["Home", "Shop", "About", "Contact", "Journal"].map((item) => (
                  <li key={item} className="relative group cursor-pointer w-fit">
                    <Link to="#" className="transition-colors duration-200">{item}</Link>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-6 mt-8 text-[22px]">
                <a href="#" aria-label="Facebook" className="hover:text-[#222] transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#222] transition-colors">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-[#222] transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
            {/* SHOP */}
            <div>
              <h4 className="font-medium text-[18px] mb-6 tracking-wide">SHOP</h4>
              <ul className="space-y-5 text-[15px] text-[#222]">
                {["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"].map((item) => (
                  <li key={item} className="relative group cursor-pointer w-fit">
                    <Link to="#" className="transition-colors duration-200">{item}</Link>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                ))}
              </ul>
            </div>
            {/* HELP */}
            <div>
              <h4 className="font-medium text-[18px] mb-6 tracking-wide">HELP</h4>
              <ul className="space-y-5 text-[15px] text-[#222]">
                {["Privacy Policy", "Terms & Conditions", "Special E-shop", "Shipping", "Secure Payments"].map((item) => (
                  <li key={item} className="relative group cursor-pointer w-fit">
                    <Link to="#" className="transition-colors duration-200">{item}</Link>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                ))}
              </ul>
            </div>
            {/* CONTACT */}
            <div>
              <div className="font-bold text-[18px] mb-2 tracking-wide">(052) 611-5711</div>
              <div className="font-bold text-[15px] mb-2">company@domain.com</div>
              <div className="text-[15px] text-[#222] leading-[24px]">
                575 Crescent Ave. Quakertown, PA 18951
              </div>
            </div>
            {/* Logo */}
            <div className="flex items-start">
              <Image imgSrc={Logo} className="h-8 w-auto" />
            </div>
          </Flex>
        </Container>
        <div className="mt-10 pb-8">
          <Container>
            <div className="text-[15px] text-[#888] text-right">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
