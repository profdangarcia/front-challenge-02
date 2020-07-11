import React from 'react';

import Header from '../../components/Header';
import IntroSection from '../../components/IntroSection';
import InfoSection from '../../components/InfoSection';
import BlogSection from '../../components/BlogSection';

function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <InfoSection />
      <BlogSection />
    </>
  );
}

export default Home;