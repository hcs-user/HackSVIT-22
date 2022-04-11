import { Box, Container, Flex, Heading, Text, useColorModeValue, chakra, Image } from "@chakra-ui/react";
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
		doodle: <BlockchainDoodle boxSize={40} />,
		name: "BlockChain",
		desc: "Whether it’s making your own cryptocurrency or enhancing an existing one, this track helps you do just that!"
	},
	{
		doodle: <EducationDoodle boxSize={40} />,
		name: "Education",
		desc: "For all the students out there who desire to bring a change in the current educational methodology, this is your sign to build a project that solves it!"
	},
	{
		doodle: <FinanceDoodle boxSize={40} />,
		name: "FinTech",
		desc: "Let’s advance or come up with a completely new way of managing our finances."
	},
	{
		doodle: <ClimateDoodle boxSize={40} />,
		name: "Climate Change",
		desc: "Want to make a change in the way climate change is dealt with? Show us how."
	},
	{
		doodle: <SocialWelfareDoodle boxSize={40} />,
		name: "Social Welfare",
		desc: "What is that one thing that the society needs the most? Give it to them."
	},
	{
		doodle: <OpenDoodle boxSize={40} />,
		name: "Open Innovation",
		desc: "Not interested in any of the above topics? Then create your own."
	},
];

// const ThemeCard = ({ doodle, name }) => (
// 	<Flex
// 		flexDirection='column'
// 		alignItems='center'
// 		bg='gray.700'
// 		rounded='xl'
// 		// w='fit-content'
// 		px='8'
// 		py='6'
// 		h='300'
// 		minW='300'
// 	>
// 		{doodle}
// 		<Text mt='6' fontWeight='600' fontSize={["md", null, "xl"]}>
// 			{name}
// 		</Text>
// 	</Flex>
// );

const Card = ({ doodle, name, desc }) => {
	return (
		<Flex
			maxW="xs"
			mx="auto"
			shadow="lg"
			rounded="lg"
			flexDir='column'
			alignItems='center'
			bg='gray.700'
			p='5'
		>
			<Box>
				<Heading fontSize='2xl'>
					{name}
				</Heading>
				<Text
					mt={3}
					fontSize="sm"
					color='gray.200'
				>
					{desc}
				</Text>
			</Box>
			<Box p='5'>
				{doodle}
			</Box>
		</Flex>
	);
};

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
				{doodle && doodle.map((el) => <Card {...el} />)}
			</Flex>
		</Container>
	);
}
