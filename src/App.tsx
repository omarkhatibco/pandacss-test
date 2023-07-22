import { AspectRatio } from '../styled-system/jsx';
import { SkeletonCircle } from './SkeletonCircle';

function App() {
  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <img loading='lazy' src='https://picsum.photos/seed/tech/600/400' />
      </AspectRatio>
      <SkeletonCircle size='100px' />
    </>
  );
}

export default App;
