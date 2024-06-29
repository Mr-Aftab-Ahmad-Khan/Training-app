import React, { useEffect, useRef, useState } from 'react';
import styles from './ModalBox.module.css';
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from 'react-router-dom';

const ModalBox = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (window.scrollY >= 1000 && window.scrollY <= 1200 && !isShown) {
        section.classList.add(styles.modalBoxActive);
        setIsShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const overlay = overlayRef.current;
    const closeBtn = closeBtnRef.current;

    const handleClose = () => {
      const section = sectionRef.current;
      section.classList.remove(styles.modalBoxActive);
    };

    overlay.addEventListener('click', handleClose);
    closeBtn.addEventListener('click', handleClose);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      overlay.removeEventListener('click', handleClose);
      closeBtn.removeEventListener('click', handleClose);
    };
  }, [isShown]);

  return (
    <section className={styles.modalBoxSection} ref={sectionRef}>
      <span className={styles.modalBoxOverlay} ref={overlayRef}></span>

      <div className={styles.modalBoxContent}>
        <HiOutlineLightBulb size={70}/>
        <h2>Have Any Idea</h2>
        <h3>Get Free Consultation Appoitment</h3>

        <div className={styles.modalBoxButtons}>
          <button className={styles.modalBoxCloseBtn} ref={closeBtnRef}>Close</button>
          <Link to='/ContactUs'><button>Consultation</button></Link>
        </div>
      </div>
    </section>
  );
};

export default ModalBox;
