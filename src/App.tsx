import { AspectRatio, Divider, styled } from '../styled-system/jsx';

function App() {
  return (
    <>
      <AspectRatio ratio={1 / 2}>
        <img loading='lazy' src='https://picsum.photos/seed/tech/600/400' />
      </AspectRatio>
      {/* <Box as='article'>test Panda css</Box> */}
      <Divider color={'tonal.secondary.10'} />
      <styled.p lineClamp={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
        posuere enim. In hendrerit arcu eu leo molestie faucibus. Aliquam erat
        volutpat. Curabitur dignissim at justo ac vehicula. Vivamus mollis, nunc
        nec commodo volutpat, tortor mi mattis ipsum, id consequat neque est
        eget augue. Sed facilisis volutpat magna ac dictum. Sed quis pretium
        orci. Cras vestibulum vitae dolor in tempus. Sed nec laoreet ante.
        Pellentesque aliquet quis libero a posuere. Pellentesque convallis metus
        nec enim aliquam, in sagittis velit pretium. Nam dignissim placerat
        metus, nec dictum mi convallis vel. Sed vehicula dolor velit, eu
        dignissim massa rutrum at. Suspendisse maximus est sit amet arcu
        pharetra, at egestas tortor lacinia. Etiam sagittis, leo a vestibulum
        egestas, arcu turpis volutpat nibh, sit amet feugiat dolor neque vel
        ipsum. Cras in libero nibh.
      </styled.p>
    </>
  );
}

export default App;
