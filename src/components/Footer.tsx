import {
  Box,
  chakra,
  Container,
  Button,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  IconButton,
} from '@chakra-ui/react';
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FullLogo } from './Branding';

export default function Footer() {
  return (
    <Box bg='gray.700' borderTopLeftRadius='3xl' borderTopRightRadius='3xl' mt='12'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <FullLogo h={[12, 20, 24, 120]} w='auto' />
      </Container>

      <Container
        as={Stack}
        maxW={'6xl'}
        mt={4}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 Hack SVIT. All rights reserved.</Text>
        <Stack direction={'row'} spacing={6}>
          <IconButton aria-label={'Instagram'} icon={<FaInstagram />} />
          <IconButton aria-label={'Twitter'} icon={<FaTwitter />} />
          <IconButton aria-label={'YouTube'} icon={<FaYoutube />} />
          <IconButton aria-label={'Discord'} icon={<FaDiscord />} />
        </Stack>
      </Container>
    </Box>
  );
} 