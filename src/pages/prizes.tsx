import {
	Box,
	Flex,
	Heading,
	Container,
	HStack,
	VStack,
	Image,
	Text,
	Button,
	Divider,
} from "@chakra-ui/react";
import { FirstPrizeIcon } from "../components/svgs";
import { SecondPrizeIcon } from "../components/svgs";
import { ThirdPrizeIcon } from "../components/svgs";
import PrizeCard from "../components/Prizecard";
import PRIZES from "../data/prizes.json";
import MLHPRIZES from "../data/mlh_prizes.json";

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
			</Flex>

			<Divider my='4' />

			<Heading textAlign='center' my='6'>
				MLH Prizes
			</Heading>

			<Flex
				gap='12'
				py='10'
				flexWrap='wrap'
				justifyContent={["center", null, "center"]}
			>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/deso.svg'
					amount='$100 worth of $DESO coin and an exclusive DeSo Tumbler'
					description='Best Use of DeSo'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/circleci.svg'
					amount='CircleCI Swag Pack'
					description='Best Usage of CI/CD sponsored by CircleCI'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/coil.svg'
					amount='Portable Charger, Coil Pin and $60 Coil Credit'
					description='Best Web Monetization Project'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/auth0.svg'
					amount='Exclusive Auth0 Swag made for MLH'
					description='Best Use of Auth0'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/twilio.png'
					amount='Twilio Swag Box & GameGo Console'
					description='Most Creative Use of Twilio'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/googleCloud.svg'
					amount='Google Cloud Swag Bag or Backpack'
					description='Best use of Google Cloud'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/digikey.png'
					amount='Grove Beginner Kit'
					description='Best Hardware Hack Sponsored by Digi-Key'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/domain.svg'
					amount='PowerSquare Qi Wireless Phone Charger'
					description='Best Domain Name from Domain.com'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/CockroachDB.svg'
					amount='3D Printing Pen'
					description='Best Use of CockroachDB'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/GoDaddyRegistry.svg'
					amount='Hack from Home kit'
					description='Best Domain Name from GoDaddy Registry'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/linode.svg'
					amount='Raspberry Pi 4 Starter Kit'
					description='Best Use of Linode Cloud'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/mathworks.png'
					amount='MathWorks Swag Bag'
					description='Best Use of MATLAB'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/Hedera.png'
					amount='Glorious Modular Compact Mechanical Keyboard'
					description='Best Blockchain Project Using Hedera'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/abinbev.svg'
					amount='Anker Wireless Charger Bundle'
					description='Dream Big and Create More Cheers with AB InBev'
				/>
				<PrizeCard
					url='https://hack.mlh.io/prizes'
					logo='/sponsors/blackrock.svg'
					amount='KeepCup and Blackrock swag bag'
					description='Best Hack for Social Good by BlackRock'
				/>
			</Flex>

			<Flex
				gap='12'
				py='10'
				flexWrap='wrap'
				justifyContent={["center", null, "center"]}
			>
				<Divider my='4' />

				{PRIZES.map((prize) => (
					<PrizeCard
						logo={`/sponsors/${prize.img}`}
						amount={prize.prize}
						description={prize.description}
						url={prize.url}
					/>
				))}
			</Flex>
		</Container>
	);
}
