import React from 'react';
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from '../images';
import "./slide.css";

function Slide() {
    const carousRef = useRef();
    const [width, setWidth] = useState(0);
    useEffect(() => {
       
        setWidth(carousRef.current.scrollWidth - carousRef.current.offsetWidth);
    },[])
   
  return (
      <div>
          <motion.div ref={carousRef} className='carousel' whileTap={{cursor:"grabbing"}}>
              <motion.div drag="x" dragConstraints={{right:0,left:-width}} className='inner-carousel'>
                  {images.map((image) => (
                      <motion.div className='item' key={image}>
                          <img src={image} alt="" />
                      </motion.div>
                  ))}
              </motion.div>
          </motion.div>
    </div>
  )
}

export default Slide