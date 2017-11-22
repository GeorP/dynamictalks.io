import React, { Component } from 'react';
import './Tabs.scss';

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: this.props.selected };
  }

  _renderTitles() {
    function labels(child, idx) {
      let activeClass = (this.state.selected === idx ? 'tabs__item is-active' : 'tabs__item');
      return (
        <div
          className={activeClass}
          key={idx}
          onClick={this.onClick.bind(this, idx)}
        >
          <span
          >
            {child.props.label}
          </span>
        </div>
      );
    }
    return (
      <div
        className="tabs__head"
      >
        {this.props.children.map(labels.bind(this))}
      </div>
    );
  }

  onClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}

        <div className="tabs__content">
          {this.props.children[this.state.selected]}
        </div>
      </div>);
  }
}
