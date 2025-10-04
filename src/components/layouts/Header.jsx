import { useState, useRef, useEffect } from "react";
import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const products = [
  "Black T-shirt",
  "White Sneakers",
  "Leather Wallet",
  "Blue Jeans",
  "Red Dress",
  "Green Hoodie",
  "Yellow Scarf",
  "Brown Boots",
  "Silver Watch",
  "Pink Sunglasses",
];

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const navigate = useNavigate();
  const categoryRef = useRef(null);

  // Click outside to close category menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target)
      ) {
        setShowCategory(false);
      }
    }
    if (showCategory) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCategory]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 0) {
      const filtered = products.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = (keyword) => {
    const query = keyword || search;
    if (query.trim().length === 0) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (item) => {
    setSearch(item);
    handleSearch(item);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* Main navigation bar */}
      <div className="py-8 bg-[#FFFFFF]">
        <Container>
          <Flex>
            <div>
              <Link to={'/'}>
                <Image imgSrc={Logo} />
              </Link>
            </div>
            <div className="m-auto">
              <ul className="flex gap-x-10 font-medium text-[14px] text-[#000000] uppercase">
                <Link to={"/"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Home</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
                <Link to={"shop"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Shop</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
                <Link to={"about"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">About</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
                <Link to={"contacts"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Contacts</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
                <Link to={"journal"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Journal</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Category, Search, Icons bar */}
      <div className="bg-[#F5F5F3] py-7">
        <Container>
          <Flex className="justify-between items-center">
            {/* Left: Shop by Category */}
            <div className="relative flex items-center gap-3" ref={categoryRef}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowCategory((prev) => !prev)}
              >
                <HiMenuAlt2 className="text-[22px] text-[#000000]" />
                <span className="text-[14px] text-[#262626] font-normal">Shop by Category</span>
              </div>
              {/* Category dropdown menu */}
              {showCategory && (
                <div className="absolute left-0 top-[40px] w-[140px] bg-white border border-[#e5e5e5] rounded-lg shadow-lg z-20 p-4">
                  <ul className="flex flex-col gap-2">
                    <Link to={"/"}>
                      <li className="cursor-pointer hover:bg-[#2dbae9] px-2 py-1 rounded">Beauty</li>
                    </Link>
                    <Link to={"/"}>
                      <li className="cursor-pointer hover:bg-[#2dbae9] px-2 py-1 rounded">Fragrances</li>
                    </Link>
                    <Link to={"/"}>
                      <li className="cursor-pointer hover:bg-[#2dbae9] px-2 py-1 rounded">Furniture</li>
                    </Link>
                    <Link to={"/"}>
                      <li className="cursor-pointer hover:bg-[#2dbae9] px-2 py-1 rounded">Groceries</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            {/* Center: Search */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-[420px]">
                <input
                  type="text"
                  placeholder="Search Products"
                  value={search}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-full h-[56px] pl-6 pr-12 bg-white rounded-none outline-none border-none text-[16px] text-[#888] placeholder:text-[#bbb] font-normal"
                  autoComplete="off"
                />
                <FiSearch
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px] text-[#222] cursor-pointer"
                  onClick={() => handleSearch()}
                />
                {/* Suggestions dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <ul className="absolute left-0 top-[60px] w-full bg-white shadow-lg z-10 border border-[#eee] rounded-sm">
                    {suggestions.map((item) => (
                      <li
                        key={item}
                        className="px-6 py-3 text-[#222] cursor-pointer hover:bg-[#F7F7F5] transition-colors"
                        onClick={() => handleSuggestionClick(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {/* No results */}
                {showSuggestions && search.length > 0 && suggestions.length === 0 && (
                  <div className="absolute left-0 top-[60px] w-full bg-white shadow-lg z-10 border border-[#eee] rounded-sm px-6 py-3 text-[#888]">
                    No results found.
                  </div>
                )}
              </div>
            </div>
            {/* Right: Icons */}
            <div className="flex items-center gap-10">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                <FiUser className="text-[20px] text-[#222]" />
                <IoMdArrowDropdown className="text-[18px] text-[#222]" />
              </div>
              <FiShoppingCart className="text-[22px] text-[#222] cursor-pointer" />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-96 relative">
            {/* Close button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              Close
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
