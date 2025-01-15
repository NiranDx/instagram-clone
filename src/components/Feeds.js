import {
  BookOutlined,
  CommentOutlined,
  EllipsisOutlined,
  HeartFilled,
  HeartOutlined,
  SendOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Spin, Typography } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { GetFeedsData } from '../api/getFeeds';
import imageReload from '../assets/images/reload.jpg';
import '../css/feeds.css';
import HeartAnimetion from './HeartAnimation';
import ViewMoreDetail from './ViewMoreDetail';

const { Text } = Typography;

const Feed = () => {
  const [page, setPage] = useState(1);
  const [feedData, setFeedData] = useState([]);
  const [likedPosts, setLikedPosts] = useState(new Set());

  const { data, loading, error } = GetFeedsData(page, 20);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      setPage((prev) => prev + 1);
    }
  }, []);

  const toggleLike = (id, isLikedOnly = false) => {
    setLikedPosts((prev) => {
      const updatedLikes = new Set(prev); 
      if (updatedLikes.has(id) && !isLikedOnly) {
        updatedLikes.delete(id);
      } else {
        updatedLikes.add(id);
      }
      return updatedLikes;
    });
  };

  const convertTimestampToDatetime = (timestamp = new Date(), options = {}) => {
    const date = new Date(timestamp * 1000);
    const locale = options.locale || 'default';
    const formatOptions = options.formatOptions || {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    return date.toLocaleString(locale, formatOptions);
  };

  const formatComments = (number) => {
    if (typeof number !== "number" || number < 0) {
      return 0;
    }

    const thresholds = {
      k: 1000,
      m: 1000000,
      b: 1000000000,
    };

    if (number >= thresholds.b) {
      return (number / thresholds.b).toFixed(1) + 'b';
    } else if (number >= thresholds.m) {
      return (number / thresholds.m).toFixed(1) + 'm';
    } else if (number >= thresholds.k) {
      return (number / thresholds.k).toFixed(1) + 'k';
    } else {
      return number.toString();
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setFeedData((prev) => [...prev, ...data]);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);


  return (
    <div id="container-feed">
      <div className="container-feed">
        <Row gutter={[16, 16]}>
          {feedData.map((post, index) => (
            <Col span={24} key={`feed-${index}`}>
              <Card className="card">
                <Card.Meta
                  title={
                    <div className="header">
                      <div className="user-info">
                        <Avatar
                          src={post?.user?.avatar?.large || imageReload}
                          size={32}
                          icon={<UserOutlined />}
                        />
                        <div className="username">
                          <Text strong>{post?.user?.name}</Text>
                          <Text className="timestamp">{convertTimestampToDatetime(post?.createdAt)}</Text>
                        </div>
                      </div>
                      <div>
                        <EllipsisOutlined />
                      </div>
                    </div>
                  }
                  description={
                    <div>
                      <div className="image-container">
                        <HeartAnimetion
                          isActive={likedPosts.has(post?.id)}
                          toggleLike={() => toggleLike(post?.id, true)}
                        />
                        <img
                          alt={`cover-feed-${post?.id}`}
                          src={post?.user?.bannerImage || imageReload}
                        />
                      </div>
                      <div className="actions">
                        <div className="action-buttons">
                          <Button
                            type="link"
                            onClick={() => toggleLike(post?.id)}
                          >
                            {likedPosts.has(post?.id) ? (
                              <HeartFilled style={{ color: '#f00' }} />
                            ) : (
                              <HeartOutlined />
                            )}
                          </Button>
                          <Button type="link"><CommentOutlined /></Button>
                          <Button type="link"><SendOutlined /></Button>
                        </div>
                        <Button type="link"><BookOutlined /></Button>
                      </div>
                      <div className="likes-comments">
                        <Text strong>{formatComments(likedPosts.has(post?.id) ? post?.likeCount + 1 : post?.likeCount)} Likes</Text>
                        <Text style={{ marginLeft: '10px' }}>{formatComments(post?.replyCount)} Comments</Text>
                      </div>
                      <Text strong>{post?.user?.name}</Text>
                      <Text>
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
          { loading &&(
            <Col span={24} style={{ textAlign: 'center', padding: 50, width: '100%'}}>
              <div >
                <Spin style={{position: 'relative', height: feedData.length == 0 ? '80dvh' : '80px'}} tip="Loading More..."> </Spin>
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
