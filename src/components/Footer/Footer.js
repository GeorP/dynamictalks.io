import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import './Footer.scss';
import logo from 'src/images/dt-logo.svg';
// import facebook from 'src/images/facebook.svg';

export const CN = 'footer';


export default class Footer extends Component {

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

    autoBind(this);
  }


  render() {
    const {className, config} = this.props;

    return (
      <footer className={cx(CN, className)}>
        <div className="logo">
          <img
            alt=""
            src={logo}
          />
        </div>
        <div className="info">
          <div className="info_email">
            <p>Пишіть нам на:</p>
            <a href="mailto:info@dynamictalks.io">info@dynamictalks.io</a>
          </div>
          <div className="info_socials">
            <p>Ми в соцмережах</p>
            <div className="info_socials__networks">
              <a href={config.socialNetworks[0].link}>
                <i
                  aria-hidden="true"
                  className="fa fa-facebook-square icon"
                />
              </a>
            </div>
          </div>
        </div>

      </footer>
    );
  }
}
