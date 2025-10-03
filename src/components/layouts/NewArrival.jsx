import Container from "../Container";
import Product from "../Product";
import Flex from "../Flex";
import product1 from "/src/assets/Product1.png";
import product2 from "/src/assets/Product2.png";
import product3 from "/src/assets/Product3.png";
import product4 from "/src/assets/Product4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import axios from "axios";
import { useEffect, useState } from "react";

const NewArrival = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function allData() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    allData();
  }, []);

  return (
    <>
      <div className="">
        <Container>
          <h3 className="pb-4 font text-[39px] text-[#262626]">New Arrival</h3>
          <Slider {...settings}>
            {allData.map((item) => (
              <div className="px-2">
                <Product
                  productImg={item.thumbnail}
                  productBadge={item.category}
                  price={`$ ${item.price}`}
                  title={item.title}
                />
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
