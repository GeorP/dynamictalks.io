import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './ContactsSection.scss';
import {Heading} from 'src/components/Heading';
import map_icon from 'src/images/map.svg';
import calendar_icon from 'src/images/icon@2x.png';

export default class ContactsSection extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {
      eventAddress,
      eventDate,
      titles
    } = this.props.config;

    return (
      <section className='contacts_section'>

        <div className='address-info'>

          <Heading title={titles.contacts_section}/>
          <div className='contacts_info'>


            <div className='contacts_info__calendar'>
              <img src={calendar_icon} alt="" className='calendar_icon'/>
              <p>{eventDate.timeString}</p>
            </div>

            <div className='contacts_info__address'>
              <img src={map_icon} alt="" className='map_icon'/>
              <p>{eventAddress.addressLines[0]}</p>
            </div>

            <div className='contacts_info__description'>
              <h5>{eventAddress.addressLines[1]}</h5>
              <p>{eventAddress.addressLines[2]}</p>
            </div>


          </div>
        </div>

        <div
          className="map-container"
          dangerouslySetInnerHTML={{__html: eventAddress.googleMapEmbed}}/>

      </section>
    );
  }
}