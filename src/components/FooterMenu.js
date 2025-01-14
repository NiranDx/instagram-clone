import { CompassOutlined, HomeOutlined, MessageOutlined, PlayCircleOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';
const { Header, Content, Footer } = Layout;

const FooterMenu = () => {
  const { users: data } = useContext(AuthContext);
  return (
    <Footer
      style={{
        background: '#fff',
        borderTop: '1px solid #ddd',
        padding: '10px 0',
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Menu mode="horizontal" style={{ width: '100%', display: 'flex', justifyContent: 'space-around', border: 'none' }}>
        <Menu.Item key="home" icon={<HomeOutlined />} style={{ textAlign: 'center' }}><Link to="/" /></Menu.Item>
        <Menu.Item key="explore" icon={<CompassOutlined />} style={{ textAlign: 'center' }}><Link to="/explore" /></Menu.Item>
        <Menu.Item key="reels" icon={<PlayCircleOutlined />} style={{ textAlign: 'center' }}><Link to="/reels" /></Menu.Item>
        <Menu.Item key="create" icon={<PlusCircleOutlined />} style={{ textAlign: 'center' }}><Link to="/create" /></Menu.Item>
        <Menu.Item key="messages" icon={<MessageOutlined />} style={{ textAlign: 'center' }}><Link to="/messages" /></Menu.Item>
        <Menu.Item key="profile" icon={<Avatar
          src={data[0]?.avatar?.large}
          style={{
            width: '20px',
            height: '20px',
            aspectRatio: '1 / 1',
          }}
          icon={<UserOutlined />}
        />} style={{ textAlign: 'center' }}><Link to="/profile" /></Menu.Item>
      </Menu>
    </Footer>
  );
};

export default FooterMenu;