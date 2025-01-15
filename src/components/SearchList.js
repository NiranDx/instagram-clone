
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Input, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { GetUserData } from '../api/getUser';

const { Text } = Typography;

const SearchList = ({ isShowSearch = true, search = '', setInputSearchClear = () => null }) => {
    const [inputSearch, setInputSearch] = useState('')
    const [result, setResult] = useState([])
    const { data: resData = [] } = GetUserData(1, inputSearch ? 10 : 6, inputSearch)
    const handleChange = (e) => {
        setInputSearch(e?.target?.value || "")

    }

    const onSearchClear = () => {
        setInputSearch("")
        setInputSearchClear()
    }

    useEffect(() => {
        return () => {
            setInputSearch(undefined)
            setResult([])
        }
    }, [])

    useEffect(() => {
        setInputSearch(search)

    }, [search])

    useEffect(() => {
        setResult(resData)
    }, [resData?.length])

    return (
        <>
            {
                isShowSearch && (
                    <div>
                        <Input
                            value={inputSearch}
                            placeholder="Search..."
                            allowClear
                            onChange={handleChange}
                            onPressEnter={handleChange}
                            onClear={handleChange}
                        />
                    </div>
                )
            }
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: !isShowSearch ? '0 0 20px 0' : '20px 0' }}>
                <Text strong level={5}>Recent</Text>
                <Button onClick={onSearchClear}>Creal all</Button>
            </div>
            {
                result.length === 0 ? <div style={{ textAlign: 'center', alignContent: 'center', minHeight: '80%' }}>{inputSearch?.length > 0 ? 'Not found searches' : 'No recent searches'}</div>
                    :
                    result.map((item, index) => {
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
                                        <Text>{`Followed by Nick`}</Text>
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