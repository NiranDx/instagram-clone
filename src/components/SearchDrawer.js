import { Drawer, Input } from 'antd';
import React from 'react';
import SearchList from './SearchList';
const SearchDrawer = (placement="left",open=false, onClose=()=>null) => {
  return (
      <Drawer
        title="Search"
        placement={placement}
        onClose={onClose}
        open={open}
      >
        <Input
          placeholder="Search..."
          allowClear
          onPressEnter={(e) => console.log("Search:", e.target.value)}
        />
        <SearchList />
      </Drawer>
  );
};
export default SearchDrawer;