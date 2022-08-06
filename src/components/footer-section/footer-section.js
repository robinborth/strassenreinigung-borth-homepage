import React from 'react';
import {icons, links} from '../../data';
import {Link} from "react-router-dom";

const FooterSection = () => {
  return (<>
      <section className='footer-section-container'>
        <div>
          <div>
            <a href={links.instagram}>
              <i className={`fab fa-${icons.instagram}`}>{}</i>
            </a>
            <a href={'#homeScreen'} className='arrow'>
              <i className={`fas fa-${icons.arrow}`}>{}</i>
            </a>
            <a href={links.facebook}>
              <i className={`fab fa-${icons.facebook}`}>{}</i>
            </a>
          </div>
          <Link to={'/dsgvo'}>Impressum & Datenschutz</Link>
        </div>
      </section>
      <a href="https://borth.dev" className='d-block text-center mb-4 text-decoration-none text-dark'>&copy; Robin Borth</a>
    </>
  );
}

export default FooterSection;
