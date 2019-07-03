export interface Chapter {
  no: string;
  name: string;
  sections: Section[];
}

export interface Section {
  no: string;
  name: string;
  items: Item[];
}

export interface Item {
  no: string;
  name: string;
  description: string;
  level1: string;
  level2: string;
  level3: string;
  cwe: string;
  nist: string;
}
