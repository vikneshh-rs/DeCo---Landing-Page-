import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedBrief } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid immediate errors, though usage will fail without it.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateCreativeBrief = async (userIdea: string): Promise<GeneratedBrief | null> => {
  if (!ai) {
    console.error("API Key not found");
    // Return mock data for demo purposes if no key is present
    return {
      concept: "Please configure your API_KEY to get real AI insights. For now: A bold, futuristic approach to your idea.",
      visualDirection: "Neon gradients (Cyan & Magenta) against deep charcoal backgrounds.",
      targetAudience: "Tech-savvy millennials and Gen Z digital nomads."
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a world-class Creative Director at Team DeCo design agency. 
      A client has approached us with this idea: "${userIdea}".
      
      Generate a concise but highly impressive creative brief structure.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            concept: { type: Type.STRING, description: "The core creative concept and hook." },
            visualDirection: { type: Type.STRING, description: "Suggested color palette, typography style, and mood." },
            targetAudience: { type: Type.STRING, description: "Who this appeals to and why." }
          },
          required: ["concept", "visualDirection", "targetAudience"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as GeneratedBrief;

  } catch (error) {
    console.error("Error generating brief:", error);
    return null;
  }
};
