import React, {useContext} from 'react';
import {useSlider, SliderContext} from "./useSlider";

const toPX = (value) => `${value}px`;
const toPercent = (value) => `${value}%`;

const ImageSlider = ({beforeImage, afterImage, height=260}) => {
  const slider = useSlider({defaultPercent: 0, height: height});
  return (
    <SliderContext.Provider value={{...slider}}>
      <section ref={slider.containerRef}>
        <div className='image-slider-container' style={{width: toPX(slider.width), height: toPX(slider.height)}}>
          <Image image={beforeImage}/>
          <Image image={afterImage} after/>
          <Slider sliderWidth={40} sliderHeight={40}/>
        </div>
      </section>
    </SliderContext.Provider>
  );
}

const Image = ({image, after}) => {
  const {width, percent} = useContext(SliderContext);
  return (
    <div className='image-slider' style={{width: (after === undefined) ? '100%' : toPercent(percent)}}>
      <img src={image} alt='SomeImage' style={{width: toPX(width)}}/>
    </div>
  );
}


const Slider = ({sliderWidth, sliderHeight}) => {
  const {percent, sliderRef} = useContext(SliderContext);
  return <div ref={sliderRef}>
    <SliderBar position={'top'} sliderHeight={sliderHeight} />
    <div className='slider translate-middle top-50 '
         style={{left: toPercent(percent), width: sliderWidth, height: sliderHeight}}>
      <i className="fas fa-angle-left">{}</i>
      <i className="fas fa-angle-right">{}</i>
    </div>
    <SliderBar position={'bottom'} sliderHeight={sliderHeight} />
  </div>
}

const SliderBar = ({position, sliderHeight}) => {
  const {width, height, percent} = useContext(SliderContext);
  return <div className={`slider-bar slider-bar-${position}`} style={{
    left: toPX(Math.floor((width * percent) / 100 - 1)),
    height: (height - sliderHeight) / 2
  }}>{}</div>
}

export default ImageSlider;


