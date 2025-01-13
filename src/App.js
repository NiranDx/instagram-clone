import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar'; // อย่าลืม import Sidebar ที่เราสร้าง
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from './components/Feed';
import HeaderForMobile from './components/HeaderForMobile';
import FooterMenu from './components/FooterMenu';
import InstagramStory from './components/InstagramStory';


const { Content } = Layout;

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      {
        windowWidth >= 768 ?
          <Layout >
            <Sidebar PageSize={windowWidth} />
            <Layout>
              <InstagramStory />
              <Feed />
            </Layout>
          </Layout>
          :
          <Layout >
            <HeaderForMobile />
            <InstagramStory />
            <Feed />
            <FooterMenu />
          </Layout>
      }
    </Router>
  );
}

export default App;
