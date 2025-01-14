import React, { useEffect, useState, useCallback } from 'react';
import { FetchFeedsData } from '../api/getFeeds';
import { BookOutlined, CommentOutlined, EllipsisOutlined, HeartFilled, HeartOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Spin, Typography } from 'antd';
import '../css/feed.css';
import imageReload from '../assets/imgaes/reload.jpg';
import ViewMoreDetail from './ViewMoreDetail';

const { Text } = Typography;

const Feed = () => {
  const [page, setPage] = useState(1);
  const [feedData, setFeedData] = useState([]);
  const [likedPosts, setLikedPosts] = useState(new Set()); // Set to manage liked states

  const { data, loading, error } = FetchFeedsData(page, 20);

  useEffect(() => {
    if (data && data?.length > 0) {
      setFeedData((prev) => [...prev, ...data]);
    }
  }, [data]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleLike = (id) => {
    setLikedPosts((prev) => {
      const updatedLikes = new Set(prev);
      if (updatedLikes.has(id)) {
        updatedLikes.delete(id);
      } else {
        updatedLikes.add(id);
      }
      return updatedLikes;
    });
  };

  const convertTimestampToDatetime = (timestamp = new Date(), options = {}) => {
    const date = new Date(timestamp * 1000);

    const locale = options.locale || 'default'; // Default locale
    const formatOptions = options.formatOptions || {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true // 12-hour format
    };
    return date.toLocaleString(locale, formatOptions);
  }

  return (
    <div id="container-feed" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div className="container-feed">
        <Row gutter={[16, 16]}>
          {feedData?.map((post) => (
            <Col span={24} key={post?.id}>
              <Card>
                <Card.Meta
                  title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{display: 'flex', gap: '12px'}}>
                        <Avatar src={post?.user?.avatar?.large || imageReload} size={32} icon={<UserOutlined />} />
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                          <Text strong>
                            {post?.user?.name}
                          </Text>
                          <Text style={{fontWeight: '400', fontSize: '10px'}}>{convertTimestampToDatetime(post?.createdAt)}</Text>
                        </div>

                      </div>
                      <div>
                        <EllipsisOutlined />
                      </div>
                    </div>
                  }
                  description={
                    <div>
                      <img
                        alt="example"
                        style={{ width: '100%', minHeight: '100%' }}
                        src={post?.user?.bannerImage || imageReload}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <Button
                            type="link"
                            style={{ padding: 0, color: 'grey', fontSize: '20px' }}
                            onClick={() => toggleLike(post?.id)}
                          >
                            {likedPosts.has(post?.id) ? (
                              <HeartFilled style={{ marginRight: '10px', color: '#f00' }} />
                            ) : (
                              <HeartOutlined style={{ marginRight: '10px' }} />
                            )}
                          </Button>
                          <Button type="link" style={{ padding: 0, color: 'grey', fontSize: '20px' }}><CommentOutlined style={{ marginRight: '10px' }} /></Button>
                          <Button type="link" style={{ padding: 0, color: 'grey', fontSize: '20px' }}><SendOutlined /></Button>
                        </div>
                        <div>
                          <Button type="link" style={{ padding: 0, color: 'grey', fontSize: '20px' }}><BookOutlined /></Button>
                        </div>
                      </div>
                      <div style={{ marginTop: '10px', fontSize: '14px' }}>
                        <Text strong>{post?.likeCount} Likes</Text>
                        <Text style={{ marginLeft: '10px' }}>{post?.replyCount} Comments</Text>
                      </div>
                      <Text strong>{post?.user?.name}</Text>
                      <Text style={{ marginLeft: '10px' }}>
                        <ViewMoreDetail isShowViewMore={post?.body?.length > 100}>
                          <div dangerouslySetInnerHTML={{ __html: post?.body }} />
                        </ViewMoreDetail>
                      </Text>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
          {loading && (
            <Col span={24} style={{ textAlign: 'center', padding: 50, borderRadius: 4 }}>
              <div>
                <Spin tip="Loading More..."> </Spin>
              </div>
            </Col>
          )}
          {error && (
            <Col span={24}>
              <p>Error: {error?.message}</p>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Feed;
