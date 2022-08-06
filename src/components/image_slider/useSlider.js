import React, {useState, useEffect, useRef} from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
/* eslint-disable react-hooks/exhaustive-deps */
export const useSlider = ({defaultPercent, height}) => {
  const containerRef = useRef({});
  const isContainerReady = () => (containerRef && containerRef.current);
  const sliderRef = useRef({});
  const isSliderReady = () => (sliderRef && sliderRef.current);
  const [width, setWidth] = useState(800);
  const [percent, setPercent] = useState(defaultPercent);
  let clicked = false;

  const changeContainerWidth = () => setWidth(containerRef.current.offsetWidth);

  useEffect(() => {
    if(isContainerReady()){
      changeContainerWidth();
      window.addEventListener('resize', changeContainerWidth);
    }
    return () => {
      window.removeEventListener('resize', changeContainerWidth);
    };
  }, []);


  const slideReady = (e) => {
    e.preventDefault();
    if(!clicked){
      clicked = true;
      window.addEventListener("mousemove", slide);
      window.addEventListener("touchmove", slide);
    }
  }

  const slideFinish = () => {
    if(clicked){
      clicked = false;
      window.removeEventListener("mousemove", slide);
      window.removeEventListener("touchmove", slide);
    }
  }

  const slide = (e) => {
    if(!clicked || !isContainerReady()) return false;
    const {x, width} = containerRef.current.getBoundingClientRect();
    const mouseX = getMouseX(e);
    setPercent(()=>{
      const deltaX = mouseX - x;
      const percent = deltaX / width;
      return percent * 100;
    });
  }

  const getMouseX = (e) => {
    const {x, width} = containerRef.current.getBoundingClientRect();
    let mouseX = e.clientX;
    if(mouseX < x){
      mouseX = x;
    }else if(mouseX > x + width){
      mouseX = x + width;
    }
    return mouseX;
  }


  useEffect(()=>{
    if(isSliderReady()){
      sliderRef.current.addEventListener("mousedown",slideReady);
      window.addEventListener("mouseup",slideFinish);
      sliderRef.current.addEventListener("touchstart",slideReady);
      window.addEventListener("touchend",slideFinish);
      let per = {percent: percent};
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(per, {
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 65%",
        },
        duration: 5,
        value: 90,
        ease:"power4.out",
        onUpdate: () => {
          setPercent(per.value);
        }});
    }
  },[]);


  return {width, height, percent, containerRef, sliderRef};
}

export const SliderContext = React.createContext({});
