import React from 'react';
import { Carousel, Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../css/instagramStory.css';
import { FetchQlUser } from '../api/getUser';

const InstagramStory = () => {

  const { data = [] } = FetchQlUser(1, 50);
  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };
  const userChunks = chunkArray(data, 6);
  return (
    <div id='container-instagramStory' style={{ width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <div className='container-instagramStory'>
        <Carousel
          arrows={true}
          infinite={false}
          dots={false}
          draggable={true}
        >
          {userChunks.map((chunk, index) => (
            <div key={`carousel-item-${index}`}>
              <Row gutter={[16, 16]} justify="start">
                {chunk.map((user) => (
                  <Col key={user.id} span={4} style={{ textAlign: 'center' }}>
                    <Avatar src={user.avatar.large} size={48} icon={<UserOutlined />} />
                    <div style={{ marginTop: '5px', fontSize: '12px' }}>
                      {user.name}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InstagramStory;
