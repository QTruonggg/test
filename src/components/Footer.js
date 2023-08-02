import React from "react";
import '../css/footer.css'
import logoFooter from '../img/logoFooter.png'
import fb from '../img/fb.png'
import yt from '../img/yt.png'
import zl from '../img/zalo.png'
import insta from '../img/insta.png'
import tikt from '../img/tikt.png'
import arr from '../img/arrow.png'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-top">
                <div style={{width:'25%', paddingLeft:'20px'}}>
                    <img src={logoFooter}/>
                </div>
                <div className="menu-footer">
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Clients & partners</a>
                    <a href="#">News and event</a>
                    <a href="#">sustainability</a>
                    <a href="#">download profile company</a>
                </div>
                <div className="menu-footer">
                    <a href="#">Careers</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">FAQ</a>
                    <a href="#">Disclaimer</a>
                    <a href="#">privacy policy</a>
                </div>
                <div className="info-footer">
                    <h5>
                        Sign up for email to receive <br/> the latest information
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. <br/> Aliquam sed blandit rhoncus id dictum.
                    </p>
                    <input placeholder="Your email"></input>
                    <span><img src={arr}/></span>
                    <br/>
                    <a href="#"><img src={fb}/></a>
                    <a href="#"><img src={yt}/></a>
                    <a href="#"><img src={zl}/></a>
                    <a href="#"><img src={insta}/></a>
                    <a href="#"><img src={tikt}/></a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="bottom-content">
                    <div className="title-bottom">
                        <p>Address</p>
                    </div>
                    <div className="title-content">
                        <p>
                            2nd floor, No.44, 30/4 Rd., Ward 9, Vung Tau City, Vietnam
                        </p>
                    </div>
                </div>
                <div  className="bottom-content">
                    <div className="title-bottom">
                        <p>Contact</p>
                    </div>
                    <div className="title-content">
                        <p>(+84) 254 6295268</p>
                        <p>info@oei.com.vn</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;