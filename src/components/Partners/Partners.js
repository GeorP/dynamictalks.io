import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '../Heading';
import './Partners.scss';
import gd from 'src/images/gd-logo.png';

// import twitter from 'src/images/twitter.svg';
// import facebook from 'src/images/facebook.svg';
// import linkedin from 'src/images/linkedin-1.svg';

const CN = 'partners';

export default class Partners extends Component {
  
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
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const {config, id} = this.props;
    return (
      <section
        className={cx(CN)}
        id={id}
      >
        <div className={cx(`${CN}_header`)}>
          <Heading title={config.titles.partners_section}/>
        </div>
        <div className={cx(`${CN}_general`)}>
          <div className={cx(`${CN}_general_content`)}>
            <div className={cx(`${CN}_general_content_logo`)}>
              <img
                alt="logo"
                src={gd}
              />
            </div>
            <div className={cx(`${CN}_general_content_desc`)}>
              <p className={cx(`${CN}_general_content_desc_title`)}>Grid Dynamics</p>
              <p className={cx(`${CN}_general_content_desc_text`)}>
                Grid Dynamics is the engineering IT services company known for transformative, mission-critical cloud
                solutions for retail, finance and technology sectors.
              </p>
              <div className={cx(`${CN}_general_content_desc_icons`)}>
                <a href={config.socialNetworks[4].link}>
                  <i
                    aria-hidden="true"
                    className="fa fa-linkedin-square icon"
                  />
                </a>
                <a href={config.socialNetworks[2].link}>
                  <i
                    aria-hidden="true"
                    className="fa fa-twitter-square icon"
                  />
                </a>
                <a href={config.socialNetworks[0].link}>
                  <i
                    aria-hidden="true"
                    className="fa fa-facebook-square icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
