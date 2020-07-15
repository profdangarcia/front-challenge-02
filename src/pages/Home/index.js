import React from 'react';

import Header from '../../components/Header';
import IntroSection from '../../components/IntroSection';
import InfoSection from '../../components/InfoSection';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <InfoSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default Home;