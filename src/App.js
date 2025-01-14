import React, { useState, useEffect } from 'react';
import { ConfigProvider, Layout } from 'antd';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from './components/Feed';
import HeaderForMobile from './components/HeaderForMobile';
import FooterMenu from './components/FooterMenu';
import InstagramStory from './components/InstagramStory';
import RefeFriend from './components/RefeFriend';

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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000", 
          colorText: "#000", 
          colorBgLayout: "#fff", 
          colorBgContainer: "#fff", 
        },
        components: {
          Menu: {
            itemActiveBg:'#fff',
            itemSelectedBg:'#fff',
          },
        },
      }}
    >
      <Router>
        {
          windowWidth >= 768 ?
            <Layout >
              <Sidebar PageSize={windowWidth} />
              <Layout >
                <div style={{ display: windowWidth < 1024 ? 'block' : 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <div>
                    <InstagramStory />
                    <Feed />
                  </div>
                  {
                    windowWidth >= 1024 &&
                    <div style={{ width: '320px', margin: '36px 0 0 0', padding: '0 0 0 50px' }}>
                      <RefeFriend />
                    </div>
                  }
                </div>
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
    </ConfigProvider>
  );
}

export default App;
