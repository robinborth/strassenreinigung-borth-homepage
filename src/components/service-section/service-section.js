import React from 'react';
import BeforeImagePressure from '../../images/hochdruck_vorher.jpg';
import AfterImagePressure from '../../images/hochdruck_nachher.jpg';
import BeforeImageLeaves from '../../images/laub_vorher.jpg';
import AfterImageLeaves from '../../images/laub_nachher.jpg';
import BeforeImageWeeds from '../../images/wildkraut_vorher.jpg';
import AfterImageWeeds from '../../images/wildkraut_nachher.jpg';
import ImageSlider from "../image_slider/image-slider";

const ServiceSection = () => {
  return (
    <section>
      <Service beforeImage={BeforeImageLeaves} afterImage={AfterImageLeaves}>
        <ServiceHeader>
          Straßenreinigung
        </ServiceHeader>
        <ServiceText>
          Mit unseren Groß&shy;raum&shy;kehr&shy;maschinen sorgen wir für ein sauberes Erscheinungs&shy;bild
          und sind somit Ihre Visiten&shy;karte für den entscheidenden ersten Eindruck.
        </ServiceText>
      </Service>
      <Service beforeImage={BeforeImagePressure} afterImage={AfterImagePressure} swap>
        <ServiceHeader>
          Hochdruckreinigung
        </ServiceHeader>
        <ServiceText>
          Unsere Fahrzeuge verfügen über eine Hoch&shy;druck&shy;anlage mit 190 bar bei 180 l Wasser bzw. 250 bar mit 170 l Wasser.
          Zudem sind sie mit einem Wasser&shy;tank mit 2.700 l / 3.600 l Wasser ausge&shy;stattet, um optimale Ergebnisse zu erreichen.
        </ServiceText>
      </Service>
      <Service beforeImage={BeforeImageWeeds} afterImage={AfterImageWeeds}>
        <ServiceHeader>
          Wildkrautbeseitigung
        </ServiceHeader>
        <ServiceText>
          Mit unseren speziellen Bürsten befreien wir Ihre Straßen perfekt von Unkraut.
          Der Einsatz erfolgt auch auf Bundes-, Land- und Kreisstraßen.
        </ServiceText>
      </Service>
    </section>
  );
}

const Service = (props) => {
  const {beforeImage, afterImage} = {...props};
  return (
    <div className='row mb-5 mb-md-5'>
      <div className='col-md-6 col-lg-5 d-flex justify-content-center align-items-center'>
        <div>
          {props.children}
        </div>
      </div>
      <div className={`col-md-6 col-lg-7 ${props.swap && 'order-md-first'}`}>
        <ImageSlider beforeImage={beforeImage} afterImage={afterImage} height={260}/>
      </div>
    </div>
  );
}

const ServiceHeader = (props) => {
  return <h2 className='text-center mb-2 mb-md-3'>{props.children}</h2>
}

const ServiceText = (props) => {
  return <p className='servive-text mx-lg-5'>{props.children}</p>
}

export default ServiceSection;
