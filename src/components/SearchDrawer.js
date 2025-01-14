import React, { useState } from 'react';
import { Button, Drawer, Input, Radio, Space } from 'antd';
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
      </Drawer>
  );
};
export default SearchDrawer;