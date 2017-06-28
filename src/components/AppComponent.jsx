import React from 'react';
import HeaderComponent from './HeaderComponent';
import WidgetComponent from './WidgetComponent';

const AppComponent = () => (
  <main>
    <HeaderComponent />
    <WidgetComponent />
    <section data-id="analysis" />
  </main>
);

export default AppComponent;
