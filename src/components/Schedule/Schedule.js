import React, {Component} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {RegisterBlock} from '../RegisterBlock';
import './Schedule.scss';

export const CN = 'schedule';

export default class Schedule extends Component {
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

  constructor(props) {
    super(props);
  }

  renderAgenda() {
    const { config } = this.props;

    return config
      .agenda
      .map(({time, description, speaker, topic}, index) => (
        <div key={index}>
          <div
            className={cx(`${CN}_container_program_event`)}
          >
            <div className={cx(`${CN}_container_program_event_time`)}>
              <p>{time}</p>
            </div>
            <div className={cx(`${CN}_container_program_event_description`)}>
              {speaker &&
                <p className={cx(`${CN}_container_program_event_description_name`)}>{speaker}</p>
              }
              {description &&
                <p className={cx(`${CN}_container_program_event_description_desc`)}>{description}</p>
              }
              {topic &&
                <p className={cx(`${CN}_container_program_event_description_topic`)}>{topic}</p>
              }
            </div>
          </div>
        </div>));
  }

  render() {
    const {config,id} = this.props;
    return(
      <section
        className={cx(CN)}
        id={id}
    
      >
        <div className={cx(`${CN}_container`)}>
          <h3 className={cx(`${CN}_container_title`)}>Програма</h3>
          <div className={cx(`${CN}_container_program`)}>
            {this.renderAgenda()}
          </div>
        </div>
        <RegisterBlock config={config}/>
      </section>
    );
  }
}
