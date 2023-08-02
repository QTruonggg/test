import React, { useState, useEffect } from "react";
import '../css/new.css';
import see from '../img/seemore.png';
import new1 from '../img/newS/new1.png'
import new2 from '../img/newS/new2.png'
import new3 from '../img/newS/new3.png'
import new4 from '../img/newS/new4.png'


const News = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        showSlide(slideIndex);
      }, [slideIndex]);
    

      function showSlide(n) {
        const slides = document.getElementsByClassName("slide-new");
      
        if (n >= slides.length) {
          setSlideIndex(0);
        } else if (n < 0) {
          setSlideIndex(slides.length - 1);
        }
      
        const slidePosition = -slideIndex * 100;
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.transform = `translateX(${slidePosition}%)`;
        }
      }
      function changeSlide(n) {
        setSlideIndex((prevIndex) => prevIndex + n);
      }
    

return (
    <div className="news">
        <div>
            <div style={{float:'left'}}>
                <p style={{color:'#376A66'}}>NEWS</p>
                <p style={{fontSize:'50px', lineHeight:'80px', fontWeight:'700', color:'#4CA757'}}>Lastest News</p>
            </div>
            <div style={{float:'right'}}>
                <a href="#"><img src={see}/></a>
            </div>
        </div>


        <div className="slideshow-container-new">
            <div className="slide-new">
                <div className="new-content">
                    <img src={new1} alt="Ảnh news" style={{width:'100%', height:'260px', objectFit:'cover'}} />
                    <p className="slide-text-new">
                        <p>
                            26.04.2022 / EVENT
                        </p>
                        Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.
                        <br/>
                    <a href="#" className="link-news">SEE MORE +</a>
                    </p>
                </div>
            </div>
            <div className="slide-new">
                <div className="new-content">
                    <img src={new2} alt="Ảnh news" style={{width:'100%', height:'260px', objectFit:'cover'}} />
                    <p className="slide-text-new">
                        <p>
                            26.04.2022 / EVENT
                        </p>
                        Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet. 
                        <br/>
                    <a href="#" className="link-news">SEE MORE +</a>
                    </p>
                </div>
            </div>
            <div className="slide-new">
                <div className="new-content">
                    <img src={new3} alt="Ảnh news" style={{width:'100%', height:'260px', objectFit:'cover'}} />
                    <p className="slide-text-new">
                        <p>
                            26.04.2022 / EVENT
                        </p>
                        Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.
                        <br/>
                    <a href="#" className="link-news">SEE MORE +</a>
                    </p>
                </div>
            </div>
            <div className="slide-new">
                <div className="new-content">
                    <img src={new4} alt="Ảnh news" style={{width:'100%', height:'260px', objectFit:'cover'}} />
                    <p className="slide-text-new">
                        <p>
                            26.04.2022 / EVENT
                        </p>
                        Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.
                        <br/>
                    <a href="#" className="link-news">SEE MORE +</a>
                    </p>
                </div>
            </div>
            <div className="slide-new">
                <div className="new-content">
                    <img src={new2} alt="Ảnh news" style={{width:'100%', height:'260px', objectFit:'cover'}} />
                    <p className="slide-text-new">
                        <p>
                            26.04.2022 / EVENT
                        </p>
                        Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.
                        <br/>
                    <a href="#" className="link-news">SEE MORE +</a>
                    </p>
                </div>
            </div>
            <div className="slide-new">
                <div className="new-content">
                    <img src={new1} alt="Ảnh news" style={{width:'100%', height:'260px', objectFit:'cover'}} />
                    <p className="slide-text-new">
                        <p>
                            26.04.2022 / EVENT
                        </p>
                        Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.
                        <br/>
                    <a href="#" className="link-news">SEE MORE +</a>
                    </p>
                </div>
            </div>
            <div className="slide-new">
                <div className="new-content">
                    <img src={new4} alt="Ảnh news" style={{width:'100%', height:'260px', objectFit:'cover'}} />
                    <p className="slide-text-new">
                        <p>
                            26.04.2022 / EVENT
                        </p>
                        Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.
                        <br/>
                    <a href="#" className="link-news">SEE MORE +</a>
                    </p>
                </div>
            </div>
            <div className="slide-new">
                <div className="new-content">
                    <img src={new3} alt="Ảnh news" style={{width:'100%', height:'260px', objectFit:'cover'}} />
                    <p className="slide-text-new">
                        <p>
                            26.04.2022 / EVENT
                        </p>
                        Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.
                        <br/>
                    <a href="#" className="link-news">SEE MORE +</a>
                    </p>
                </div>
            </div>



        </div>
        <div style={{display:'flex', width:'100%', alignItems:'center'}}>
            <div style={{width:'15%'}}>
            <button
            className="prev-new"
            onClick={() => changeSlide(-1)}
            disabled={slideIndex === 0}
            style={{ opacity: slideIndex === 0 ? 0.5 : 1 }}
          >
            &#10094;
          </button>
          <button
            className="next-new"
            onClick={() => changeSlide(1)}
            disabled={slideIndex === 4}
            style={{ opacity: slideIndex === 4 ? 0.5 : 1 }}
          >
            &#10095;
          </button>
            </div>
            <div part="pagination-new" className="swiper-pagination-new swiper-pagination-progressbar swiper-pagination-horizontal">
                    <span
                        className="swiper-pagination-progressbar-fill-new"
                        style={{ transform: `scaleX(${(slideIndex / 4) * 100 / 100})`}}
                    ></span>
            </div>
        </div>



    </div>
    );
};

export default News;