import React from 'react';
import fetchHelper from './fetchHelper';
import config from './config';

export default class WidgetComponent extends React.Component {
  componentWillMount() {
    const fetchOptions = {
      method: 'GET',
      params: {
        rhythm: 'x--x--x---x-x---',
      },
    };

    fetchHelper.fetch(config.geometrhythmApiBaseUrl, fetchOptions);
  }

  render() {
    return (
      <div>
        <div data-id="widget-message" />
      </div>
    );
  }
}
