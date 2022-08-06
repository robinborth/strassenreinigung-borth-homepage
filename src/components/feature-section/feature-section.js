import React from 'react';

const FeatureSection = () => {
  return (
    <section className='row gx-5'>
      <Feature icon={'road'}>
        <FeatureHeader>Straßenreinigung</FeatureHeader>
        <FeatureText>
          Seit 1999 ist die Firma Straßenreinigung Eugen Borth Ihr zuverlässiger Partner,
          wenn es um professionelle Straßenreinigung geht.
        </FeatureText>
      </Feature>
      <Feature icon={'truck-pickup'}>
        <FeatureHeader>Transportarbeiten</FeatureHeader>
        <FeatureText>
          Als erfahrenes Transportunternehmen bieten wir
          Ihnen verschiedene Dienstleistungen im Bereich der Transportarbeiten an.
        </FeatureText>
      </Feature>
      <Feature icon={'history'}>
        <FeatureHeader>24 Stunden am Tag</FeatureHeader>
        <FeatureText>
          Wir sind 24 Stunden am Tag - an sieben Tagen die Woche - für Sie einsatzbereit.
        </FeatureText>
      </Feature>
      <Feature icon={'users'}>
        <FeatureHeader>Zufriedene Kunden</FeatureHeader>
        <FeatureText>
          Zu unseren Kunden gehören gewerbliche Großkunden, Kommunen, Straßenmeistereien und Privatpersonen.
          Unsere Kundenzufriedenheit ist uns ebenso wichitg wie saubere Straßen.
        </FeatureText>
      </Feature>
    </section>
  );
}

const Feature = (props) => {
  return (
    <div className='col-sm-6 col-xxl-3 mb-5'>
        <div className='d-flex justify-content-center align-items-center mb-3'>
          <Icon icon={props.icon}/>
        </div>
        {props.children}
    </div>
  );
}

const Icon = ({icon}) => {
  return (
    <div>
      <i className={`feature-icon border rounded-circle  fas fa-${icon}`} >{}</i>
    </div>
  );
}

const FeatureHeader = (props) => {
  return <>
    <h2 className='text-center mb-2'>{props.children}</h2>
  </>;
}

const FeatureText = (props) => {
  return <>
    <p className='text-center'>{props.children}</p>
  </>;
}

export default FeatureSection;
