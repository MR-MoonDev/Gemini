// const apikey ="AIzaSyDYxg_2ST8y-SaKFEgLyub0FaQK3f678pM"
// import React from 'react'
// Import the necessary components from the @google/generative-ai package
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define your API key (consider using environment variables for security)
const apiKey = "AIzaSyDYxg_2ST8y-SaKFEgLyub0FaQK3f678pM";

// Initialize the Google Generative AI instance
const genAI = new GoogleGenerativeAI(apiKey);

// Define the model and generation configuration
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Define the run function to generate a response based on the prompt
const run = async (prompt) => {
  const chatSession = model.startChat({
    generationConfig,
    // Adjust safety settings if needed
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text(); // Return the result for further use
};

// Export the run function
export default run;
