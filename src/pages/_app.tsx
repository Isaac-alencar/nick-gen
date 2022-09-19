import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import '@fontsource/rubik';
import '@fontsource/staatliches';

const theme = extendTheme({
  fonts: {
    heading: `'Staatliches', cursive;`,
    body: `'Rubik', sans-serif;`,
  },
  colors: {
    background: {
      default: 'orange.400',
      _dark: 'purple.900',
    },
    font: {
      default: 'gray.500',
      _dark: 'white',
    },
    primaryButton: {
      default: 'linear(to-r, teal.500, green.500)',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
