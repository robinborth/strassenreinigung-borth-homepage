import React from 'react';
import SweeperMerlin from '../../images/sweeper_2020.jpg'
import SweeperMagnum from '../../images/sweeper_2019.jpg'
import SweeperKobit from '../../images/sweeper_2025.jpg'
import {icons} from '../../data';

const SweeperSection = () => {
  return (
    <div className='row gx-lg-4 gx-xxl-5'>

      <Sweeper img={SweeperMerlin}>
        <SweeperHeader>Scarab Merlin</SweeperHeader>
        <List>
          <ListItem icon={icons.truck}>Schmutzbehälter 6,2m&#179;</ListItem>
          <ListItem icon={icons.bliz}>Hochdruck 200bar</ListItem>
          <ListItem icon={icons.check}>porentiefe Hecksaugwaschanlage</ListItem>
          <ListItem icon={icons.check}>Wildkrautbeseitigung</ListItem>
          <ListItem icon={icons.brain}>zusätzlicher Saugschacht</ListItem>
          <ListItem icon={icons.check}>Euro 6</ListItem>
          <ListItem icon={icons.check}>PM-10-Norm</ListItem>
        </List>
      </Sweeper>

      <Sweeper img={SweeperMagnum}>
        <SweeperHeader>Scarab Magnum Plus</SweeperHeader>
        <List>
          <ListItem icon={icons.truck}>Schmutzbehälter 8,2m&#179;</ListItem>
          <ListItem icon={icons.bliz}>Hochdruck 330bar</ListItem>
          <ListItem icon={icons.brain}>Drehjet-Technologie</ListItem>
          <ListItem icon={icons.tint}>Wassertank 4000l</ListItem>
          <ListItem icon={icons.check}>porentiefe Hecksaugwaschanlage</ListItem>
          <ListItem icon={icons.check}>Wildkrautbeseitigung</ListItem>
          <ListItem icon={icons.check}>Ölspurbeseitigung</ListItem>
          <ListItem icon={icons.brain}>Tellerbesen zusätzlich links</ListItem>
          <ListItem icon={icons.bliz}>drei Tellerbesen rechts</ListItem>
        </List>
      </Sweeper>

      <Sweeper img={SweeperKobit}>
        <SweeperHeader>Kobit K8</SweeperHeader>
        <List>
          <ListItem icon={icons.truck}>Schmutzbehälter 8,8m&#179;</ListItem>
          <ListItem icon={icons.bliz}>Hochdruck 200bar</ListItem>
          <ListItem icon={icons.brain}>schwenkbare Kehrwalze</ListItem>
          <ListItem icon={icons.brain}>Drehjet-Technologie</ListItem>
          <ListItem icon={icons.check}>porentiefe Hecksaugwaschanlage</ListItem>
          <ListItem icon={icons.check}>Wildkrautbeseitigung</ListItem>
          <ListItem icon={icons.check}>Ölspurbeseitigung</ListItem>
        </List>
      </Sweeper>

    </div>
  );
}

const Sweeper = (props) => {
  const {img} = {...props};
  return (
    <div className='col-lg-4 mb-5 mb-lg-0'>
      <div className={`sweeper-section-container shadow`}>
        <img src={img} alt='Sweeper'/>
        {props.children}
      </div>
    </div>
  );
}

const SweeperHeader = (props) => {
  return (
    <h3>{props.children}</h3>
  );
}

const List = (props) => {
  return (
    <ul className='list-group list-group-flush mx-4 w-auto h-auto pb-4'>
      {props.children}
    </ul>
  );
}

const ListItem = (props) => {
  return (
    <li className='list-group-item sweeper-section-list-item'>
      <i className={`fas fa-${props.icon}`}>{}</i>
      <span>{props.children}</span>
    </li>
  );
}

export default SweeperSection;
