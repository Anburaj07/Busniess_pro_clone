import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"


const SlidingImages = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 4000,
    };
  
    return (
      <div className="m-auto w-[80%] text-center mt-16">
        <h1 className="font-semibold text-2xl mb-8">FEATURED IN</h1>
        <Slider {...settings} justify="center">
          <div>
            <img src={img1} alt="Image1" />
          </div>
          <div>
            <img src={img2} alt="Image2" />
          </div>
          <div>
            <img src={img3} alt="Image3" />
          </div>
          <div>
            <img src={img4} alt="Image4" />
          </div>
          <div>
            <img src={img5} alt="Image5" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default SlidingImages;