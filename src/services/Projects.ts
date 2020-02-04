import { ProjectArtifact, Project } from './../types/Projects';

interface ProjectsObject {
  [id: number]: Project;
}

// Auxiliary functions _________________________________________________
function getProjects(): ProjectsObject {
  return JSON.parse(localStorage.getItem('projects') || '{}');
}

function setProjects(projects: ProjectsObject) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Exported functions __________________________________________________

function create(project: ProjectArtifact): Project[] {
  // Transforms a ProjectArtifact in Project object and saves it on LocalStorage.

  let projects = getProjects();
  const keys: number[] = Object.keys(projects).map(key => parseInt(key));
  const id: number = keys.length === 0 ? 0 : projects[keys[keys.length - 1]].id + 1;
  const newProject: Project = {
    ...project,
    id: id,
    date: new Date(),
    incomeAndExpenses: [],
    notes: []
  };

  projects[id] = newProject;
  setProjects(projects);

  return Object.values(projects);
}

function list(): Project[] {
  const projects = getProjects();
  return Object.values(projects);
}

function get(id: number): Project {
  return getProjects()[id];
}

function update(id: number, changes: object): Project[] {
  let projects = getProjects();
  projects[id] = { ...projects[id], ...changes };
  setProjects(projects);
  return Object.values(projects);
}

function remove(idList: number[]): Project[] {
  let projects = getProjects();
  idList.forEach(id => {
    delete projects[id];
  });
  setProjects(projects);
  return Object.values(projects);
}

export default { create, list, get, update, remove };
