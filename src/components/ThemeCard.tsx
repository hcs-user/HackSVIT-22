import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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

export default function ThemeCard() {
	return (
		<>
			<Flex
				gap='12'
				py='10'
				flexWrap='wrap'
				justifyContent={["center", null, "center"]}
			>
				{doodle &&
					doodle.map((el) => {
						return (
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
								{el.doodle}
								<Text mt='6' fontSize={["lg", null, "2xl"]}>
									{el.name}
								</Text>
							</Flex>
						);
					})}
			</Flex>
		</>
	);
}
