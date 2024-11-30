export interface Section {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FooterLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface ContentData {
  sections: Section[];
  features: Feature[];
  faqs: FAQ[];
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  statistics: Statistic[];
  steps: Step[];
  footer: {
    sections: FooterSection[];
    bottomText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaSubtext: string;
  };
}
