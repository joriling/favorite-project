import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

interface Props {
  head: string;
  child: string;
}

const Breadcrumbs = ({ head, child }: Props) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>
        <Link to="/">{head}</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{child}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
