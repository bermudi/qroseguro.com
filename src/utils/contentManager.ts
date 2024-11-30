import { ContentData } from '../types/content';
import contentData from '../content/data.json';

class ContentManager {
  private static instance: ContentManager;
  private content: ContentData;

  private constructor() {
    this.content = contentData as ContentData;
  }

  public static getInstance(): ContentManager {
    if (!ContentManager.instance) {
      ContentManager.instance = new ContentManager();
    }
    return ContentManager.instance;
  }

  public getHero() {
    return this.content.hero;
  }

  public getFeatures() {
    return this.content.features;
  }

  public getSections() {
    return this.content.sections.sort((a, b) => a.order - b.order);
  }

  public getFAQs() {
    return this.content.faqs;
  }

  public getSection(id: string) {
    return this.content.sections.find(section => section.id === id);
  }

  public getStatistics() {
    return this.content.statistics;
  }

  public getSteps() {
    return this.content.steps;
  }

  public getContact() {
    return this.content.contact;
  }

  public getFooter() {
    return this.content.footer;
  }
}

export default ContentManager.getInstance();
