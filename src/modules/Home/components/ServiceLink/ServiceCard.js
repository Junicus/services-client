import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const ServiceCard = ({ to, title, icon }) => {
  return (
    <Link className='service-link' to={to}>
      <div className='service-card'>
        <div className='service-card-header'>
          <i className={icon + ' service-logo'} />
        </div>
        <div className='service-card-container'>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}

ServiceCard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

export default ServiceCard;