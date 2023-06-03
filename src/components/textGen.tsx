import { createSignal } from 'solid-js';
import { generateText } from '.././helpers/text';

export default function TextGen() {
  const [prompt, setPrompt] = createSignal('');
  const [generatedText, setGeneratedText] = createSignal('');

  const handleGenerateText = async () => {
    const res = await generateText(prompt());
    setGeneratedText(res);
  }

  const handlePromptChange = (event: Event) => {
    setPrompt((event.target as HTMLInputElement).value);
  }

  return (
    <main class="my-8">
      <h1 class="text-xl m-2 font-semibold">Story</h1>
      <input class="border-2 border-black rounded m-2 p-1 w-2/3" placeholder='theme' value={prompt()} onInput={handlePromptChange} />
      <button class="rounded m-2 p-1 px-3 bg-black text-white" onClick={handleGenerateText}>Generate</button>
      <div class="flex">
        <p>{ generatedText() }</p>
      </div>
    </main>
  )
} 