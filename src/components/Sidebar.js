import { BellOutlined, CompassOutlined, ContainerOutlined, HomeOutlined, InstagramOutlined, MessageOutlined, PlayCircleOutlined, PlusCircleOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({PageSize}) => {
  return (
    <Sider width={200} trigger={null} collapsible collapsed={PageSize <= 1024} theme="light" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: '250px',
      background: '#fff',
      zIndex: 10,
      boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontWeight: 'bold', color: '#000' }}>{PageSize <= 1024 ? <InstagramOutlined /> : 'Instagram'}</h2> 
      </div>

      <Menu mode="vertical" theme="light" style={{ borderRight: 0 }}>
        <Menu.Item key="home" icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="search" icon={<SearchOutlined />}><Link to="/search">Search</Link></Menu.Item>
        <Menu.Item key="explore" icon={<CompassOutlined />}><Link to="/explore">Explore</Link></Menu.Item>
        <Menu.Item key="reels" icon={<PlayCircleOutlined />}><Link to="/reels">Reels</Link></Menu.Item>
        <Menu.Item key="messages" icon={<MessageOutlined />}><Link to="/messages">Messages</Link></Menu.Item>
        <Menu.Item key="notifications" icon={<BellOutlined />}><Link to="/notifications">Notifications</Link></Menu.Item>
        <Menu.Item key="create" icon={<PlusCircleOutlined />}><Link to="/create">Create</Link></Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}><Link to="/profile">Profile</Link></Menu.Item>
      </Menu>

      <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
        <Menu mode="vertical" theme="light" style={{ borderRight: 0 }}>
          <Menu.Item key="threads" icon={<ContainerOutlined />}><Link to="/threads">Threads</Link></Menu.Item>
          <Menu.Item key="more" icon={<UserOutlined />}><Link to="/more">More</Link></Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
};

export default Sidebar;