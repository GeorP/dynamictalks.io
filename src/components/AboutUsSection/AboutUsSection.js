import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './AboutUsSection.scss';
import cx from 'classnames';
import verticalLine from 'src/images/decor/vertical-line.svg';
import horizontalLine from 'src/images/decor/horizontal-small-line.svg';
import {Heading} from 'src/components/Heading';
// import facebook from 'src/images/facebook.svg';

export const CN = 'about';
import meetUp from 'src/images/header/bg-foto-meetup_small.jpg';

export default class AboutUsSection extends Component {
  
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
    const {config, id, className} = this.props;
    
    return (
      <section
        className={cx(CN, className)}
        id={id}
      >
        <div className={cx(`${CN}--section`)}>
          <div className="text-wrapper">
            <Heading title={config.titles.about_us}/>
            
            <h2>dynamics talks</h2>
            <p>Dynamic JS Talks - це серія регулярних мітапів, де спеціалісти будуть ділитись своїм досвідом і
              розкривати
              актуальні теми, обговорювати поточні тренди та існуючі проблеми, шукати варіанти їх вирішення. Ми бачимо
              Dynamic Talks як платформу публічного обміну знаннями та досвідом. Якщо вам є чим поділитись і ви бажаєте
              це
              робити - зв'яжіться з нами, ми додамо вас в один з наступних мітапів.</p>
          
          </div>
          
          <div className={cx(`${CN}--photo`)}>
            <div className={cx(`${CN}--photo-cell`)}>
              <img
                alt="img"
                src={meetUp}
              />
            </div>
            <div className={cx(`${CN}--photo-verticalLine`)}>
              <img
                alt="verticalLine"
                src={verticalLine}
              />
            </div>
            <div className={cx(`${CN}--photo-horizontalLine`)}>
              <img
                alt="horizontalLine"
                src={horizontalLine}
              />
            </div>
          </div>
        </div>
        
        
        <div className="socialLinks">
          <p className="socialLinks_title">Ми в соцмережах</p>
          <div className="socialLinks_list">
            <a
              className="socialLinks_list_icon"
              href={config.externalEndpoints.facebook}
            >
              <i
                aria-hidden="true"
                className="fa fa-facebook-square icon"
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
