import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

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

  font-size: 1.5rem;
  background-color: inherit;
`;

const StickyHeader = styled.header`
  height: 80px;

  position: -webkit-sticky;
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background-color: inherit;

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

function Header({ title, children }) {
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

  return (
    <FullHeader>
      <Banner>
        <h1 style={{ opacity: bannerOpacity, marginTop: bannerPadding }}>{title}</h1>
      </Banner>
      <StickyHeader>
        <h1 style={{ opacity: headerOpacity }}>{title}</h1>
        <div className="buttons">{children}</div>
      </StickyHeader>
    </FullHeader>
  );
}
export default Header;
