import React, { useEffect, useRef } from 'react';
import '../css/textRun.css';

const TextRun = () => {
  
  return (
    <marquee behavior="scroll" direction="left">
        <p className='textRun'>offshore <span style={{color:'#4CA757'}}>Energy</span> installation </p>
    </marquee>
  );
};

export default TextRun;