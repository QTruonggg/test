import React from "react";
import Header from "../components/Header";
import ImageScroll from "../components/imgScroll";
import Banner from "../components/Banner";
import TextRun from "../components/TextRun";
import AMemBer from "../components/aMemBer";
import Empowring from "../components/EmPowRing";
import News from "../components/New";
import Footer from "../components/Footer";



const Home = () => {
    return ( 
        <>
            <Header/>
            <Banner/>
            <ImageScroll></ImageScroll>
            <TextRun></TextRun>

            <AMemBer></AMemBer>

            <Empowring></Empowring>

            <marquee behavior="scroll" direction="left">
                <p className='textRun'>building for <span style={{color:'#4CA757'}}>green</span> energy </p>
            </marquee>
              
            <News></News>
            <Footer></Footer>
        </>
     );
}
 
export default Home;
