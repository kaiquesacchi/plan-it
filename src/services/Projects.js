function getProjects() {
  return JSON.parse(localStorage.getItem('projects')) || {};
}

function setProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function create(project) {
  /*
  project = {
    title: <string>,
    lightColor: <#rgb>,
    darkColor: <#rgb>
    
    // Will be added:
    incomeAndExpenses: [<Obj>]
    date: <Date>
    notes: [<Obj>]
    id: <Int>
  }
  */
  let projects = getProjects();
  const keys = Object.keys(projects);
  const id = keys.length === 0 ? 0 : projects[keys[keys.length - 1]].id + 1;
  project = {
    ...project,
    id: id,
    date: new Date(),
    incomeAndExpenses: [],
    notes: []
  };

  projects[id] = project;
  setProjects(projects);

  return Object.values(projects);
}

function list() {
  const projects = JSON.parse(localStorage.getItem('projects')) || {};
  Object.values(projects);
  return Object.values(projects);
}

function get(id) {
  return getProjects()[id];
}

function update(id, changes) {
  let projects = getProjects();
  projects[id] = { ...projects[id], ...changes };
  setProjects(projects);
  return Object.values(projects);
}

function remove(idList) {
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
