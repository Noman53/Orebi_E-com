import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "45px",
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 2,
          pointerEvents: "auto",
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
      </div>
    ),
  };
  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        <div>
          <Link to="/shop">
            <div className="bg-[url(/src/assets/Banner.png)] h-[500px] bg-cover bg-no-repeat bg-center"></div>
          </Link>
        </div>
        <div>
          <Link to="/shop">
            <div className="bg-[url(/src/assets/Banner.png)] h-[500px] bg-cover bg-no-repeat bg-center"></div>
          </Link>
        </div>
        <div>
          <Link to="/shop">
            <div className="bg-[url(/src/assets/Banner.png)] h-[500px] bg-cover bg-no-repeat bg-center"></div>
          </Link>
        </div>
        <div>
          <Link to="/shop">
            <div className="bg-[url(/src/assets/Banner.png)] h-[500px] bg-cover bg-no-repeat bg-center"></div>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
