import { JSX } from "react";

import { Layout } from "antd";
import Aside from "@/components/ui/Aside";
import LayoutHeader from "@/components/ui/Header";
import LayoutFooter from "@/components/ui/Footer";
import { Project } from "@/model/api";

interface Props {
  children: JSX.Element | JSX.Element[];
  menulist: Project[];
  title: string;
}

const RootLayout = ({ children, menulist, title }: Props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Aside menulist={menulist} title={title} />
      <Layout>
        <LayoutHeader />
        {children}
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default RootLayout;
