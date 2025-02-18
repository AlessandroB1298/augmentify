import GenerateAiDescription from "./gem"
import { userData } from "@/app/types/projectTypes"


//@param {data : userData[]} 
const GeneratePrompt = async (data: userData[]): Promise<string> => {
  return new Promise((resolve) => {
    let finalString = "I need you to generate a small output describing the users projects, "+
    "this output must be  really asthetic so make it look very nice, adding all the bells and whistles, using markdown but do not use backticks" +
     "in the response, make it as clean as possible this is for a cv augmenting site, do this using: ";
    let descriptions = "";
    let names = "";
    let types = "";

    data.forEach((collection) => {
      descriptions += "Project description: " + collection.description + " "
      names += "Project Names: " + collection.name + " ";
      types += "Project Types: " + collection.project_type + " ";
    })

    // return the final string
    finalString = finalString + descriptions + "\n" + names + "\n" + types + "\n";

    resolve(finalString);
  })
}
// this function allows the user to call the model on inital load when the user's data is loaded from pg-db


//@param {data : userData[]}

export const callModel = async (data: userData[]): Promise<string> => {
  //make inner function async 
  return new Promise(async (resolve) => {
    const prompt = await GeneratePrompt(data);
    if (prompt != "") {
      const response = GenerateAiDescription(prompt)
      if (response != null) {
        resolve(response);
      }
    }
  })
} 
