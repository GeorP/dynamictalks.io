import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import './Button.scss';
import Anchor from 'src/components/Anchor/Anchor';


export const CN = 'button';


export default class Button extends Component {
  
  static propTypes = {
    
    
    theme: PropTypes.string,
    // content:PropTypes.any
    
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
    
  }
  
  
  render() {
    const {className, children, config} = this.props;
    
    return <Anchor
      className={cx(CN, className)}
      href={config.externalEndpoints.registrationUrl}
      id={CN}
      target="_blank"
    >
      {children}
    </Anchor>;
    
  }
}
