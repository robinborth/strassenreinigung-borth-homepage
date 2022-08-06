import React, {useRef, useEffect} from 'react'
import {icons, tel} from '../../data';
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <NavbarItem icon={icons.phone} href={`tel:${tel}`}/>
      <NavbarItem icon={icons.mail} href={'#contact-section'}/>
    </div>
  );
}

const NavbarItem = ({icon, href}) => {
  const refNavbarItem = useRef(null);
  useEffect(() => {
    if (refNavbarItem && refNavbarItem.current) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(refNavbarItem.current, {
        scrollTrigger: {
          trigger: '#homeScreen',
          start: '90% top',
          end: '+=20%',
          toggleActions: "restart none none none",
          scrub: true,
        },
        color: '#000000',
        borderColor: '#000000',
        duration: 1
      })
    }
  }, [refNavbarItem]);
  return (
    <a href={href} ref={refNavbarItem}>
      <i className={`fas fa-${icon}`}>{}</i>
    </a>
  );
}


export default Navbar;
