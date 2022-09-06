import Head from "next/head";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome NickGen</title>
        <meta
          name="description"
          content="Generator of cool nicknames for uncriative people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="purple.900" h="100vh" p={4} color="white">
        <Center h="100%">
          <Flex flexDir="column" alignItems="center">
            <Heading as="h1" size="2xl">
              Awesome NickGen
            </Heading>
            <Text as="span" size="md">
              Generate your nicknames
            </Text>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
