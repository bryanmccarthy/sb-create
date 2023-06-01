import { A } from 'solid-start';
import { createSignal } from 'solid-js';

export default function Home() {
  const [stories, setStories] = createSignal([
    {
      id: 1,
      title: 'story 1'
    },
    {
      id: 2,
      title: 'story 2'
    }
  ]);

  return (
    <main class="flex flex-col">
      <h1 class="text-xl m-2 font-semibold">Stories</h1>
      <div class="flex">
        {stories().map((story) => (
          <A class="m-2 p-1 border-2 border-black rounded w-40 h-40" href={`/story/${story.id}`}>
            <h3>{story.title}</h3>
          </A>
        ))}
      </div>
    </main>
  );
}
