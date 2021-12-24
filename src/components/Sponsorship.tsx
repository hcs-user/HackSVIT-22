import { Text, Heading, Container, Center, chakra, HStack } from "@chakra-ui/react"
import HackClub from "./HackClub"
import StickerMule from "./StickerMule"

export default function Sponsorship() {
    return (
        <Container textAlign="center" py="4">
            <Heading>Sponsors</Heading>
            <a href="https://stickermule.com" target="_blank">
                <StickerMule />
            </a>
            <Heading>Event Partner</Heading>
            <a href="https://hackclub.com" target="_blank">
                <HackClub />
            </a>
            <Text>Intersted Sponsors can reach out at <Text as="a" href="mailto:sponsors@hackclubsvit.co" color="purple.300">sponsors@hackclubsvit.co</Text></Text>
        </Container>
    )
}