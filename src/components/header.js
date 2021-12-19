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
    isSmallerScreen,
    itemsCount,
    showItemsCount,
  }) => {
  return (
    <>
    <header className="site-header">
      <section style={{ justifyContent: isSmallScreen ? 'flex-start': 'center'}}>
      {
        isSmallScreen ?
        <Burger 
            navOpen={navOpen} 
            setNavOpen={setNavOpen} 
            isSmallScreen={isSmallScreen} 
          />
          :
          <nav>
            <Link to="/about-us">About</Link>
            <Link to="/contact-us">Contact</Link>
          </nav>
      }
      </section>
      <section>
        <Link className="header-logo" to="/"><img src={logo} alt="logo"></img></Link>
      </section>
      <section>
        {
          !isSmallScreen &&
          <nav>
            <Link to="/store">Store</Link>
          </nav>
        }
        <div className="header-cart">
        <span className="Header__summary snipcart-summary snipcart-checkout">
          <div style={{visibility: showItemsCount ? 'visible' : 'hidden'}} ref={itemsCount} className="snipcart-items-count" />
          <i style={{cursor: 'pointer'}} className="fas fa-sm fa-shopping-bag" />
        </span>
      </div>
      </section>

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
