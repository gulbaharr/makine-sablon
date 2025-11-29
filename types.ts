export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  specs: Record<string, string>;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}