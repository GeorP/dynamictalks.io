import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
//import cx from 'classnames';
import {Heading} from 'src/components/Heading';
import {Speaker} from 'src/components/SpeakersSection/Speaker';
import './SpeakersSection.scss';

export const CN = 'footer';
const IMAGE_POSITION = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};


export default class SpeakersSection extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired,
    id: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }

  renderSpeakers() {
    const {speakers} = this.props.config;

    return speakers.map((speaker, i) => (
      <Speaker
        {...speaker}
        imagePosition={i % 2 ? IMAGE_POSITION.RIGHT : IMAGE_POSITION.LEFT}
        key={i}
      />
    ));
  }


  render() {
    const {config,id} = this.props;

    return (
      <section
        className="speakers_section"
        id={id}
      >
        <Heading title={config.titles.speakers_section}/>
        <div className="speakers_block">
          {this.renderSpeakers()}
        </div>
      </section>
    );
  }
}
