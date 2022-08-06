import React from 'react';
import Map from '../../images/map.jpg'
import {links, icons} from '../../data';

const AddressSection = () => {
  return (
    <section className='row'>
      <div className='col-md-6 mb-4 mb-md-0'>
        <a href={links.googleMaps}>
          <img src={Map} alt='Maps' className='img-fluid rounded-3'/>
        </a>
      </div>
      <div className='col-md-6 text-center my-auto'>
          <div className='d-flex justify-content-around align-items-center'>
            <Block icon={icons.home}>
              <p>Straßenreinigung Borth</p>
              <p>Industriestraße 41</p>
              <p>74196 Neuenstadt</p>
            </Block>
            <Block icon={icons.comments}>
              <p>Telefon: 07139 454575</p>
              <p>Fax: 07139 454574</p>
              <p>eugen.borth@t-online.de</p>
            </Block>
          </div>
      </div>
    </section>
  );
}

const Block = (props) => {
  return (
    <div className=''>
      <i className={`fas fa-${props.icon} fs-1 mb-3`}>{}</i>
      <div className='lh-sm'>
        {props.children}
      </div>
    </div>
  );
}




export default AddressSection;
