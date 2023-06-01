import { useParams } from "@solidjs/router";

export default function Story() {
  const params = useParams();

  return (
    <main>
      <p>story: {params.id}</p>
    </main>
  );
}