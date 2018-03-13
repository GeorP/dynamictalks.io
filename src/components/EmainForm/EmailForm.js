import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './EmailForm.scss';
import Button from 'src/components/Button/Button';

export const CN = 'email-form';


export default class EmailForm extends Component {
  
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
      <section className={cx(CN, className)}>
        <div className={cx(`${CN}--content`)}>
          <div className={cx(`${CN}--title`)}>
            <h4>{config.titles.emailForm}</h4>
          </div>
          <form
            action="#"
            className={cx(`${CN}--form-wrap`)}
          >
            <input
              className={cx(`${CN}--input`)}
              id="email"
              placeholder="Ваш email"
              type="email"
            
            />
            <label
              className={cx(`${CN}--label`)}
              htmlFor="email"
            >
              <Button
                isBlack
                text={config.buttonsText.feedback}
              
              />
            </label>
          
          </form>
        </div>
      </section>
    
    );
    
  }
}
