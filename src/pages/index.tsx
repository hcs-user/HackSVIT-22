import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Stack,
  Heading,
  Image,
  HStack,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import Hero from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import Footer from '../components/Footer'
import GetNotified from "../components/GetNotified"
import Featured from "../components/Featured"
import Team from "../components/Team"
import Faq from "../components/Faq"
import Sponsorship from "../components/Sponsorship"


const Index = () => (
  <>
    <Hero />
    {/* <DarkModeSwitch /> */}
    {/* <CTA /> */}
    <Featured />
    <Sponsorship />
    <Faq />
    {/* <GetNotified /> */}
    {/* <Team /> */}
    <Stack dir="vertical" align="center" py="6">
      <Heading size="lg">
        Organized by
      </Heading>
      <HStack spacing='12' pt="6">

        <Image src="/hcs.png" h="32" />
        <Image src="/codingclub.png" h="32" />
      </HStack>
    </Stack>
    <Footer />
  </>
)

export default Index
