import { AspectRatio, Divider } from '../styled-system/jsx';
import { button } from '../styled-system/recipes';

function App() {
  return (
    <>
      <AspectRatio ratio={1 / 2}>
        <img loading='lazy' src='https://picsum.photos/seed/tech/600/400' />
      </AspectRatio>
      {/* <Box as='article'>test Panda css</Box> */}
      <Divider color={'tonal.secondary.10'} />

      <button className={button()}>test</button>
      <button
        className={button({
          visual: 'edgy',
          size: 'lg',
          shape: 'square',
        })}
      >
        test
      </button>
    </>
  );
}

export default App;
