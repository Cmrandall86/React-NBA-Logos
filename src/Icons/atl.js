import React from 'react';
import PropTypes from 'prop-types';

const ATL = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 150 150"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path id="A" d="M0 99.755h99.88V.1H0z" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(25 25.02)">
          <path
            d="M86.623 15.785C77.27 5.815 63.656.098 49.263.098c-1.23 0-2.467.04-3.7.125C22.348 1.795 11.12 18.256 9.956 20.068c-1.71 2.17-16.45 22.026-6.578 49.464l.185.592c.096.296 9.708 29.632 44.074 29.632h.007a64.71 64.71 0 0 0 5.685-.257c25.664-2.247 44.757-21.168 46.432-45.997.953-14.267-3.713-27.66-13.137-37.717"
            fill="#fefefe"
            mask="url(#B)"
          />
        </g>
        <path
          d="M101.5 86.203c3.485-7.645 1.73-15.957-4.142-22.517-1.632-1.82-3.667-3.06-5.635-4.26-1.28-.78-2.605-1.586-3.792-2.543-.557-.45-1.016-1.056-1.5-1.7-.603-.8-1.286-1.707-2.265-2.414-5.444-3.928-11.848-5.365-18.172-7.23-2.988-.878-5.896-1.53-8.633-2.5 3.377-2.342 7.723-3.855 12.46-4.316a46.06 46.06 0 0 1 4.43-.22c13.97 0 26.172 7.02 32.642 18.776 6.476 11.78 6.05 26.073-1.12 37.306-7.367 11.54-20.435 17.678-35.224 16.46-8.847-.724-18.275-5.408-21.176-10.365 1.797-1.102 17.952-9.645 29.005-6.204 3.17.01-1.9 7.665-1.9 7.665s18.446-1.52 25.025-15.938m7.657-43.188c-9.63-10.263-23.887-15.533-38.44-14.55-23.1 1.57-33.344 18.704-33.344 18.704L58.2 53.482c1.7.533 13.137 3.35 18.288 6.178 1.075.6 2.13 1.77 3.17 2.872.772.816 1.497 1.6 2.252 2.207 1.352 1.105 2.678 2.063 3.957 2.987 3.175 2.3 5.916 4.263 7.2 7.27 1.105 2.612 1.148 5.32.122 7.836-.9 2.2-2.565 4.14-4.646 5.477.2-1.1.495-2.694-1.006-3.68-.64-.418-4.095-1.23-6.407-1.46-1.105-.115-13.47-.7-30.64 8.556 5.15-6.85 8.837-8 8.837-8-.138-.826-27.775 10.342-27.775 10.342s9.533 30.464 46.432 27.227c24.006-2.1 41.9-19.622 43.46-43 .897-13.355-3.462-25.888-12.273-35.286M74.168 63.035c-5.932.234-11.386-6.878-15.963-2.22.887.224 2.7-.464 2.97.368-2.35 9.194 12.9 11.563 12.992 1.852"
          fill="#e0393d"
        />
      </g>
    </svg>
  );
};

ATL.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ATL.defaultProps = {
  size: '24'
};

export default ATL;
