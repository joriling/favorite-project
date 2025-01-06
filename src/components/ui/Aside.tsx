import { Layout, Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";
import { Project } from "@/model/api";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface Props {
  menulist: Project[];
  title: string;
}

const Aside = ({ menulist, title }: Props) => {
  const location = useLocation();

  const currentPath = location.pathname;
  const activeKey = currentPath.startsWith("/project/")
    ? currentPath.split("/project/")[1]
    : "";
  const menuItems = menulist.map((list) =>
    getItem(
      <Link to={`/project/${list.id}`}>{list.name}</Link>,
      list.id,
      <RightSquareOutlined />
    )
  );
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div>
        <h1 className="text-lg text-white font-bold text-center py-2">
          <Link to="/">{title}</Link>
        </h1>
      </div>
      <Menu
        theme="dark"
        selectedKeys={[activeKey]}
        mode="inline"
        items={menuItems}
      />
    </Sider>
  );
};

export default Aside;
