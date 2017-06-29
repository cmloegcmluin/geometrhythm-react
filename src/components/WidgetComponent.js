import React from 'react';
import fetchHelper from '../helpers/fetchHelper';
import config from '../config';

export default class WidgetComponent extends React.Component {
  render() {
    return (
      <div>
        <div data-id="widget-message" />
      </div>
    );
  }
}
