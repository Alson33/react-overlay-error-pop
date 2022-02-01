import React, { RefObject, useEffect, useRef } from 'react';
import { closePop } from '../helpers/popup';
import '../styles/normalpop.module.css';

const NormalPop = (
    { message, type, delay }: 
    { message: String, type: 'error'|'warning', delay?: number }
  ) => {

  const normalpopRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closePopTime = setTimeout(() => closePop(normalpopRef), delay||4000)

    return () => clearTimeout(closePopTime)
  // eslint-disable-next-line
  }, [])

  return (
        <div 
          ref={normalpopRef}
          className='normal-error--pop'
          style={{
            backgroundColor: type==='error'?'#f8d7da':'#fff3cd',
            color: type==='error'?'#842029':'#664d03',
            borderColor: type==='error'?'#f5c2c7':'#ffecb5',
          }}
        >
            <p>{message}</p>
            <span className='times-icon' onClick={() => closePop(normalpopRef)}>&times;</span>
        </div>
    );
};

export default NormalPop;
