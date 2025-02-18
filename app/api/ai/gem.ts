// This function will return a chunk from gemini, describing the user's project details
import { generateText } from "ai";
import { createGoogleGenerativeAI } from '@ai-sdk/google';


export default async function GenerateAiDescription(prompt: string): Promise<string> {


  return new Promise(async (resolve) => {
    // establish connection with the model

    const googleModel = createGoogleGenerativeAI({
      baseURL: "https://generativelanguage.googleapis.com/v1beta",
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY
    })

    const model = googleModel('gemini-2.0-flash');


    const { text } = await generateText({
      model,
      prompt
    })

    if (text != null) {
      resolve(text)
    }
  })

} 
