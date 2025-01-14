import { ConfigProvider, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Feed from './components/Feed';
import FooterMenu from './components/FooterMenu';
import HeaderForMobile from './components/HeaderForMobile';
import InstagramStory from './components/InstagramStory';
import RefeFriend from './components/RefeFriend';
import Sidebar from './components/Sidebar';

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
