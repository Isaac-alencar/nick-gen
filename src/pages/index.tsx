import Head from 'next/head';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  useTheme,
} from '@chakra-ui/react';
import Link from 'next/link';
import Header from '../components/header';

export default function Home() {
  const { colors } = useTheme();
  const { primaryButton, background } = colors;

  return (
    <>
      <Head>
        <title>Awesome NickGen</title>
        <meta
          name='description'
          content='Generator of cool nicknames for uncriative people'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        direction='column'
        height='100vh'
        bg={background.default}
        color='white'
      >
        <Header />

        <Center p={4} flex={1}>
          <Flex flexDir='column' alignItems='center'>
            <Heading as='h1' size='2xl'>
              Awesome NickGen
            </Heading>
            <Text
              mt={4}
              mb={10}
              as='span'
              size='md'
              noOfLines={3}
              textAlign='center'
            >
              If you are a noob when the matter is creating a cool nickname
              <Spacer />
              to your gaming accounts, we&apos;ve got the solution for you.
            </Text>
            <Link href='teste'>
              <Button bgGradient={primaryButton.default} as='a'>
                <Text as='span' fontWeight={700}>
                  Check this out!
                </Text>
              </Button>
            </Link>
          </Flex>
        </Center>
      </Flex>
    </>
  );
}
