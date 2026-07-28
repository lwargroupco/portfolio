export type NavigationItem = {
  name: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Verticals",
    href: "/verticals",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Leadership",
    href: "/leadership",
  },
];

export const companyLinks: NavigationItem[] = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Leadership",
    href: "/leadership",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export const verticalLinks: NavigationItem[] = [
  {
    name: "LWAR Technologies",
    href: "/verticals#technologies",
  },
  {
    name: "LWAR Intelligence",
    href: "/verticals#intelligence",
  },
  {
    name: "LWAR Digital",
    href: "/verticals#digital",
  },
  {
    name: "LWAR Academy",
    href: "/verticals#academy",
  },
  {
    name: "LWAR Research & Think Tank",
    href: "/verticals#research",
  },
];

export const serviceLinks: NavigationItem[] = [
  {
    name: "Strategy & Advisory",
    href: "/services#strategy",
  },
  {
    name: "Build & Implementation",
    href: "/services#implementation",
  },
  {
    name: "Training & Development",
    href: "/services#training",
  },
  {
    name: "Research & Knowledge",
    href: "/services#research",
  },
  {
    name: "Who We Serve",
    href: "/services#who-we-serve",
  },
];