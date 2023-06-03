import server$ from 'solid-start/server';
import { openai } from './config';

export const generateText = server$( async(userPrompt: string) => {
  console.log("generating Text");
  const prompt = `Write a short childrens story (300-400 words) about the following theme: ${userPrompt}`;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}]
  });

  // @ts-ignore
  console.log(response.data.choices[0].message.content);
  // @ts-ignore
  return(response.data.choices[0].message.content);
});