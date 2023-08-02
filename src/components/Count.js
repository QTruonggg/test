import React, { useState, useEffect, useRef } from 'react';

const NumberCounter = (props) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef();
  const { text } = props;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      stopCounter();
    };
  }, []);

  const handleScroll = () => {
    const element = counterRef.current;
    if (!isCounting && isElementInView(element)) {
      startCounter();
    }
  };

  const isElementInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  const startCounter = () => {
    setIsCounting(true);
    const counterInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === props.count) {
          stopCounter(counterInterval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 500); // số chạy nhanh/chậm
  };

  const stopCounter = (intervalId) => {
    clearInterval(intervalId);
    setIsCounting(false);
  };

  return(
    <div style={{marginRight:'250px', width:'200px'}}>
      <div ref={counterRef} style={{display:'flex', fontSize: '100px', fontWeight:'700', color:'#C2E6D6', position:'relative' }}>{count}
          <span style={{position:'absolute', top:'-10px', right:'40px', fontSize:'75px'}}>+</span>
      </div>
      <div><p style={{fontSize:'16px', fontWeight:'400', lineHeight:'27px', textAlign:'left', color:'#fff'}}>{text}</p></div>
    </div>
    ) 
};

export default NumberCounter;