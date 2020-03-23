import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './component/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage.component.jsx';
import Auth from './pages/auth/Auth';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
