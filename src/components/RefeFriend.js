
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const RefeFriend = ({ nameId = "User test", name = "User", isFollow = false }) => (
    <>
        {[...Array(5)].map((item, index) => {
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
                            <Text strong>{nameId}</Text>
                            <Text>{`Followed by ${name}`}</Text>
                        </div>
                    </div>
                    {!isFollow &&
                        <>
                            <Button type="text">Follow</Button>
                        </>
                    }
                </div >
            );
        })}
    </>
);
export default RefeFriend