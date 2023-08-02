import React, { useState, useEffect } from "react";
import NumberCounter from "./Count";
import '../css/member.css';
import { Fade } from 'react-reveal';
import nof from '../img/amember/NOF.png'
import brit from '../img/amember/Brit.png'
import gwec from '../img/amember/GWEC.png'
import nofAt from '../img/amember/nofAt.png'
import britAt from '../img/amember/britAt.png'
import gwecAt from '../img/amember/gwecAt.png'


const AMemBer = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlide(slideIndex);
  }, [slideIndex]);

  function showSlide(n) {
    const slides = document.getElementsByClassName("slide-test");
    const buttons = document.getElementsByClassName("slide-btn-test");

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active-test");
    }

    slides[slideIndex - 1].style.display = "block";
    buttons[slideIndex - 1].classList.add("active-test");
  }

  function changeSlide(n) {
    let newIndex = slideIndex + n;

    if (newIndex > 3) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = 3;
    }

    setSlideIndex(newIndex);
  }

  function cSlide(n) {
    setSlideIndex(n);
  }

  return (
    <div className="aMemberOf">
        <div>
            <div className="btn-img">
                <div className={`slide-btn-test ${slideIndex === 1 ? 'active-test' : ''}`} onClick={() => cSlide(1)}>
                    <img src={slideIndex === 1 ? nofAt : nof} alt="NOF"/>
                </div>
                <div className={`slide-btn-test ${slideIndex === 2 ? 'active-test' : ''}`} onClick={() => cSlide(2)}>
                    <img src={slideIndex === 2 ? britAt : brit} alt="NOF"/>
                </div>
                <div className={`slide-btn-test ${slideIndex === 3 ? 'active-test' : ''}`} onClick={() => cSlide(3)}>
                    <img src={slideIndex === 3 ? gwecAt : gwec} alt="NOF"/>
                </div>
            </div>
            <div>
                <p style={{color:'#fff'}}>WE ARE</p>
                <Fade bottom>
                    <p style={{fontSize:'50px', lineHeight:'80px', fontWeight:'700', color:'#fff'}}>A MEMBER OF</p>
                </Fade>
            </div>
            <div className="slideshow-container-test">
                <div className="slide-test">
                    <Fade bottom>
                        <p className="slide-text">
                            A business development organisation helping to make valuable connections 
                            between businesses in the global energy sector.
                        </p>
                    </Fade>
                </div>
                <div className="slide-test">
                    <Fade bottom>
                        <p className="slide-text">
                            A business development organisation helping to make valuable connections 
                            between businesses in the global energy sector.
                        </p>
                    </Fade>
                </div>
                <div className="slide-test">
                    <Fade bottom>
                        <p className="slide-text">
                            A business development organisation helping to make valuable connections 
                            between businesses in the global energy sector.
                        </p>
                    </Fade>
                </div>

                <button className="prev-test" onClick={() => changeSlide(-1)}>&#10094;</button>
                <button className="next-test" onClick={() => changeSlide(1)}>&#10095;</button>

            </div>
        </div>

        <div className="amember-content">
            <p>Company value reflects its ability to generate future <br/> profits, management, and market position.</p>
        </div>

        <div className="count-auto">
            <NumberCounter count={2} text={'FOUNDED YEAR'}></NumberCounter>
            <NumberCounter count={20} text={'PERSONNEL'}></NumberCounter>
            <NumberCounter count={14} text={'PROJECTS'}></NumberCounter>
            <NumberCounter count={20} text={'CLINETS & PARTNERS'}></NumberCounter>
        </div>
    </div>
  );
}

export default AMemBer;