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
                <PrizeCard
                    logo='/sponsors/polygon.svg'
                    amount='₹10,000'
                    description='for the best hack built on Ethereum'
                    url='https://www.notion.so/devfolio/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c'
                />
                <PrizeCard
                    logo='/sponsors/polygon.svg'
                    amount='₹15,000'
                    description='for the best hack built on Ethereum + Polygon'
                    url='https://www.notion.so/devfolio/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c'
                />
                <PrizeCard
                    logo='/sponsors/tezos.svg'
                    amount='₹20,000'
                    description='for best Dapp built on Tezos'
                    url='https://www.notion.so/devfolio/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff'
                />
                <PrizeCard
                    logo='/sponsors/filecoin.svg'
                    amount='₹20,000'
                    description='for best use of IPFS and/or Filecoin'
                    url='https://devfolio.notion.site/Filecoin-Devfolio-Hackathon-Season-Prize-998fc3fe477e474086ae1d5ed1685203'
                />
                <PrizeCard
                    logo='/sponsors/celo.svg'
                    amount='₹20,000'
                    description='for best Dapp built on Celo'
                    url='https://www.notion.so/devfolio/Celo-Devfolio-Hackathon-Season-Prize-8b98dac17f134abeae863d5d98c01ff0'
                />
            </Flex>
        </Container>
    )
}