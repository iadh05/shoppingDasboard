import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectIsHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer
} from './Header.style';
import './Header.scss';

const Header = ({ currentUser, isHidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SignOut
          </OptionLink>
        ) : (
          <OptionLink to="/auth">Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!isHidden && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectIsHidden
});

export default connect(mapStateToProps)(Header);
