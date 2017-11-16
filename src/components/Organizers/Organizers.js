import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { EventDate } from 'src/components/EventDate';
import { EventPlace } from 'src/components/EventPlace';
import { Logo } from 'src/components/Logo';
import { RegistrationButton } from 'src/components/RegistrationButton';
import './Organizers.scss';


export const CN = 'line-organizers';


export default class Organizers extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className} = this.props;

    return (

      <section className={cx(CN, className)}
        id="section-organizers"
      >
        <div className="organizers">
          <div className="section-header">

            <div className="section-column-1">
              <Logo/>

              <EventDate/>
            </div>
            <div className="section-column-2">
              <h2>Партнери</h2>
              <span className="square-icon"/>
            </div>
            <div className="section-column-3">

              <RegistrationButton/>
              <EventPlace/>

            </div>
          </div>
          <div className="organizers-content">
            <div className="info">
              <div className="description">
                <p className="description__title">Grid Dynamics</p>
                <p className="description__text">
            Grid Dynamics is the engineering IT services company known for transformative, mission-critical
            cloud solutions for retail, finance and technology sectors. We architected some of the busiest
            e-commerce services on the Internet and have never had an outage during the peak season.
            Founded in 2006 and headquartered in San Ramon, California with offices throughout the US and
            Eastern Europe, we focus on big data analytics, scalable omnichannel services, DevOps, and cloud
            enablement. Let our world-class engineers, armed with proven industry-specific blueprints, deliver
            your next breakaway project.
                </p>
              </div>
              <div className="socials">
                <span>Grid Dynamics в соцмережах</span>
                <nav className="socials-links">
                  <a href="https://twitter.com/griddynamics"
                    target="_blank"
                  >
                    <i
                      aria-hidden="true"
                      className="fa fa-twitter"
                    /></a>
                  <a
                    href="https://www.instagram.com/griddynamics_ua/"
                    target="_blank"
                  >
                    <i aria-hidden="true"
                      className="fa fa-instagram"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/GridDynamics.Ukraine/"
                    target="_blank"
                  >
                    <i
                      aria-hidden="true"
                      className="fa fa-facebook"
                    />
                  </a>
                  {/*<a target="_blank" href="https://www.youtube.com/channel/UCFX-U3YT1ANC907BzvhNn7Q">
              <i className="fa fa-youtube-play" aria-hidden="true"></i></a>
          <a target="_blank" href="https://plus.google.com/115302417170674279390">
              <i className="fa fa-google-plus" aria-hidden="true"></i>
          </a>*/}
                </nav>
              </div>
              <a className="btn btn--yellow"
                data-gtag="gd-job"
                href="https://www.griddynamics.com/careers"
                id="gd-job"
                target="_blank"
              >Вакансії компанії</a>
            </div>
            <div className="location">
              <div className="place_event">
                <h2 className="location__title">Місце проведення</h2>
                <a className="calendar_event"
                  data-gtag="download-calendar-organizers"
                  href="/JS_Dynamic_Talks_meetup_Sep_2017.ics"
                  id="download-calendar-organizers"
                >Скачати подію для календаря</a>
              </div>

              <div className="map-container">
                <iframe allowFullScreen
                  frameBorder="0"
                  height="450"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.9802696644165!2d24.030777855351012!3d49.84103095620553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6dca0c9b13%3A0x2797b7e6a216b902!2sHalytska+St%2C+1%2C+L&#39;viv%2C+Lviv+Oblast!5e0!3m2!1sen!2sua!4v1507292702049"
                  style={{border:0}}
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-controls">
          <a href="#section-main"/>
          <a href="#section-events"/>
          <a href="#section-speakers"/>
          <a className="active"
            href="#section-organizers"
          />
        </div>
      </section>
    );
  }
}
