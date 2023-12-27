// src/pages/Page.tsx
import React from 'react';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
};

export default Page;
