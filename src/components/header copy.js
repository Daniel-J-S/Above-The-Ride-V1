import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/icon.png';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Burger from './burger';
import NavDrawer from './navDrawer';


const Header = ({ navOpen, setNavOpen, isSmallScreen, location }) => {
  function handleClick(id) {
      if(location && location.pathname !== '/') {
        navigate(`/${id}`);
      } else {
        scrollTo(id);
      }
    }
  return (
    <>
    <header className="site-header">
      <div className="mr-3 ml-3">
        <div className="row">
          <div className="col-sm-2 col-md-4 align-self-center">
            <Link className="header-logo" to="/"><img src={logo} alt="logo"></img></Link>
          </div>
          <div className="col-sm-10 col-md-8 align-self-center">
          {
            isSmallScreen ?
            <Burger 
              navOpen={navOpen} 
              setNavOpen={setNavOpen} 
              isSmallScreen={isSmallScreen} 
            />
            :
              <nav>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <span tabIndex="0" role="link" className="nav-link" onKeyDown={() => handleClick('#about')} onClick={() => handleClick('#about')}>About</span>
                  </li>
                  <li className="nav-item">
                    <span tabIndex="0" role="link" className="nav-link" onKeyDown={() => handleClick('#contact')} onClick={() => handleClick('#contact')}>Contact</span>
                  </li>
                  <li className="nav-item">
                    <span tabIndex="0" role="link" className="nav-link" onKeyDown={() => handleClick('#membership-info')} onClick={() => handleClick('#membership-info')}>Join Us</span>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/moto-blog">Moto Blog</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/members">Members</Link>
                  </li> */}
                </ul>
              </nav>
          }
          </div>
        </div>
      </div>
    </header>
    <NavDrawer
      location={location} 
      navOpen={navOpen}
      setNavOpen={setNavOpen} 
      isSmallScreen={isSmallScreen}
    />
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
