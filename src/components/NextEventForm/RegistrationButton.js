import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import './RegistrationButton.scss';
import Anchor from 'src/components/Anchor/Anchor';


export const CN = 'registration-button';


export default class Header extends Component {
  
  static propTypes = {
    
    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,
    
    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired,
  };
  
  static defaultProps = {};
  
  constructor(props) {
    super(props);
    
  }
  
  
  render() {
    const {className, config} = this.props;
    
    return (
      <Anchor
        className={cx(CN, className)}
        href={config.externalEndpoints.registrationUrl}
        id={CN}
        target="_blank"
      >
        {config.buttonsText.registration}
      </Anchor>);
    
  }
}
