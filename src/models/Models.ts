import type { MarkdownContent } from "astro";

export type Section = {
  title: string;
  subtitle: string;
  description: {
    raw: any;
    html: string;
    markdown: string;
    text: string;
  };
  backgroundImage: {
    url: string;
  };
  subsections: Subsection[];
  order: number;
  sectionId: string;
  includeInNavigation: boolean;
};

export type Subsection = {
  title: string;
  subtitle: string;
  description: string;
  order: number;
  subsectionId: string;
  link: string;
  media: {
    url: string;
  }
};

export type Review = {
  name: string;
  location: string;
  text: string;
  date: string;
  image: string;
  stars: number;
};

export type SoMeLink = {
  title: string;
  link: string;
  icon: string;
  someId: string;
};
