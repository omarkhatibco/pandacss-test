import { AspectRatio, VStack, styled } from '../styled-system/jsx';
import { CardRoot } from './CardRoot';

function App() {
  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <img loading='lazy' src='https://picsum.photos/seed/tech/600/400' />
      </AspectRatio>
      <CardRoot>
        <VStack>
          <styled.h1 color='on.surface'>Lorem ipsum dolor sit amet</styled.h1>
          <styled.h2 color='on.surface.variant'>
            consectetur adipiscing
          </styled.h2>
        </VStack>
        <styled.p color='on.surface.variant' lineClamp={2}>
          Duis a libero id lorem bibendum tincidunt vel et mi. Mauris dapibus
          volutpat cursus. Phasellus scelerisque turpis at magna mattis
          lobortis. Nulla id lectus vitae lorem consectetur pellentesque.
        </styled.p>
      </CardRoot>
    </>
  );
}

export default App;
