import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './Heading.scss';



export default class Heading extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * config - configuration object
     */
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {title} = this.props;

    return (
      <div className="rectangle">
        <h3>{title}</h3>
      </div>
    );
  }
}
