function create(project) {
  let projects = list();
  project.id = projects.length === 0 ? 0 : projects[-1].id + 1;
  projects = [...projects, project];
  localStorage.setItem('projects', JSON.stringify(projects));
  return projects;
}

function list() {
  return JSON.parse(localStorage.getItem('projects'));
}

function get(id) {
  return list().find(project => project.id === id);
}

function update(id, changes) {}

function remove(id) {}

export default { create, list, get, update, remove };

/*
let STOCK_PROJECTS = [
    {
      id: 0,
      name: 'Car Maintenance',
      lightColor: '#85CBCC',
      darkColor: '#41436A'
    },
    {
      id: 1,
      name: "Family's BBQ",
      lightColor: '#A8DEE0',
      darkColor: '#984063'
    },
    {
      id: 2,
      name: 'New Guitar',
      lightColor: '#F9E2AE',
      darkColor: '#C56C86'
    },
    {
      id: 3,
      name: 'Graduation',
      lightColor: '#FBC78D',
      darkColor: '#F64668'
    }
  ];
*/
