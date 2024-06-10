import Carousel from "react-bootstrap/Carousel";
import Slide_1 from "../../Assets/Pics/lap1.png";
import Slide_2 from "../../Assets/Pics/lap2.png";
import Slide_3 from "../../Assets/Pics/lap3.png";
function ProductSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Slide_1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slide_2} alt="" />{" "}
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slide_3} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductSlider;
