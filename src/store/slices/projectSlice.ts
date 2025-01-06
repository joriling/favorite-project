import { Project } from "@/model/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectsState {
  lists: Project[];
}

const initialState: ProjectsState = {
  lists: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.lists = action.payload;
    },
    updateProject(state, action: PayloadAction<Project>) {
      const updatedProject = action.payload;
      const index = state.lists.findIndex(
        (project) => project.id === updatedProject.id
      );
      if (index !== -1) {
        state.lists[index] = updatedProject;
      }
    },
  },
});

export const { setProjects, updateProject } = projectSlice.actions;
export default projectSlice.reducer;
