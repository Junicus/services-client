import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

class ServiceCard extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }

  render() {
    const { to, title, icon, imageUrl } = this.props;
    const logo = imageUrl ?
      <img className='service-logo' src={imageUrl} /> :
      <i className={icon + ' service-logo'} />;
    return (
      <Link className='service-link' to={to}>
        <div className='service-card'>
          <div className='service-card-header'>
            {logo}
          </div>
          <div className='service-card-container'>
            <p>{title}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ServiceCard;