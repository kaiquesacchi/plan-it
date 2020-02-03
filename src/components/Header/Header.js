import React, { useState, useEffect } from 'react';

import { IoIosArrowBack } from 'react-icons/io';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const FullHeader = styled.section`
  display: unset;
  background-color: inherit;
  color: inherit;
`;

const Banner = styled.div`
  height: 220px;

  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    font-size: 2rem;
    font-weight: lighter;
    text-align: center;
  }
  background-color: inherit;
  `;

const StickyHeader = styled.header`
  width: 100vw;
  background-color: inherit;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  #flexbox {
    width: 100%;
    height: 80px;
    display: flex;

    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    background-color: inherit;
  }

  .buttons {
    svg {
      font-size: 1.5rem;
      margin-right: 1rem;
    }
    svg:last-child {
      margin-right: 0;
    }
  }
`;

const BackButton = styled(IoIosArrowBack)`
  position: fixed;
  height: 80px;
  vertical-align: center;
  font-size: 2rem;
  top: 0;
  left: 10px;
`;

function Header({ title, backButton = false, children }) {
  const history = useHistory();
  const bannerHeight = 220;

  const [bannerPadding, setBannerPadding] = useState(0);
  const [bannerOpacity, setBannerOpacity] = useState(1);
  const [headerOpacity, setHeaderOpacity] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const pageYOffset = window.pageYOffset;
      if (pageYOffset <= bannerHeight) {
        setBannerPadding(pageYOffset);
        setHeaderOpacity(1 - (bannerHeight - pageYOffset) / (pageYOffset + 0.1));
        setBannerOpacity((bannerHeight - pageYOffset) / (pageYOffset + 0.1));
      } else {
        if (headerOpacity < 1) setHeaderOpacity(1);
      }
    };

    return () => (window.onscroll = null);
  });

  const renderBackButton = () => {
    if (backButton) {
      return (
        <>
          <BackButton onClick={history.goBack} />
          <div style={{ height: '80px', width: '40px', display: 'inline-box' }} />
        </>
      );
    }
    return '';
  };

  return (
    <FullHeader>
      <Banner>
        <h1 style={{ opacity: bannerOpacity, marginTop: bannerPadding }}>{title}</h1>
      </Banner>
      <StickyHeader>
        {renderBackButton()}
        <div id="flexbox">
          <h1 style={{ opacity: headerOpacity }}>{title}</h1>
          <div className="buttons">{children}</div>
        </div>
      </StickyHeader>
    </FullHeader>
  );
}
export default Header;
