import { ConfigProvider, Layout } from 'antd';
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Feed from './components/Feeds';
import FooterMenu from './components/FooterMenu';
import HeaderForMobile from './components/HeaderForMobile';
import InstagramStory from './components/InstagramStory';
import RefeFriend from './components/RefeFriend';
import Sidebar from './components/Sidebar';
import { FetchQlUser } from './api/getUser';
export const AuthContext = createContext();

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data = [] } = FetchQlUser(1, 6)
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
      <AuthContext.Provider value={{ users: data}}>
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
        </AuthContext.Provider>
      </Router>
    </ConfigProvider>
  );
}

export default App;
