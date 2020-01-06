import React, { useState, useEffect } from 'react';
import './Header.sass';

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
    <section id="component-Header">
      <div className="banner">
        <h1 style={{ opacity: bannerOpacity, marginTop: bannerPadding }}>{title}</h1>
      </div>
      <header id="sticky-header">
        <h1 style={{ opacity: headerOpacity }}>{title}</h1>
        <div className="buttons">{children}</div>
      </header>
    </section>
  );
}
export default Header;
