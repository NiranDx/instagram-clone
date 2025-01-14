import React, { useEffect, useState } from 'react';
import { FetchFeedsData } from '../api/getFeeds';
import { BookOutlined, CommentOutlined, EllipsisOutlined, HeartOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Spin, Typography } from 'antd';
import '../css/feed.css';
import imageReload from '../assets/imgaes/reload.jpg';
import ViewMoreDetail from './ViewMoreDetail';

const { Text } = Typography;

const Feed = () => {
  const [page, setPage] = useState(1);
  const [feedData, setFeedData] = useState([]);
  const { data, loading, error } = FetchFeedsData(page, 20);
  useEffect(() => {
    if (data && data?.length > 0) {
      setFeedData((prev) => [...prev, ...data]);
    }
  }, [data]);

  const handleScroll = () => {

    if (window?.innerHeight + document?.documentElement?.scrollTop !== document?.documentElement?.offsetHeight || loading) return;
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  }, [loading]);


  return (
    <div id='container-feed' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div className='container-feed'>
        <Row gutter={[16, 16]}>
          {feedData?.map((post) => (
            <Col span={24} key={post?.id}>
              <Card>
                <Card.Meta
                  title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Avatar src={post?.user?.avatar?.large|| imageReload} size={32} icon={<UserOutlined />} />
                        <Text style={{ marginLeft: '10px' }} strong>{post?.user?.name}</Text>
                      </div>
                      <div>
                        <EllipsisOutlined />
                      </div>
                    </div>
                  }
                  description={
                    <div>
                      <img alt="example" style={{ width: "100%",minHeight:"100%", }} src={post?.user?.bannerImage || imageReload} />
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
                        <Text strong>{post?.likeCount} Likes</Text>
                        <Text style={{ marginLeft: '10px' }}>{post?.replyCount} Comments</Text>
                      </div>
                      <Text strong>{post?.user?.name}</Text>
                      <Text style={{ marginLeft: '10px' }}>
                        <ViewMoreDetail isShowViewMore={post?.body?.length>100}>
                          <div dangerouslySetInnerHTML={{ __html: post?.body }} />
                        </ViewMoreDetail>
                      </Text>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
          {loading && <Col span={24} style={{textAlign: 'center', padding: 50,borderRadius: 4,}}><div><Spin tip="Loading More..."> </Spin></div></Col>}
          {error && <Col span={24}><p>Error: {error?.message}</p></Col>}
        </Row>
      </div>
    </div>
  );
};

export default Feed;
