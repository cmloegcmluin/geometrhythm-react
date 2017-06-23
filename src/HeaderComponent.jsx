import React from 'react';
import fetchHelper from './fetchHelper';

export default class HeaderComponent extends React.Component {
  componentWillMount() {
    fetchHelper.fetch();
  }

  render() {
    return (
      <div>
        <div data-id="title" />
      </div>
    );
  }
}
