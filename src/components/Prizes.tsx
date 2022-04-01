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
} from "@chakra-ui/react";
import { FirstPrizeIcon, SecondPrizeIcon, ThirdPrizeIcon } from "./svgs";

const PrizeCard = ({
	amount,
	description,
	companyName,
	logo,
	icon,
	url,
}: {
	[key: string]: any;
}) => (
	<Flex
		flexDir='column'
		p='6'
		bg='gray.700'
		rounded='3xl'
		minW='300'
		maxW='300'
		cursor='pointer'
	>
		<Flex align='center' p='8' bg='gray.600' rounded='3xl' minH='120'>
			{icon ? (
				<Icon as={icon} h='100px' w='auto' mx='auto' />
			) : (
				<Img src={logo} alt={companyName} w='full' maxH='100px' />
			)}
		</Flex>
		<VStack spacing='6' p='8' textAlign='center' flex='1'>
			<Heading size='2xl'>{amount}</Heading>
			<Text noOfLines={2}>{description}</Text>
		</VStack>

		{url && (
			<chakra.a
				w='full'
				alignSelf='flex-end'
				href={url}
				target='_blank'
				rel='noopener noreferrer'
			>
				<Button rounded='xl' w='full' children='Learn more' size='sm' />
			</chakra.a>
		)}
	</Flex>
);

export default function Prizes() {
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
					logo='/sponsors/polygon.svg'
					amount='$10,000'
					description='for the best hack built on Ethereum'
					url='https://www.notion.so/devfolio/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c'
				/>
				<PrizeCard
					logo='/sponsors/polygon.svg'
					amount='$15,000'
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
	);
}
