import { AspectRatio, Divider } from '../styled-system/jsx';

import { Button } from './button/Button';

function App() {
  return (
    <>
      <AspectRatio ratio={1 / 2}>
        <img loading='lazy' src='https://picsum.photos/seed/tech/600/400' />
      </AspectRatio>
      {/* <Box as='article'>test Panda css</Box> */}
      <Divider color={'tonal.secondary.10'} />
      <Button>Test</Button>
    </>
  );
}

export default App;
