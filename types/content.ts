export type ContentCard = {
  number?: string;
  id?: string;
  title: string;
  tagline?: string;
  description: string;
  icon: string;
  href?: string;
  color?: string;
};

export type NavigationItem = {
  name: string;
  href: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ServiceCategory = {
  number: string;
  id: string;
  title: string;
  tagline: string;
  icon: string;
  services: string[];
};

export type LeadershipPrinciple = {
  number: string;
  title: string;
  description: string;
  symbol: string;
};