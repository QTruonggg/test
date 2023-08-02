import React from 'react';
import { Fade } from 'react-reveal';
import about1 from '../img/aboutUs/about1.png'
import about2 from '../img/aboutUs/about2.png'
import about3 from '../img/aboutUs/about3.png'
import about4 from '../img/aboutUs/about4.png'
import greenTop from '../img/aboutUs/greenTop.png'
import bottomR from '../img/aboutUs/bottomR.png'
import bottomL from '../img/aboutUs/bottomL.png'

const ImageScroll = () => {

  return (
    <div style={{marginTop:'150px', display:'flex', width:'100%'}}>
      <div className='content-left' style={{width:'30%', paddingLeft:'70px', paddingTop:'120px'}}>
        <Fade left>
          <p style={{fontSize:'18px',fontWeight:'600', lineHeight: '40px', color: '#376A66'}}>ABOUT US</p>
          <p style={{fontSize:'38px', fontWeight:'700', lineHeight:'50px', color:'#3A5469'}}>
              <span style={{color:'#4CA757'}}>Offshore Energy <br/> Installation</span> <br/> OEI is your gateway to <br/> renewable energy and  
              <span style={{color:'#4CA757'}}> Oil</span> <br/> & <span style={{color:'#4CA757'}}>Gas</span> solutions.
          </p>
        </Fade>
      </div>

      <div style={{display: 'flex', justifyContent: 'right', alignItems: 'center', width:'70%'}}>
        <Fade left>
          <div style={{display:'grid'}}>
            <img src={about2} alt=""/>
            <div style={{height:'65px', marginBottom:'100px'}}></div>
            <img src={bottomL} alt="" />
          </div>
          <div style={{display:'grid', justifyItems:'end', marginTop:'150px'}}>
            <img src={about1} alt="" style={{paddingBottom:'8px'}} />
            <img src={about4} alt="" />
          </div>
        </Fade>
        <Fade right>
          <div style={{display:'grid'}}>
            <img src={greenTop} alt="" />
            <br></br>
            <img src={about3} alt="" style={{paddingLeft:'8px'}}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={bottomR} alt="" style={{paddingLeft:'8px', paddingTop:'4px'}}/>
          </div>
        </Fade>
      </div>

    </div>
    
  );
};

export default ImageScroll;