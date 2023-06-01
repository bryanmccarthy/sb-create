import { useParams } from "@solidjs/router";
import ImageGen from '.././components/imageGen';

export default function Story() {
  const params = useParams();

  return (
    <main>
      <ImageGen />
    </main>
  );
}