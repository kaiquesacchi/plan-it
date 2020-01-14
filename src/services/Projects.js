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
  let projects = list();
  project = {
    ...project,
    id: projects.length === 0 ? 0 : projects[projects.length - 1].id + 1,
    date: new Date(),
    incomeAndExpenses: [],
    notes: []
  };
  projects = [...projects, project];
  localStorage.setItem('projects', JSON.stringify(projects));
  return projects;
}

function list() {
  return JSON.parse(localStorage.getItem('projects')) || [];
}

function get(id) {
  return list().find(project => project.id === id);
}

function update(id, changes) {}

function remove(id) {}

export default { create, list, get, update, remove };

/*
let STOCK_PROJECTS = [{id: 0,title: 'Car Maintenance',lightColor: '#85CBCC',darkColor: '#41436A',incomeAndExpenses: [],notes: []},{id: 1,title: "Family's BBQ",lightColor: '#A8DEE0',darkColor: '#984063',incomeAndExpenses: [],notes: []},{id: 2,title: 'New Guitar',lightColor: '#F9E2AE',darkColor: '#C56C86',incomeAndExpenses: [],notes: []},{id: 3,title: 'Graduation',lightColor: '#FBC78D',darkColor: '#F64668',incomeAndExpenses: [],notes: []}
  ];
*/
