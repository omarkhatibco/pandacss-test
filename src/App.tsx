import { AspectRatio } from '../styled-system/jsx';

function App() {
  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <img loading='lazy' src='https://picsum.photos/seed/tech/600/400' />
      </AspectRatio>
    </>
  );
}

export default App;
