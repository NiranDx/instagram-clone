import { LeftCircleFilled, RightCircleFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Carousel, Col, Typography } from 'antd';
import React, { useContext } from 'react';
import { AuthContext } from '../App';
import '../css/instagramStory.css';

const { Title } = Typography;
const InstagramStory = () => {
  const { users = [] } = useContext(AuthContext);
  const data = [...users]?.slice(0, 48) || [];

  return (
    <div id='container-instagramStory'>
      <div className='container-instagramStory'>
        <Carousel
          infinite={false}
          dots={false}
          arrows={true}
          draggable={true}
          swipe={true}
          swipeToSlide={true}
          touchMove={true}
          slidesToShow={6}
          slidesToScroll={6}
          prevArrow={<LeftCircleFilled />}
          nextArrow={<RightCircleFilled />}
          responsive={[
            {
              breakpoint: 1200,
              settings: { slidesToShow: 6, slidesToScroll: 6 },
            },
            {
              breakpoint: 992,
              settings: { slidesToShow: 6, slidesToScroll: 6 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 5, slidesToScroll: 5 },
            },
            {
              breakpoint: 576,
              settings: { slidesToShow: 5, slidesToScroll: 5 },
            },
          ]}
        >
          {data.map((user, index) => (
            <div key={`carousel-${index}`} className="carousel-slide">
              <Col key={`carousel-item-${user.id}`} span={4} offset={[16, 16]} className="carousel-item">
                <Col>
                  <Avatar src={user.avatar.large} size={48} icon={<UserOutlined />} />
                </Col>
                <Col>
                  <Title
                    ellipsis={{
                      rows: 1,
                      expandable: false,
                      symbol: '...',
                    }}
                    className="user-name">
                    {user.name}
                  </Title>
                </Col>
              </Col>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InstagramStory;
