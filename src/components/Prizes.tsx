import {
	Box,
	Button,
	Flex,
	Heading,
	Img,
	chakra,
	Text,
	VStack,
	Icon,
	Container,
	Link,
	HStack,
} from "@chakra-ui/react";
import { FirstPrizeIcon, SecondPrizeIcon, ThirdPrizeIcon } from "./svgs";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import PrizeCard from "./Prizecard";

export default function Prizes() {
	const router = useRouter();

	return (
		<Container id='prizes' maxW='container.xl' pb='6'>
			<Box as='svg' viewBox='0 0 361.402 196.332' my='4' ps='20' maxW='sm'>
				<path
					id='Path_13'
					data-name='Path 13'
					d='M1561.374,5106.938c11.287,54.063-42.777,184.755-148.436,104.747s-164.169-37.368-181.967,0-14.01,74.487-14.01,74.487'
					transform='translate(-1209.059 -5098.064)'
					fill='none'
					stroke='#0083ff'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='15'
				/>
			</Box>
			<Flex align='flex-end' gap='4' mb='4'>
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
					logo='/sponsors/deso.svg'
					amount='$100 worth of $DESO coin and an exclusive DeSo Tumbler'
					description='Best Use of DeSo'
				/>
				<PrizeCard
					logo='/sponsors/circleci.svg'
					amount='CircleCI Swag Pack'
					description='Best Usage of CI/CD sponsored by CircleCI'
				/>
				<PrizeCard
					logo='/sponsors/coil.svg'
					amount='Portable Charger, Coil Pin and $60 Coil Credit'
					description='Best Web Monetization Project'
				/>
				<PrizeCard
					logo='/sponsors/auth0.svg'
					amount='Exclusive Auth0 Swag made for MLH'
					description='Best Use of Auth0'
				/>
				<PrizeCard
					logo='/sponsors/twilio.png'
					amount='Twilio Swag Box & GameGo Console'
					description='Most Creative Use of Twilio'
				/>
				<PrizeCard
					logo='/sponsors/googleCloud.svg'
					amount='Google Cloud Swag Bag or Backpack'
					description='Best use of Google Cloud'
				/>
				<PrizeCard
					logo='/sponsors/digikey.png'
					amount='Grove Beginner Kit'
					description='Best Hardware Hack Sponsored by Digi-Key'
				/>
				<PrizeCard
					logo='/sponsors/domain.svg'
					amount='PowerSquare Qi Wireless Phone Charger'
					description='Best Domain Name from Domain.com'
				/>
				<PrizeCard
					logo='/sponsors/CockroachDb.svg'
					amount='3D Printing Pen'
					description='Best Use of CockroachDB'
				/>
				<PrizeCard
					logo='/sponsors/GoDaddyRegistry.svg'
					amount='Hack from Home kit'
					description='Best Domain Name from GoDaddy Registry'
				/>
				<PrizeCard
					logo='/sponsors/linode.svg'
					amount='Raspberry Pi 4 Starter Kit'
					description='Best Use of Linode Cloud'
				/>
				<PrizeCard
					logo='/sponsors/mathworks.png'
					amount='MathWorks Swag Bag'
					description='Best Use of MATLAB'
				/>
				<PrizeCard
					logo='/sponsors/Hedera.png'
					amount='Glorious Modular Compact Mechanical Keyboard'
					description='Best Blockchain Project Using Hedera'
				/>
				<PrizeCard
					logo='/sponsors/abinbev.svg'
					amount='Anker Wireless Charger Bundle'
					description='Dream Big and Create More Cheers with AB InBev'
				/>
				<PrizeCard
					logo='/sponsors/blackrock.svg'
					amount='KeepCup and Blackrock swag bag'
					description='Best Hack for Social Good by BlackRock'
				/>
			</Flex>
			<Flex justifyContent='center' my='8' alignItems='center' gap='2'>
				<chakra.a onClick={(e) => router.push("/prizes")}>
					<HStack cursor='pointer'>
						<Text fontSize={"xl"} color='blue.300'>
							View More
						</Text>
						<BsArrowRight />
					</HStack>
				</chakra.a>
			</Flex>
		</Container>
	);
}
