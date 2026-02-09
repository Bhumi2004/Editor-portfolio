import { db } from "./db";
import { messages, projects, type InsertMessage, type Message, type Project, type InsertProject } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getProjects(): Promise<Project[]>;
  seedProjects(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async seedProjects(): Promise<void> {
    const existing = await this.getProjects();
    if (existing.length === 0) {
      await db.insert(projects).values([
        {
          title: "Fashion Reel Edit",
          description: "Fast-paced Instagram reel for a fashion brand featuring quick cuts and color grading.",
          imageUrl: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=800",
          category: "Reels",
          tags: ["Fashion", "Instagram", "Fast-paced"],
          featured: true
        },
        {
          title: "Travel Vlog Highlights",
          description: "Cinematic travel montage with sound design and smooth transitions.",
          imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
          category: "Vlog",
          tags: ["Travel", "Cinematic", "Sound Design"],
          featured: true
        },
        {
          title: "Product Commercial",
          description: "Clean and professional product showcase for a tech gadget.",
          imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
          category: "Commercial",
          tags: ["Product", "Clean", "Commercial"],
          featured: false
        },
        {
          title: "Lifestyle Content",
          description: "Engaging lifestyle content for social media influencers.",
          imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
          category: "Social Media",
          tags: ["Lifestyle", "Influencer", "Engagement"],
          featured: false
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
