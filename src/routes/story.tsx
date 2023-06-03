import { useParams } from "@solidjs/router";
import ImageGen from '.././components/imageGen';
import TextGen from '.././components/textGen';

export default function Story() {
  const params = useParams();

  return (
    <main>
      <TextGen />
      <ImageGen />
    </main>
  );
}