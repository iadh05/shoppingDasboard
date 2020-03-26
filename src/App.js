import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './component/header/Header.jsx';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage.component.jsx';
import Auth from './pages/auth/Auth';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
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
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              path="/auth"
              render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
