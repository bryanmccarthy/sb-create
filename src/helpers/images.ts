import server$ from 'solid-start/server';
import { openai } from './config';

// Create n Images by Prompt
export const createImages = server$(async (userPrompt: string, n: number) => {
  console.log("Creating Image");
  const prompt = `Children's Book Style: ${userPrompt}`;

  const response = await openai.createImage({
    prompt: prompt,
    n: n,
    size: "1024x1024",
  });
  console.log(response.data);
  const urls = response.data.data.map(obj => obj.url);
  return(urls); // List of Urls
});