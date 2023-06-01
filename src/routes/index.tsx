import { createImages } from '.././helpers/images';
import { createSignal } from 'solid-js';
import { A } from 'solid-start';

export default function Home() {
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

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <div class="flex flex-col border-2 items-center justify-center">
        <input class="border-2 m-2" placeholder='Image prompt' value={prompt()} onInput={handlePromptChange} />
        <input class="border-2" type='number' placeholder='1' value={n()} onInput={handleNChange} />
        <button onClick={handleCreateImages}>Create Images</button>
      </div>
      <div class="flex justify-center align-middle">
        {images().map((url) => (
          <div class="w-44 h-44">
            <img src={url} />
          </div>
        ))}
      </div>
      <A class="m-3 border-2" href="/story/1">Story</A>
      <A class="m-3 border-2" href="/story/2">Story</A>
      <A class="m-3 border-2" href="/story/3">Story</A>
    </main>
  );
}
