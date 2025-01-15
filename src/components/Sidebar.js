import {
  BellOutlined,
  CompassOutlined,
  ContainerOutlined,
  HomeOutlined,
  MessageOutlined,
  PlayCircleOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Avatar, Drawer, Image, Layout, Menu } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import Logo from "../assets/images/logo512.png";
import "../css/sidebar.css";
import SearchList from "./SearchList";

const { Sider } = Layout;

const Sidebar = ({ PageSize }) => {
  const { users = [] } = useContext(AuthContext);
  const data = [...users]?.slice(0, 7) || [];
  const [open, setOpen] = useState(false);

  const handleMenuClick = (key) => {
    if (key !== "search") {
      setOpen(false);
    }
  };

  const showDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Sider
      id="container-sidebar"
      width={open ? 80 : 200}
      trigger={null}
      collapsible
      collapsed={open || PageSize <= 1024}
      theme="light"
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        bottom: 0,
        background: "#fff",
        zIndex: 100,
        boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
        height: "100vh",
      }}
    >
      <div
        className={`container-sidebar ${open || PageSize <= 1024 ? "collapsed-inactive" : ""
          }`}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{ fontWeight: "bold", color: "#000" }}>
            {open || PageSize <= 1024 ? <Image width={40} src={Logo} preview={false}/> : "SocialD"}
          </h2>
        </div>

        <Menu
          mode="vertical"
          theme="light"
          style={{ borderRight: 0 }}
          onClick={({ key }) => handleMenuClick(key)}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="search"
            icon={<SearchOutlined />}
            onClick={showDrawer} 
          >
            Search
          </Menu.Item>
          <Menu.Item key="explore" icon={<CompassOutlined />}>
            <Link to="/explore">Explore</Link>
          </Menu.Item>
          <Menu.Item key="reels" icon={<PlayCircleOutlined />}>
            <Link to="/reels">Reels</Link>
          </Menu.Item>
          <Menu.Item key="messages" icon={<MessageOutlined />}>
            <Link to="/messages">Messages</Link>
          </Menu.Item>
          <Menu.Item key="notifications" icon={<BellOutlined />}>
            <Link to="/notifications">Notifications</Link>
          </Menu.Item>
          <Menu.Item key="create" icon={<PlusCircleOutlined />}>
            <Link to="/create">Create</Link>
          </Menu.Item>
          <Menu.Item key="profile" icon={<Avatar
            src={data[0]?.avatar.large}
            style={{
              width: '20px',
              height: '20px',
              aspectRatio: '1 / 1',
            }}
            icon={<UserOutlined />}
          />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>

        <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
          <Menu mode="vertical" theme="light" style={{ borderRight: 0 }}>
            <Menu.Item key="threads" icon={<ContainerOutlined />}>
              <Link to="/threads">Threads</Link>
            </Menu.Item>
            <Menu.Item key="more" icon={<UserOutlined />}>
              <Link to="/more">More</Link>
            </Menu.Item>
          </Menu>
        </div>

        <Drawer
          title="Search"
          placement="left"
          onClose={() => setOpen(false)}
          open={open}
          rootStyle={{ left: "80px", zIndex: "90" }}
        >
          <SearchList />
        </Drawer>
      </div>
    </Sider>
  );
};

export default Sidebar;
