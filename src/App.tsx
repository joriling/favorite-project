import { ConfigProvider } from "antd";
import React, { useEffect, useState } from "react";
import RootLayout from "./layouts/RootLayout";
import Home from "@/pages/Home";
import { fetchProjects } from "./services/mockAPI";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { setProjects } from "./store/slices/projectSlice";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetails/ProjectDetail";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const project = useSelector((state: RootState) => state.projects);

  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const fetchedProjects = await fetchProjects();
        dispatch(setProjects(fetchedProjects));
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#1777ff" } }}>
      <Router>
        <RootLayout menulist={project.lists} title="Favorite Projects">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </RootLayout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
