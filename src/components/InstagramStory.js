import React from 'react';
import { Carousel, Typography, Avatar, Button, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import '../css/instagramStory.css'

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
    <div id='container-instagramStory' style={{ width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'center', }}>
      <div className='container-instagramStory'>
        <Carousel
          arrows={true}
          infinite={false}
          dots={false}
          draggable={true}
        >
          {users.map((user, index) => {
            return (
              <div key={`item-${index}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', gap: '16px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <Avatar src={user.avatar} size={48} icon={<UserOutlined />} />
                    <div style={{ marginTop: '5px', fontSize: '12px' }}>
                      {user.username}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  )
};

export default InstagramStory;