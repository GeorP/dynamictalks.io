import React, { Component } from 'react';
import { config } from 'src/config/config';
import { SpeakersSection } from '../SpeakersSection';
import { ContactsSection } from '../ContactsSection';
import { SocialNetwork } from '../SocialNetwork';
import { Header } from '../Header';
import { Schedule } from '../Schedule';
import { Partners } from '../Partners';
import { PreviousSpeakers } from '../PreviousSpeakers';
import { Footer } from '../Footer';
import './App.scss';
import {AboutUsSection} from '../AboutUsSection';

export const SECTIONS = {
  HEADER: 'header',
  SCHEDULE: 'schedule',
  SPEAKERS: 'speakers',
  ORGANIZERS: 'organizers',
  CONTACTS: 'contacts',
  SOCIALNETWORKS: 'socialnetwork',
  PARTNERS: 'partners',
  ABOUT:'about'
  
};

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header
          config={config}
          id={SECTIONS.HEADER}
          items={[SECTIONS.SPEAKERS, SECTIONS.SCHEDULE, SECTIONS.CONTACTS, SECTIONS.PARTNERS,SECTIONS.ABOUT]}
        />
        
        <SpeakersSection
          config={config}
          id={SECTIONS.SPEAKERS}
        />
        
        <Schedule
          config={config}
          id={SECTIONS.SCHEDULE}
        />
        
        <ContactsSection
          config={config}
          id={SECTIONS.CONTACTS}
        />
        
        <SocialNetwork
          config={config}
        />
        
        <AboutUsSection
          config={config}
          id={SECTIONS.ABOUT}
        />

        <Partners
          config={config}
          id={SECTIONS.PARTNERS}
        />
        
        <PreviousSpeakers
          config={config}
        />
        
        <Footer config={config}/>
      </div>
    );
  }
}
