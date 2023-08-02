import React, { useState, useEffect } from 'react';
import banner1 from '../img/banner/banner1.png'
import banner2 from '../img/banner/banner2.png'
import banner3 from '../img/banner/banner3.png'
import bt1 from '../img/banner/bt1.png'
import bt2 from '../img/banner/bt2.png'
import bt3 from '../img/banner/bt3.png'
import bt1Active from '../img/banner/bt1Active.png'
import bt2Active from '../img/banner/bt2Active.png'
import bt3Active from '../img/banner/bt3Active.png'
import building from '../img/Building For.png'
import green from '../img/Green.png'
import energy from '../img/Energy.png'
import park from '../img/Group 427322938.png'
import conditions from '../img/Conditions.png'
import '../css/banner.css'



const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
    //     }, 3000);
    //     return () => {
    //       clearInterval(interval);
    //     };
    // }, []);

    return ( 
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
            <div className="carousel-indicators">
                <div data-target="#carouselExampleIndicators" data-slide-to="0" className={activeSlide === 0 ? 'active' : ''} onClick={() => handleSlideChange(0)}>
                    <img src={activeSlide === 0 ? bt1Active : bt1} alt="Slide 1"/>
                </div>
                <div data-target="#carouselExampleIndicators" data-slide-to="1" className={activeSlide === 1 ? 'active' : ''} onClick={() => handleSlideChange(1)}>
                    <img src={activeSlide === 1 ? bt2Active : bt2} alt="Slide 2"/>
                </div>
                <div data-target="#carouselExampleIndicators" data-slide-to="2" className={activeSlide === 2 ? 'active' : ''} onClick={() => handleSlideChange(2)}>
                    <img src={activeSlide === 2 ? bt3Active : bt3} alt="Slide 3"/>
                </div>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={banner1} alt="First slide"/>
                    <div className="carousel-caption">
                        <div className='banner-leftContent'>
                            <img src={building} alt='Building' style={{marginLeft:'12px', width:'100%'}}/>
                            <img src={green} alt='Green' style={{width:'49%'}}/>
                            <img src={energy} alt='Energy' style={{width:'48%', marginTop:'32px', marginLeft:'12px'}}/>
                        </div>
                        <div className='banner-rightContent'>
                            <p>
                                We provide types of services for Wind Farm projects in Vietnam. 
                                With <b>153+ MW of Wind</b> turbines installed since established, we are confident 
                                to provide the best services to our customer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={banner2} alt="Second slide"/>
                    <div className="carousel-caption">
                        <div className='banner-leftContent'>
                            <img src={park} alt='Park'/>
                        </div>
                        <div className='banner-rightContent'>
                            <p>
                                We provide types of services for Wind Farm projects in Vietnam. 
                                With <b>153+ MW of Wind</b> turbines installed since established, we are confident 
                                to provide the best services to our customer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={banner3} alt="Third slide"/>
                    <div className="carousel-caption">
                        <div className='banner-leftContent'>
                            <img src={conditions} alt='Conditions'/>
                        </div>
                        <div className='banner-rightContent'>
                            <p>
                                We provide types of services for Wind Farm projects in Vietnam. 
                                With <b>153+ MW of Wind</b> turbines installed since established, we are confident 
                                to provide the best services to our customer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;