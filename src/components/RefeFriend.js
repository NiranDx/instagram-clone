
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Typography } from 'antd';
import React, { useContext } from 'react';
import { FetchQlUser } from '../api/getUser';
import { AuthContext } from '../App';


const { Title, Text } = Typography;

const RefeFriend = ({ name = "Nick", isFollow = false }) => {
    const { users: data } = useContext(AuthContext);

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '4px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '16px',
                }}>
                    <Avatar
                        src={data[0]?.avatar.large}
                        style={{
                            width: '40px',
                            height: '40px',
                            aspectRatio: '1 / 1',
                        }}
                        icon={<UserOutlined />}
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                >
                    <Text strong>{data[0]?.name}</Text>
                    <Text>{`Followed by ${data[0]?.name}`}</Text>
                </div>
                <div><Button type="text">Switch</Button></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                <div style={{ alignContent: 'center' }}>Suggested for you</div>
                <Button type="text">See All</Button>
            </div>

            {data.map((item, index) => {
                return (
                    <div key={`item-${index}`}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '4px'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: '16px',
                            }}
                        >
                            <Avatar
                                src={item.avatar.large}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    aspectRatio: '1 / 1',
                                }}
                                icon={<UserOutlined />}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Text strong>{item.name}</Text>
                                <Text>{`Followed by ${name}`}</Text>
                            </div>
                        </div>
                        {!item.isFollowing &&
                            <>
                                <Button type="text">Follow</Button>
                            </>
                        }
                    </div >
                );
            })}
        </>
    )
};
export default RefeFriend