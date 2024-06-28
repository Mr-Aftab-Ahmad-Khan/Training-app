import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide_1 from '../../Assets/Pics/lap1.png';
import Slide_2 from '../../Assets/Pics/lap2.png';
import Slide_3 from '../../Assets/Pics/lap3.png';
import Styles from './ProductSlider.module.css'; // Import your custom CSS for styling
import './sliderHandler.css'

const ProductSlider = () => {
  return (
    <>
      <section className="space_above">
      </section>
      <Carousel className={`${Styles.custom_carousel} ${Styles.hide_controls_sm}`}>
        <Carousel.Item>
          <div className={Styles.slide_container}>
            <img src={Slide_1} alt="Slide 1" className={Styles.img_fluid} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.slide_container}>
            <img src={Slide_2} alt="Slide 2" className={Styles.img_fluid} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.slide_container}>
            <img src={Slide_3} alt="Slide 3" className={Styles.img_fluid} />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ProductSlider;
