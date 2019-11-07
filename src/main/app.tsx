import React from 'react';

import Header from './common/template/header'
import SideNav from './common/template/sideNav'
import Content from './common/template/content'

const App: React.FC = () => {
  document.body.id = 'home';
  return (
    <>
      <Header />
      <SideNav />
      <Content />
    </>
  );
}


export default App;
