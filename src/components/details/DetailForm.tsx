import { Project } from "@/model/api";
import { AppDispatch, RootState } from "@/store";
import { updateProject } from "@/store/slices/projectSlice";
import {
  theme,
  Layout,
  Form,
  FormProps,
  Input,
  DatePicker,
  Button,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
  project: Project;
}

const { Content } = Layout;

type FieldType = {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  manager: string;
};

const DetailForm: React.FC<Props> = ({ project }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (values.id === project.id) {
      const update = {
        ...project,
        name: values.name,
        description: values.description,
        start_date: values.start_date
          ? dayjs(values.start_date).format("YYYY-MM-DD")
          : "",
        end_date: values.end_date
          ? dayjs(values.end_date).format("YYYY-MM-DD")
          : "",
        manager: values.manager,
      };
      dispatch(updateProject(update));
      navigate("/");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  // Use useEffect to reset form values when the project changes
  useEffect(() => {
    if (project) {
      form.setFieldsValue({
        id: project.id,
        name: project.name,
        description: project.description,
        start_date: project.start_date ? dayjs(project.start_date) : dayjs(),
        end_date: project.end_date ? dayjs(project.end_date) : dayjs(),
        manager: project.manager,
      });
    }
  }, [project, form]);

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
        <Form
          form={form} // Pass the form instance to Form component
          name="details"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Project ID"
            name="id"
            initialValue={project.id}
          >
            <Input readOnly className="border-0" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Project Name"
            name="name"
            initialValue={project.name}
            rules={[
              { required: true, message: "Please input a project name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Project Description"
            name="description"
            initialValue={project.description}
            rules={[
              {
                required: true,
                message: "Please input a project description!",
              },
            ]}
          >
            <TextArea rows={7} />
          </Form.Item>
          <Form.Item
            initialValue={
              project.start_date ? dayjs(project.start_date) : dayjs()
            }
            name="start_date"
            label="Start Date"
            rules={[{ required: true, message: "Please pick a start date." }]}
          >
            <DatePicker
              defaultValue={dayjs(project.start_date) || dayjs()}
              format="YYYY-MM-DD"
            />
          </Form.Item>
          <Form.Item
            initialValue={project.end_date ? dayjs(project.end_date) : dayjs()}
            name="end_date"
            label="End Date"
            rules={[{ required: true, message: "Please pick an end date." }]}
          >
            <DatePicker
              defaultValue={dayjs(project.end_date) || dayjs()}
              format="YYYY-MM-DD"
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="Project Manager"
            name="manager"
            initialValue={project.manager}
            rules={[
              { required: true, message: "Please input a project manager!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
};

export default DetailForm;
