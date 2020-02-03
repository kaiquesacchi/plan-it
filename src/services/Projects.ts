interface ProjectArtifact {
  title: string;
  lightColor: string;
  darkColor: string;
}

interface Project extends ProjectArtifact {
  incomeAndExpenses: IncomeAndExpenses[];
  date: Date;
  notes: string[];
  id: number;
}

interface IncomeAndExpenses {
  title: string;
  value: number;
}

interface ProjectsObject {
  [id: number]: Project;
}

function getProjects(): ProjectsObject {
  return JSON.parse(localStorage.getItem('projects') || '{}');
}

function setProjects(projects: ProjectsObject) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

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

function get(id: number): Project | undefined {
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

/*
let STOCK_PROJECTS = [{id: 0,title: 'Car Maintenance',lightColor: '#85CBCC',darkColor: '#41436A',incomeAndExpenses: [],notes: []},{id: 1,title: "Family's BBQ",lightColor: '#A8DEE0',darkColor: '#984063',incomeAndExpenses: [],notes: []},{id: 2,title: 'New Guitar',lightColor: '#F9E2AE',darkColor: '#C56C86',incomeAndExpenses: [],notes: []},{id: 3,title: 'Graduation',lightColor: '#FBC78D',darkColor: '#F64668',incomeAndExpenses: [],notes: []}
  ];
*/
