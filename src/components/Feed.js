import { BookOutlined, CommentOutlined, EllipsisOutlined, HeartOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Typography } from 'antd';
import React from 'react';
import '../css/feed.css';

const { Text } = Typography;

const Feed = () => {
  const posts = [
    {
      id: 1,
      user: 'john_doe',
      image: 'https://via.placeholder.com/500',
      description: 'A beautiful sunset! #sunset #nature',
      likes: 123,
      comments: 45,
    },
    {
      id: 2,
      user: 'jane_doe',
      image: 'https://via.placeholder.com/500',
      description: 'Having a great day with friends! #goodtimes #friends',
      likes: 150,
      comments: 30,
    },
    {
      id: 3,
      user: 'alex_smith',
      image: 'https://via.placeholder.com/500',
      description: 'Delicious food at my favorite restaurant! #foodie #yum',
      likes: 200,
      comments: 60,
    },
  ];

  return (
    <div id='container-feed' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div  className='container-feed' style={{maxWidth: "500px "}}>
        <Row gutter={[16, 16]}>
          {posts.map((post) => (
            <Col span={24} key={post.id}>
              <Card>
                <Card.Meta
                  title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Avatar size={32} icon={<UserOutlined />} />
                        <Text style={{ marginLeft: '10px' }} strong>{post.user}</Text>
                      </div>
                      <div>
                        <EllipsisOutlined />
                      </div>
                    </div>
                  }
                  description={
                    <div>
                      <img alt="example"  style={{width: "100% "}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <HeartOutlined style={{ marginRight: '10px' }} />
                          <CommentOutlined style={{ marginRight: '10px' }} />
                          <SendOutlined />
                        </div>
                        <div>
                          <BookOutlined />
                        </div>
                      </div>
                      <div style={{ marginTop: '10px', fontSize: '14px' }}>
                        <Text strong>{post.likes} Likes</Text>
                        <Text style={{ marginLeft: '10px' }}>{post.comments} Comments</Text>
                      </div>
                      <Text strong>{post.user}</Text>
                      <Text style={{ marginLeft: '10px' }}>{post.description}</Text>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Feed;