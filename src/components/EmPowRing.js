import React from 'react';
import '../css/empowring.css'
import { Fade } from 'react-reveal';
import imgL1 from '../img/empowring/imageL1.png'
import imgL2 from '../img/empowring/imageL2.png'
import imgL3 from '../img/empowring/imageL3.png'
import imgR1 from '../img/empowring/imageR1.png'
import imgR2 from '../img/empowring/imageR2.png'
import imgR3 from '../img/empowring/imageR3.png'
import btL from '../img/empowring/btL.png'
import btR from '../img/empowring/btR.png'



const Empowring = () => {
    return ( 
        <div className="empowring">
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <p>Our Comprehensive Service</p>
                    <p>Empowring <br/> Sustainability</p>
                </div>
                <div style={{paddingRight:'250px', display:'flex' }}>
                    <Fade left>
                        <ul>
                            <li>
                                <img src={imgL2} />
                            </li>
                            <li>
                                <img src={imgL2} />
                            </li>
                        </ul>
                    </Fade>
                    <Fade right>
                        <ul>
                            <li>
                                <img src={imgR2} />
                            </li>
                        </ul>
                    </Fade>
                </div>
            </div>

            <div style={{justifyContent:'center', display:'flex'}}>
                <Fade left>
                    <ul>
                        <li>
                            <img src={imgL2} />
                        </li>
                        <li>
                            <img src={imgL1} />
                        </li>
                    </ul>
                </Fade>
                <Fade right>
                    <ul>
                        <li>
                            <img src={imgR1} />
                        </li>
                        <li>
                            <img src={imgR2} />
                        </li>
                    </ul>
                </Fade>
            </div>
            <div style={{justifyContent:'center', display:'flex'}}>
                <Fade left>
                    <ul>
                        <li>
                            <img src={imgR2} />
                        </li>
                        <li>
                            <img src={btL} />
                        </li>
                    </ul>
                </Fade>
                <Fade right>
                    <ul>
                        <li>
                            <img src={imgR3} />
                        </li>
                        <li>
                            <img src={btR} />
                        </li>
                    </ul>
                </Fade>
            </div>

        </div>
     );
}
 
export default Empowring;