import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

const navitemStyles = {
    'fontSize': '1.3rem',
    'textTransform': 'uppercase',
    'padding': '1.5rem',
    'fontWeight': 'bold',
    'letterSpacing': '0.5rem',
    'textDecoration': 'none',
    'transition': 'color 0.80s linear',
    'color': '#ffffff',
    'cursor': 'pointer'
};

const navDrawerStyles = {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'backgroundColor': '#000000',
    'minHeight': '100vh',
    'padding': '2rem',
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'transition': 'transform 0.3s ease-in-out',
    'zIndex': '1'
}

const links = [
    {
        id: '#contact',
        text: 'Contact'
    },
    {
        id: '#about',
        text: 'About'
    },
    {
        id: '#membership-info',
        text: 'Join Us'
    },
];




const NavItem = (props) => {
    
    function handleClick() {
        if(props.location && props.location.pathname !== '/') {
            navigate(`/${props.id}`);
        } else {
            scrollTo(props.id);
        }
        props.setNavOpen(false);
    }

    return (
        <span 
            tabIndex="0" 
            role="link"  
            onKeyDown={handleClick} 
            onClick={handleClick}
            style={navitemStyles}
        >
        {props.text}
        </span>
    );
};


const NavDrawer = ({ navOpen, setNavOpen, isSmallScreen, location }) => {

    const [isSmallerScreen, setIsSmallerScreen] = useState(false);

    function handleMediaQueryChange (mediaQuery) {
        if (mediaQuery.matches) {
          setIsSmallerScreen(true);
        } else {
          setIsSmallerScreen(false);
        }
      };
      
      useEffect(() => {
            
        const mediaQuery = window.matchMedia("(max-width: 764px)");
        mediaQuery.addEventListener('change', handleMediaQueryChange);
      
        handleMediaQueryChange(mediaQuery);
      
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
      }, []);
    
    return (
        <nav className="drawer" style={{
            transform: navOpen && isSmallScreen ? 'translateX(0)' : 'translateX(-1000%)',
            width: isSmallerScreen && '100%',
            textAlign: isSmallScreen ? 'center' : 'left',
            ...navDrawerStyles
        }}>
        {links.map(link => (
            <NavItem location={location} key={link.id} {...link} setNavOpen={setNavOpen} />
        ))}
        <Link onClick={(() => setNavOpen(false))} style={navitemStyles} to="/blogs">Moto Blog</Link>
        {/* <Link onClick={(() => setNavOpen(false))} style={navitemStyles} to="/members">Members</Link> */}
        </nav>
    );
};


export default NavDrawer;