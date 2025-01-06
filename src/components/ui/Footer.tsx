import { Layout } from "antd";

const { Footer } = Layout;

const LayoutFooter = () => (
  <Footer style={{ textAlign: "center" }}>
    Favorite Projects ©{new Date().getFullYear()} Created by Jolly
  </Footer>
);

export default LayoutFooter;
