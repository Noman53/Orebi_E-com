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

const NewArrival = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <>
      <div className="">
        <Container>
          <h3 className="pb-4 font text-[39px] text-[#262626]">New Arrival</h3>
            <Slider {...settings}>
              <div>
                <Product productImg={product1} productBadge={"10%"} />
              </div>
              <div>
                <Product productImg={product2} productBadge={"New"} />
              </div>
              <div>
                <Product productImg={product3} productBadge={"New"} />
              </div>
              <div>
                <Product productImg={product4} productBadge={"New"} />
              </div>
               <div>
                <Product productImg={product2} productBadge={"New"} />
              </div>
            </Slider>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
