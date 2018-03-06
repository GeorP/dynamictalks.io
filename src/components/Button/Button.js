import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import './Button.scss';
import Anchor from 'src/components/Anchor/Anchor';


export const CN = 'button';


export default class Button extends Component {
  
  static propTypes = {
    
    /**
     * className - classes which can be passed from parent
     */
    
    className: PropTypes.string,
    
    isBlack: PropTypes.bool,
    
    
    /**
     * link - link to external source
     */
    link: PropTypes.string,
    
    target: PropTypes.string,
    
    /**
     * text - text which is displaying in button
     */
    text: PropTypes.string.isRequired,
    
    
  };
  
  constructor(props) {
    super(props);
    
  }
  
  static defaultProps = {
    link: ''
  };
  
  
  render() {
    const {className, link, text, isBlack, target = '_blank'} = this.props;
    
    return (
      <Anchor
        className={cx(CN, className, isBlack && `${CN}-black`)}
        href={link}
        id={CN}
        target={target}
      >
        <span>{text}</span>
      </Anchor>
    );
    
  }
}
