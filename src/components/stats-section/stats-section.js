import React, {useRef} from 'react';
import {useCounter} from "../counter/useCounter";
import {icons} from '../../data';

const StatsSection = () => {
  const statsRef = useRef(null);
  const today = new Date();
  const years = today.getFullYear() - 1999;
  const days = years * 365 + today.getMonth() * 12 + today.getDate();
  return (
    <section className='row my-8'>
      <div className='col-md-5 col-lg-6 d-flex justify-content-center align-items-center text-center mb-5 mb-md-0'>
        <h2>Erfahrung seit 1999 - das zahlt sich aus!</h2>
      </div>
      <div className='col-md-7 col-lg-6'>
        <div className='row' ref={statsRef}>
          <div className='col-4'>
            <Stats countTo={years} statsRef={statsRef}>
              Jahre Erfahrungen
            </Stats>
          </div>
          <div className='col-4'>
            <Stats countTo={Math.floor(days * 1.4)} statsRef={statsRef}>
              Straßen gereinigt
            </Stats>
          </div>
          <div className='col-4'>
            <Stats countTo={Math.floor(days * 0.09)} statsRef={statsRef}>
              Zufriedene Kunden
            </Stats>
          </div>
        </div>
      </div>
    </section>
  );
}

const Stats = (props) => {
  const {counter} = useCounter({countTo: props.countTo, duration: 2, ref: props.statsRef});
  return (
    <>
      <div className='d-flex align-items-center justify-content-center'>
        <i className={`fas fa-${icons.trophy} fs-2 mb-2 me-1`}>{}</i>
        <h4 className='ms-1'>+{counter}</h4>
      </div>
      <p className='text-center stats-text'>{props.children}</p>
    </>
  );
}

export default StatsSection;
