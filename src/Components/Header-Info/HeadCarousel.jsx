import Carousel from "react-bootstrap/Carousel";
import slide from "../../Assets/Pics/slide1.jpg";
import slide2 from "../../Assets/Pics/slide2.jpg";
import slide3 from "../../Assets/Pics/slide3.jpg";
function HeaderCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={slide} alt="First slide" />
        <Carousel.Caption>
          <h1>Wherever You Go, Go With All Your Heart</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            voluptate, quibusdam obcaecati, nemo at quas aliquid repellendus
            odit ducimus dolore quia, voluptates, praesentium repudiandae hic
            maxime impedit earum! Alias, et
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>
        <h1>Wherever You Go, Go With All Your Heart</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            voluptate, quibusdam obcaecati, nemo at quas aliquid repellendus
            odit ducimus dolore quia, voluptates, praesentium repudiandae hic
            maxime impedit earum! Alias, et
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
        <h1>Wherever You Go, Go With All Your Heart</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            voluptate, quibusdam obcaecati, nemo at quas aliquid repellendus
            odit ducimus dolore quia, voluptates, praesentium repudiandae hic
            maxime impedit earum! Alias, et
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeaderCarousel;
