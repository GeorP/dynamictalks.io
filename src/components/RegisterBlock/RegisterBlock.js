import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './RegisterBlock.scss';

const CN = 'register-block';

export default class RegisterBlock extends Component {
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
    const {config} = this.props;
    return(
      <section className={cx(CN)}>
        <div className={cx(`${CN}_content`)}>
          <div className={cx(`${CN}_content_bg`)}>
            <h3 className={cx(`${CN}_content_bg_title`)}>Захоплюючі речі попереду, реєструйся щоб отримати квиток на івент</h3>
            <a
              className={cx(`${CN}_content_bg_regbtn`)}
              href={config.externalEndpoints.registrationUrl}
            >Реєстрація</a>
          </div>
        </div>
      </section>
    );
  }
}
