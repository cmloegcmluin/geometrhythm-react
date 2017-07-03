import React from 'react';
import PropTypes from 'prop-types';

const WidgetPresenter = ({ rhythm }) => {
  let cells = '';

  if (rhythm && rhythm.length) {
    cells = rhythm.split('').map((cell, key) => {
      return (
        <li {...{ key }}>
          {cell}
        </li>
      );
    });
  }

  return (
    <ol>
      { cells }
    </ol>
  );
};

WidgetPresenter.PropTypes = {
  rhythm: PropTypes.string,
};

export default WidgetPresenter;
