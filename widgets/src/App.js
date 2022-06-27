import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Format from './components/Format';
import Route from './components/Route';
import Header from './components/Header';
import { data } from './data/accordionData';

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={data} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/format">
        <Format />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
