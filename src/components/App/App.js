import React, { Component } from 'react';
import { config } from 'src/config/config';
import { Schedule } from '../Schedule';
import { Partners } from '../Partners';
import './App.scss';


export const SECTIONS = {
  TOP: 'top',
  MEETUP: 'meetup',
  SPEAKERS: 'speakers',
  ORGANIZERS: 'organizers'
};

export default class App extends Component {

  render() {
    return (
      <div>
        <Schedule config={config}/>
        <Partners/>
      </div>
    );
  }
}
