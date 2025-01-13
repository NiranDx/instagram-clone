import { HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Layout } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

const HeaderForMobile = () => {
  return (
    <Header
      style={{
        background: '#fff',
        position: 'sticky',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 10,
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%'
      }}
    >
      <h2 style={{ margin: 0, fontWeight: 'bold' }}>Instagram</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          style={{
            width: '200px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />
        <HeartOutlined style={{ fontSize: '20px', color: '#333' }} />
      </div>
    </Header>
  );
};

export default HeaderForMobile;