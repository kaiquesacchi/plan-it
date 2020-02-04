export interface ProjectArtifact {
  [index: string]: any;
  title: string;
  lightColor: string;
  darkColor: string;
}

export interface Project extends ProjectArtifact {
  incomeAndExpenses: IncomeAndExpenses[];
  date: Date;
  notes: string[];
  id: number;
}

export interface IncomeAndExpenses {
  title: string;
  value: number;
}
