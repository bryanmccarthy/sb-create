import { createImages } from '.././helpers/images';
import { createSignal } from 'solid-js';

export default function ImageGen() {
  const [prompt, setPrompt] = createSignal<string>('');
  const [n, setN] = createSignal<number>(1);
  const [images, setImages] = createSignal<any[]>([]);

  const handlePromptChange = (event: Event) => {
    setPrompt((event.target as HTMLInputElement).value);
  }

  const handleNChange = (event: Event) => {
    setN(Number((event.target as HTMLInputElement).value));
  }

  const handleCreateImages = async () => {
    const res = await createImages(prompt(), n());
    setImages(res);
  }

  const handleSelectImage = (url: string) => {
    console.log(url);
  }

  return (
    <main class="my-8">
      <h1 class="text-xl m-2 font-semibold">Pictures</h1>
      <div class="flex flex-row">
        <input class="border-2 border-black rounded m-2 p-1 w-2/3" placeholder='prompt' value={prompt()} onInput={handlePromptChange} />
        <input class="border-2 border-black rounded m-2 p-1 w-12" type='number' placeholder='1' value={n()} onInput={handleNChange} />
        <button class="rounded m-2 p-1 px-3 bg-black text-white" onClick={handleCreateImages}>Create</button>
      </div>
      <div class="flex">
        {images().map((url) => (
          <div class="w-64 h-64 m-4">
            <img class="rounded" src={url} />
            <button class="rounded mt-1 p-1 px-3 bg-black text-white" onClick={() => handleSelectImage(url)}>Select</button>
          </div>
        ))}
      </div>
    </main>
  )
}