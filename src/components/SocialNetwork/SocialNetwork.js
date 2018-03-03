import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
//import cx from 'classnames';
import './SocialNetwork.scss';
import {Anchor} from 'src/components/Anchor';


import facebook from 'src/images/facebook.svg';
//import slack from 'src/images/slack.png';





export default class Speaker extends Component {

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

  renderSocialNetworks() {
    const {socialNetworks} = this.props.config;


    return socialNetworks.map((socialNetwork, i) => (
      <Anchor
        href={socialNetwork.link}
        id={socialNetwork.link}
        key={i}
        target="_blank"

      >
        <img
          alt={socialNetwork.name}
          src={facebook}
        />
      </Anchor>
    ));
  }


  render() {
    const {socialNetworks} = this.props.config;

    return (
      <section className="social_network">
        <p>Приєднюйся до івенту в соцмережах</p>
        <div className="socials_container">
          <Anchor
            href={socialNetworks[0].link}
            id={socialNetworks[0].link}
            key={socialNetworks[0].name}
            target="_blank"
          >
            <i
              aria-hidden="true"
              className="fa fa-facebook-square icon"
            />
          </Anchor>

        </div>
      </section>

    );
  }
}
