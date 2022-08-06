import {useState, useEffect} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


export const useCounter = ({countTo, duration, ref}) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if(ref && ref.current){
      const count = {value: 0};
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(count, {
        scrollTrigger: {
          trigger: ref.current,
        },
        duration: duration,
        value: countTo, ease:"power4.out",
        onUpdate: () => {
          setCounter(count.value);
        }});
    }
  },[countTo,duration, ref]);
  return {counter: Math.floor(counter)}
}

