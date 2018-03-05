import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Heading} from '../Heading';
import {RegisterBlock} from '../RegisterBlock';
import './PreviousSpeakers.scss';

const CN = 'previous-speakers';

export default class PreviousSpeakers extends Component {
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

  renderSpeakers() {
    const {config} = this.props;

    return config
      .previousSpeakers
      .map(({name, position, imageSrc, link}, index) => (
        <div
          className={cx(`${CN}_list_speaker`)}
          key={index}
        ><a href={link}>
            <img
              alt="speaker-img"
              className={cx(`${CN}_list_speaker_img`)}
              src={imageSrc}
            />
          </a>
          <p className={cx(`${CN}_list_speaker_name`)}>{name}</p>
          <p className={cx(`${CN}_list_speaker_position`)}>{position}</p>
        </div>
      ));
  }

  render() {
    const {config} = this.props;
    return (
      <section className={cx(CN)}>
        <Heading title={config.titles.previous_speakers_section}/>
        <div className="desktop">
          <div className={cx(`${CN}_list`)}>
            {this.renderSpeakers()}
          </div>
        </div>
        <RegisterBlock config={config}/>
      </section>
    );
  }
}
