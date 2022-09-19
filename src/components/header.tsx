import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { IoLogoGithub, IoMdMoon, IoMdSunny } from 'react-icons/io';
import { SiDiscord } from 'react-icons/si';

const Header = () => {
  return (
    <Flex
      justifyContent='space-between'
      bg='blackAlpha.500'
      paddingX={4}
      paddingY={2}
    >
      <Heading fontSize={32}>NickGen</Heading>

      <Flex>
        <IconButton
          aria-label='Discord'
          variant='ghost'
          _hover={{ color: '#fffa' }}
          fontSize={26}
          icon={<SiDiscord />}
        />
        <IconButton
          aria-label='Github'
          variant='ghost'
          _hover={{ color: '#fffa' }}
          fontSize={26}
          icon={<IoLogoGithub />}
        />
        <Box>
          <IconButton
            aria-label='Light Theme'
            variant='ghost'
            _hover={{ color: '#fffa' }}
            fontSize={26}
            icon={<IoMdSunny />}
          />
          <IconButton
            aria-label='Dark Theme'
            variant='ghost'
            _hover={{ color: '#fffa' }}
            fontSize={26}
            icon={<IoMdMoon />}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
