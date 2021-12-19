import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/banner-logo.svg';
import Burger from './burger';
import NavDrawer from './navDrawer';


const Header = ({
    navOpen,
    setNavOpen,
    isSmallScreen,
    location,
    isSmallerScreen
  }) => {
  return (
    <>
    <header className="site-header">
      <section>
        <Link className="header-logo" to="/"><img src={logo} alt="logo"></img></Link>
      </section>
        {
          isSmallScreen ?
          <Burger 
            navOpen={navOpen} 
            setNavOpen={setNavOpen} 
            isSmallScreen={isSmallScreen} 
          />
          :
          <nav>
            <Link to="/store">Store</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>
        }

    </header>
    <NavDrawer
      location={location} 
      navOpen={navOpen}
      setNavOpen={setNavOpen} 
      isSmallScreen={isSmallScreen}
      isSmallerScreen={isSmallerScreen}
    />
    </>
  );
}

export default Header;
