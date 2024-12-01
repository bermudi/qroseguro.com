export interface Section {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface SectionContent {
  title: string;
  subtitle: string;
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

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: string;
}

export interface SupportTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContentData {
  sections: Section[];
  sectionContent: { [key: string]: SectionContent };
  features: Feature[];
  faqs: FAQ[];
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaSecondaryText: string;
  };
  header: {
    title: string;
    signIn: string;
    getStarted: string;
  };
  statistics: Statistic[];
  steps: Step[];
  about: {
    title: string;
    subtitle: string;
    description: string;
    team: TeamMember[];
  };
  support: {
    title: string;
    subtitle: string;
    topics: SupportTopic[];
    contactInfo: {
      email: string;
      phone: string;
      hours: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaSubtext: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submitText: string;
    };
  };
  footer: {
    sections: FooterSection[];
    bottomText: string;
  };
  nav: {
    links: {
      id: string;
      label: string;
      url: string;
    }[];
  };
}
