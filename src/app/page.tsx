// src/pages/Page.tsx
import React from 'react';
import Header from '../components/header/header';
import Body from '../components/body/body';
import Footer from '../components/footer/footer';


const Page: React.FC = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
};

export default Page;
