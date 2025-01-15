import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Typography } from 'antd';
import React, { useContext } from 'react';
import { AuthContext } from '../App';
import '../css/refeFriend.css';

const { Text } = Typography;

const RefeFriend = ({ name = "Nick", isFollow = false }) => {
    const { users = [] } = useContext(AuthContext);
    const data = [...users]?.slice(1, 8); 
    if(users.length == 0) return null
    return (
        <div id='container-refe-friend'>
            <div className='container-refe-friend'>
                <div className='friend-header'>
                    <div className='friend-info'>
                        <Avatar
                            src={users[0]?.avatar?.large}
                            className='avatar'
                            icon={<UserOutlined />}
                        />
                        <div className='friend-details'>
                            <Text strong>{users[0]?.name}</Text>
                            <Text>{`Followed by ${users[0]?.name}`}</Text>
                        </div>
                    </div>
                    <Button type="text">Switch</Button>
                </div>

                <div className='suggestion-header'>
                    <Text>Suggested for you</Text>
                    <Button type="text">See All</Button>
                </div>

                {data.map((item, index) => (
                    <div key={`item-${index}`} className='friend-item'>
                        <div className='friend-info'>
                            <Avatar
                                src={item.avatar?.large}
                                className='avatar'
                                icon={<UserOutlined />}
                            />
                            <div className='friend-details'>
                                <Text strong>{item.name}</Text>
                                <Text>{`Followed by ${name}`}</Text>
                            </div>
                        </div>
                        {!item.isFollowing && <Button type="text">Follow</Button>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RefeFriend;
