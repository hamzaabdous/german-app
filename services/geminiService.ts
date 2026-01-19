
import { GoogleGenAI, Type } from "@google/genai";
import { GermanLesson, Level } from "../types";

export const generateLesson = async (level: Level, topic: string): Promise<GermanLesson> => {
  // Initialize AI instance inside the function for fresh state
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  const prompt = `Act as an expert German teacher. Generate a structured German lesson for level ${level} on: "${topic}".
  Include translations in English and Arabic.
  Requirements:
  1. Vocabulary: 6 key terms.
  2. Grammar: Short clear rule.
  3. Examples: 3 sentences.
  4. Speaking: Short dialogue.
  5. Listening: 3-sentence script.
  6. Reading: 1 paragraph + 2 questions.
  7. Writing: 1 prompt + 1 sample.
  8. Pronunciation: 1 specific tip.
  9. Mini Quiz: 3 MCQ questions.
  10. Culture: 1 brief insight.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      thinkingConfig: { thinkingBudget: 0 }, // Disable thinking for maximum speed
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          level: { type: Type.STRING },
          unit: { type: Type.STRING },
          vocabulary: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                de: { type: Type.STRING },
                en: { type: Type.STRING },
                ar: { type: Type.STRING },
                phonetic: { type: Type.STRING }
              },
              required: ["de", "en", "ar"]
            }
          },
          grammar: { type: Type.STRING },
          examples: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                de: { type: Type.STRING },
                en: { type: Type.STRING },
                ar: { type: Type.STRING }
              },
              required: ["de", "en", "ar"]
            }
          },
          speaking: {
            type: Type.OBJECT,
            properties: {
              dialogue: { type: Type.STRING },
              roleplay: { type: Type.STRING }
            }
          },
          listening: {
            type: Type.OBJECT,
            properties: {
              script: { type: Type.STRING }
            }
          },
          reading: {
            type: Type.OBJECT,
            properties: {
              text: { type: Type.STRING },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    q: { type: Type.STRING },
                    options: { type: Type.ARRAY, items: { type: Type.STRING } },
                    correct: { type: Type.STRING }
                  }
                }
              }
            }
          },
          writing: {
            type: Type.OBJECT,
            properties: {
              prompt: { type: Type.STRING },
              sample: { type: Type.STRING }
            }
          },
          pronunciation: { type: Type.STRING },
          quiz: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                correctAnswer: { type: Type.STRING },
                type: { type: Type.STRING }
              }
            }
          },
          culture: { type: Type.STRING }
        },
        required: ["level", "unit", "vocabulary", "grammar", "examples", "speaking", "listening", "reading", "writing", "pronunciation", "quiz", "culture"]
      }
    }
  });

  try {
    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    return JSON.parse(text.trim()) as GermanLesson;
  } catch (error) {
    console.error("Failed to parse lesson JSON:", error);
    throw new Error("The AI response was invalid. Please try again.");
  }
};
