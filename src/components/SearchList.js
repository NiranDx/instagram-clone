
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Input, Typography } from 'antd';
import React, { useContext, useState } from 'react';
import { FetchQlUser } from '../api/getUser';
import { AuthContext } from '../App';


const { Title, Text } = Typography;

const SearchList = ({ name = "Nick", isFollow = false }) => {
    // const { users: data } = useContext(AuthContext);
    const [inputSearch, setInputSearch] = useState('')
    const { data: resData = [] } = FetchQlUser(undefined,null,inputSearch)
    const handleChange = (e) => {
        setInputSearch(e.target.value)
    }
    return (
        <>
            <div>
                <Input
                    placeholder="Search..."
                    allowClear
                    onChange={handleChange}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' }}>
                <Text strong level={5}>Recent</Text>
                <Button>Creal all</Button>
            </div>
            {resData.length === 0 ? <div style={{ textAlign: 'center', alignContent: 'center', minHeight: '80%'}}>No recent searches</div> : resData.map((item, index) => {
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
export default SearchList