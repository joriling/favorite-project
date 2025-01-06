import React from "react";
import { Layout, theme } from "antd";
import Breadcrumbs from "./Breadcrumbs";
import { useLocation } from "react-router-dom";
const { Header } = Layout;

const LayoutHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useLocation();
  const child = location.pathname === "/" ? "List" : "Details";
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }} />
      <div className="px-4">
        <Breadcrumbs head="Projects" child={child} />
      </div>
    </>
  );
};

export default LayoutHeader;
