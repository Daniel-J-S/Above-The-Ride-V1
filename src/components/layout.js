import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import {
  StaticQuery,
  graphql
} from 'gatsby';

import Header from './header';
import Footer from './footer';



const Layout = ({
    children
  }) => {
    const [isSmallerScreen, setIsSmallerScreen] = useState(false);
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const [showItemsCount, setShowItemsCount] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    const itemsCount = useRef();

    const handleMutations = function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.target.innerHTML === "0") {
          setShowItemsCount(false)
        } else {
          setShowItemsCount(true)
        }
      });
    }

    if (typeof window !== "undefined") {
      const observer = new MutationObserver(handleMutations);

      if (itemsCount.current) {
        observer.observe(itemsCount.current, {
          childList: true
        });
      }
    }

    function handleMediaQueryChangeSmaller(mediaQuery) {
      if (mediaQuery.matches) {
        setIsSmallerScreen(true);
      } else {
        setIsSmallerScreen(false);
      }
    };


    const handleMediaQueryChange = mediaQuery => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };


    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 764px)");
      mediaQuery.addEventListener('change', handleMediaQueryChangeSmaller);
      handleMediaQueryChangeSmaller(mediaQuery);
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChangeSmaller);
      };
    }, []);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 1065px)');
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }, []);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header 
            siteTitle={data.site.siteMetadata.title}
            isSmallerScreen={isSmallerScreen}
            setIsSmallerScreen={setIsSmallerScreen}
            isNavVisible={isNavVisible}
            setNavVisibility={setNavVisibility}
            isSmallScreen={isSmallScreen}
            setIsSmallScreen={setIsSmallScreen}
            showItemsCount={showItemsCount}
            setShowItemsCount={setShowItemsCount}
            navOpen={navOpen}
            setNavOpen={setNavOpen}
          />
          <div className="main-container">
            <main>{children}</main>
          </div>
          <Footer />
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
