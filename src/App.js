import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './components/header/Header.jsx';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage.component.jsx';
import Auth from './pages/auth/Auth';
import CheckOut from './pages/checkout/CheckOut';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { persistor } from './redux/store';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        const newUser = await createUserProfileDocument(user);
        newUser.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }, [setCurrentUser]);
  return (
    <>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckOut} />
              <Route
                path="/auth"
                render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
              />
            </Switch>
          </div>
        </PersistGate>
      </BrowserRouter>
    </>
  );
}
const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
