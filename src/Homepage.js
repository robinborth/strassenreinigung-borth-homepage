import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ServiceSection from './components/service-section/service-section';
import FeatureSection from "./components/feature-section/feature-section";
import SweeperSection from "./components/sweeper-section/sweeper-section";
import StatsSection from "./components/stats-section/stats-section";
import AddressSection from "./components/address-section/address-section";
import InfoSection from "./components/info-section/info-section";
import HomeScreen from "./components/home-screen/home-screen";
import FooterSection from "./components/footer-section/footer-section";
import Navbar from "./components/navbar-section/navbar-section";
//import ContactSection from "./components/contact-section/contact-section";
import Dsgvo from "./components/dsgvo/dsgvo";


function Homepage() {

  return (
    <Router>
      <Switch>
        <Route path="/dsgvo">
          <Dsgvo />
        </Route>
        <Route path="/">
          <section>
            <Navbar/>
            <HomeScreen/>
            <Body>
              <InfoSection>Professionelle Straßenreinigung - überzeugen Sie sich selbst!</InfoSection>
              <ServiceSection />
              <InfoSection>Wir sind für Sie da!</InfoSection>
              <FeatureSection />
              <InfoSection>Unsere Kehrmaschinen im Überblick!</InfoSection>
              <SweeperSection />
              <StatsSection />
              <InfoSection>Finden Sie uns hier!</InfoSection>
              <AddressSection />
              <InfoSection>Kontaktieren Sie uns!</InfoSection>
              {/*<ContactSection />*/}
            </Body>
            <FooterSection/>
          </section>
        </Route>
      </Switch>
    </Router>
  );
}


const Body = (props) => {
  return (
    <div className='container px-5 px-sm-3 px-md-2'>
      {props.children}
    </div>
  );
}

export default Homepage;
