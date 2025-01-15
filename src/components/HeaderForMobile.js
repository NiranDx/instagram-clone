import { HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { Drawer, Input, Layout } from 'antd';
import React, { useRef, useState } from 'react';
import SearchList from './SearchList';

const { Header } = Layout;

const HeaderForMobile = () => {
  const [open, setOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setOpen(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleInputChange = (e) => {
    setInputSearch(e?.target?.value);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <Header
      style={{
        background: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ margin: 0, fontWeight: 'bold' }}>Instagram</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          ref={inputRef}
          value={inputSearch}
          allowClear
          placeholder="Search"
          prefix={<SearchOutlined />}
          onClick={handleInputClick}
          onChange={handleInputChange}
          onPressEnter={handleInputChange}
          onClear={handleInputChange}
          style={{
            width: '200px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />
        <HeartOutlined style={{ fontSize: '20px', color: '#333' }} />
      </div>

      <Drawer
        placement="top"
        onClose={handleCloseDrawer}
        closeIcon={false}
        open={open}
        rootStyle={{ top: '64px', zIndex: '90' }}
      >
        <SearchList isShowSearch={false} search={inputSearch} setInputSearchClear={() => setInputSearch('')}/>
      </Drawer>
    </Header>
  );
};

export default HeaderForMobile;
