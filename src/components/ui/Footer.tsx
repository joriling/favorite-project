import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const LayoutFooter = () => (
  <Footer style={{ textAlign: "center" }}>
    Favorite Projects ©{new Date().getFullYear()} Created by Jolly
  </Footer>
);

export default LayoutFooter;
