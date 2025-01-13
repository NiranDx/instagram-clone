import React from 'react';
import { Carousel, Typography, Avatar, Button, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const InstagramStory = () => {
  const users = [
    { avatar: 'https://via.placeholder.com/40', username: 'user1' },
    { avatar: 'https://via.placeholder.com/40', username: 'user2' },
    { avatar: 'https://via.placeholder.com/40', username: 'user3' },
    { avatar: 'https://via.placeholder.com/40', username: 'user4' },
    { avatar: 'https://via.placeholder.com/40', username: 'user5' },
    { avatar: 'https://via.placeholder.com/40', username: 'user6' },
  ];

  return (
    <div style={{ width: '100%', marginTop: '20px' }}>
      <Row justify="center" gutter={16} style={{ overflowX: 'auto' }}>
        {users.map((user, index) => (
          <Col key={index}>
            <div style={{ textAlign: 'center' }}>
              <Avatar src={user.avatar} size={48} icon={<UserOutlined />}/>
              <div style={{ marginTop: '5px', fontSize: '12px' }}>
                {user.username}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    

      {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <Button
          icon={<LeftOutlined />}
          shape="circle"
          style={{
            background: '#fff',
            border: 'none',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Button
          icon={<RightOutlined />}
          shape="circle"
          style={{
            background: '#fff',
            border: 'none',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div> */}
      </div>
  );
};

export default InstagramStory;