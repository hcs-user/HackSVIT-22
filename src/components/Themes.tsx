import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	BlockchainDoodle,
	ClimateDoodle,
	EducationDoodle,
	FinanceDoodle,
	OpenDoodle,
	SocialWelfareDoodle,
} from "./svgs";

const doodle = [
	{
		doodle: <BlockchainDoodle h={[40, null, 48]} w={[40, null, 48]} />,
		name: "BlockChain",
	},
	{
		doodle: <EducationDoodle h={[40, null, 48]} w={[40, null, 48]} />,
		name: "Education",
	},
	{
		doodle: <FinanceDoodle h={[40, null, 48]} w={[40, null, 48]} />,
		name: "FinTech",
	},
	{
		doodle: <ClimateDoodle h={[40, null, 48]} w={[40, null, 48]} />,
		name: "Climate Change",
	},
	{
		doodle: <SocialWelfareDoodle h={[40, null, 48]} w={[40, null, 48]} />,
		name: "Social Welfare",
	},
	{
		doodle: <OpenDoodle h={[40, null, 48]} w={[40, null, 48]} />,
		name: "Open Innovation",
	},
];

const ThemeCard = ({ doodle, name }) => (
	<Flex
		flexDirection='column'
		alignItems='center'
		bg='gray.700'
		rounded='xl'
		// w='fit-content'
		px='8'
		py='6'
		h='300'
		minW='300'
	>
		{doodle}
		<Text mt='6' fontWeight='600' fontSize={["md", null, "xl"]}>
			{name}
		</Text>
	</Flex>
);

export default function Themes() {
	return (
		<Container id='themes' maxW='container.xl' pb='6'>
			<Flex align='flex-end' gap='4' mb='12'>
				<Heading size='2xl'>Themes</Heading>
				<Box as='svg' viewBox='0 0 370.202 403.333' maxW='244' mb='2'>
					<path
						id='Path_11'
						data-name='Path 11'
						d='M2453.5,364.489c-5.933,366.581-395.6,242.217-351.524,136.694s256.881,149.144,0,249.306'
						transform='translate(-2090.921 -356.868)'
						fill='none'
						stroke='#ffca39'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='15'
					/>
				</Box>
			</Flex>
			<Flex
				gap='12'
				py='10'
				flexWrap='wrap'
				justifyContent={["center", null, "center"]}
			>
				{doodle && doodle.map((el) => <ThemeCard {...el} />)}
			</Flex>
		</Container>
	);
}
