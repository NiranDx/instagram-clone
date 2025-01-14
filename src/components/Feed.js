import { BookOutlined, CommentOutlined, EllipsisOutlined, HeartOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Typography } from 'antd';
import React from 'react';
import '../css/feed.css';
import { FetchFeedsData } from '../api/getFeeds';
import imageReload from '../assets/imgaes/reload.jpg'

const { Text } = Typography;

const Feed = () => {
  const { data = [] } = FetchFeedsData(1,5)

  return (
    <div id='container-feed' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div  className='container-feed' style={{maxWidth: "500px "}}>
        <Row gutter={[16, 16]}>
          {data.map((post,index) => (
            <Col span={24} key={post.id}>
              <Card>
                <Card.Meta
                  title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Avatar src={post.user.avatar.large} size={32} icon={<UserOutlined />} />
                        <Text style={{ marginLeft: '10px' }} strong>{post.user.name}</Text>
                      </div>
                      <div>
                        <EllipsisOutlined />
                      </div>
                    </div>
                  }
                  description={
                    <div>
                      <img alt="example"  style={{width: "100% "}} src={post.user.bannerImage || imageReload} />
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
                        <Text strong>{post.likeCount} Likes</Text>
                        <Text style={{ marginLeft: '10px' }}>{Math.floor(Math.random() * (100 - 0 + 1)) + 0} Comments</Text>
                      </div>
                      <Text strong>{post.user.name}</Text>
                      <Text style={{ marginLeft: '10px' }}><div dangerouslySetInnerHTML={{ __html: post.body }} /></Text>
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