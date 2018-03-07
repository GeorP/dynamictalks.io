import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { RegistrationButton } from '../RegistrationButton';
import { Anchor } from 'src/components/Anchor';
import pointerIconPath from 'src/images/header/pointer.svg';
import calendarIconPath from 'src/images/header/calendar.svg';
import snakeIconPath from 'src/images/header/snake.svg';
import menuBurgerClosePath from 'src/images/header/burger.svg';
import menuBurgerOpenPath from 'src/images/header/burger-close.svg';
import mainLogoTitlePath from 'src/images/dt-logo.svg';
import playDemoPath from 'src/images/header/play-sign.svg';
import partnerLogoPath from 'src/images/header/logo-gd1.svg';
import './Header.scss';
import { Button } from 'src/components/Button/';
import { throttle } from 'src/utils/_';
import { PAGETYPES, definePageType } from 'src/utils/definePageType';


export const CN = 'header';
const NAV = 'navbar';
const INFO = 'event-info';


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
  
  static
  defaultProps = {};
  
  constructor(props) {
    super(props);
    
    this.state = {
      isMenuOpen: false,
      isOnTop: false,
      isEventStarted: false,
      isEventFinished: false
    };
    
    this.onMenuClick = this.onMenuClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    
  }
  
  
  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', throttle(this.handleScroll, 500));
    window.addEventListener('touchstart', throttle(this.handleScroll, 500));
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('touchstart', this.handleScroll);
  }
  
  handleScroll() {
    const {isMenuOpen} = this.state;
    isMenuOpen && this.noscroll();
    
    if (window.scrollY === 0 && !this.state.isOnTop) {
      this.setState({isOnTop: true});
    } else if (window.scrollY > 0 && this.state.isOnTop) {
      this.setState({isOnTop: false});
    }
  }
  
  noscroll() {
    window.scrollTo(0, 0);
    
  }
  
  renderIcon(path, altText, content) {
    let img = ( <img
      alt={altText}
      src={path}/>);
    return content ? <span> {img} {content}</span> : img;
  }
  
  renderNavLinks() {
    const {config: {headerNavigationLinks}} = this.props;
    return headerNavigationLinks.map((item, i) => {
      return (
        <Anchor
          className={cx(`${NAV}__link`)}
          href={item.href}
          id={item.title}
          key={i}
        >
          {item.title}
        </Anchor>);
    });
  }
  
  convertDate(ISOTimeStr) {
    let getPad = (param) => {
      return (param < 10) ? `0${param}` : param;
    };
    let date = new Date(ISOTimeStr);
    return `${getPad(date.getMonth() + 1)}.${getPad(date.getDate())}.${date.getFullYear()}`;
  }
  
  
  renderEventInfo() {
    const {config: {eventInformation: einfo}} = this.props;
    const date = this.convertDate(einfo.eventDate.time);
    
    return (
      <div className={cx(INFO)}>
        <div className={cx(`${INFO}__top`)}>
          {this.renderIcon(calendarIconPath, 'calendarIconPath', date)}
          {this.renderIcon(pointerIconPath, 'pointerIconPath', einfo.eventDate.place)}
        </div>
        <h1 className={cx(`${INFO}__title`)}>{einfo.title}</h1>
        <h2 className={cx(`${INFO}__slogan`)}>{einfo.slogan}</h2>
      </div>
    );
  }
  
  renderInfoButton() {
    const {config: {buttonsText, externalEndpoints}} = this.props;
    const pageType = definePageType();
    
    let getButton = (text, link, isBlack) => {
      return (
        <Button
          isBlack={isBlack}
          key={text}
          link={link}
          text={text}
        />);
      
    };
    
    if (pageType === PAGETYPES.ONGOING) {
      return [
        getButton(buttonsText.program, '#program', true),
        getButton(buttonsText.layRoute, externalEndpoints.location)
      ];
    }
    if (pageType === PAGETYPES.AFTER) {
      return [
        getButton(buttonsText.feedback, '#', true),
        getButton(buttonsText.viewMaterials, '#')
      ];
    } else {
      return (
        <Anchor
          className={'play-btn'}
          href={externalEndpoints.promoVideo}
          id="play"
          target="_blank"
        >
          <div>
            {this.renderIcon(playDemoPath, 'play-demo')}
            {buttonsText.playDemo}
          </div>
        </Anchor>
      );
    }
    
  }
  
  onMenuClick() {
    this.setState((prevState) => {
      return {isMenuOpen: !prevState.isMenuOpen};
    });
  }
  
  closeMenu() {
    this.setState({isMenuOpen: false});
  }
  
  render() {
    const {className, config} = this.props;
    const {isMenuOpen, isOnTop} = this.state;
    
    const pageType = definePageType();
    console.info(pageType, 'pageType');
    
    isMenuOpen ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'visible';
    return (
      <section
        className={cx(CN, className)}
        id="header"
      
      >
        <div
          className={cx(`${NAV}__wrapper`, !isOnTop && `${NAV}__wrapper--not-top`, isMenuOpen && `${NAV}__wrapper--menu-opened`)}
        >
          <div className="container">
            <div className={cx(NAV)}>
              <Anchor
                href="#header"
                id="logo"
              >
                <img src={mainLogoTitlePath}/>
              </Anchor>
              <nav className={cx(`${NAV}__menu`)}>
                {this.renderNavLinks()}
              </nav>
              {pageType === PAGETYPES.BEFORE &&
              <RegistrationButton
                className={cx(`${NAV}__btn`)}
                config={config}
              />
              }
              <div className={cx(`${NAV}__burger-icon`)}>
                <img
                  alt="burger-icon"
                  onClick={this.onMenuClick}
                  src={isMenuOpen ? menuBurgerOpenPath : menuBurgerClosePath}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className={cx(`${CN}__event-info`)}>
          {this.renderEventInfo()}
          <div className="button--container">
            {this.renderInfoButton()}
          </div>
        </div>
        <div className="snake">
          {this.renderIcon(snakeIconPath, 'snakeIconPath-picture')}
        </div>
        {isMenuOpen &&
        <div
          className={cx(isMenuOpen && 'collapse-menu--visible', 'collapse-menu')}
          onClick={this.closeMenu}
        >
          <div>
            <nav>{this.renderNavLinks()}</nav>
            <RegistrationButton
              className="collapse-menu__rbtn"
              config={config}
            />
          </div>
        </div>}
        <div className="partner">
          <div className="partner__wrap">
            <Anchor
              href={config.externalEndpoints.site}
              id="partner"
            >
              {this.renderIcon(partnerLogoPath, 'partner-logotype')}
            </Anchor>
          </div>
        </div>
      </section>
    );
  }
}
