import DetailForm from "@/components/details/DetailForm";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projects = useSelector((state: RootState) => state.projects.lists);
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }
  return <div>{project && <DetailForm project={project} />}</div>;
};

export default ProjectDetail;
