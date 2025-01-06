import { Project } from "@/model/api";
import { RootState } from "@/store";
import { Button, Layout, Table, theme } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const { Content } = Layout;
const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const columns = [
    {
      title: "Project ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
    },
    {
      title: "Project Manager",
      dataIndex: "manager",
      key: "manager",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: (_: any, record: Project) => (
        <Button type="primary">
          <Link to={`/project/${record.id}`}>Edit</Link>
        </Button>
      ),
    },
  ];

  const project = useSelector((state: RootState) => state.projects.lists);
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Table dataSource={project} columns={columns} rowKey="id" />
      </div>
    </Content>
  );
};

export default Home;
