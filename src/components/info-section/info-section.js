import React from 'react';

const InfoSection = (props) => {
  return (
    <section className='text-center my-7 my-md-8'>
      <h1>{props.children}</h1>
    </section>
  );
}

export default InfoSection;
