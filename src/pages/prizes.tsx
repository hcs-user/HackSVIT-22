import {
    Box,
    Flex,
    Heading,
    Container,
} from "@chakra-ui/react";
import { FirstPrizeIcon } from "../components/svgs";
import { SecondPrizeIcon } from "../components/svgs";
import { ThirdPrizeIcon } from "../components/svgs";
import PrizeCard from "../components/Prizecard";
import PRIZES from "../data/prizes.json";

export default function prizes() {
    return (
        <Container id='prizes' maxW='container.xl' pb='6'>
            <Flex justifyContent='center' gap='4' my='8'>
                <Heading size='2xl'>Prizes</Heading>
            </Flex>
            <Flex
                gap='12'
                py='10'
                flexWrap='wrap'
                justifyContent={["center", null, "center"]}
            >
                <PrizeCard
                    icon={FirstPrizeIcon}
                    amount='₹50,000'
                    description='First Prize'
                />
                <PrizeCard
                    icon={SecondPrizeIcon}
                    amount='₹30,000'
                    description='Second Prize'
                />
                <PrizeCard
                    icon={ThirdPrizeIcon}
                    amount='₹20,000'
                    description='Third Prize'
                />
                {PRIZES.map(prize => <PrizeCard logo={`/sponsors/${prize.img}`} amount={prize.prize} description={prize.description} />)}
            </Flex>
        </Container>
    )
}