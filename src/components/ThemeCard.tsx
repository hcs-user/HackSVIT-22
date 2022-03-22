import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	BlockchainDoodle,
	EducationDoodle,
	FinanceDoodle,
	OpenDoodle,
	SocialWelfareDoodle,
} from "./svgs";

const doodle = [
	{ doodle: <BlockchainDoodle h={[40, null, 60]} w={[40, null, 60]} />, name: "BlockChain" },
	{ doodle: <EducationDoodle h={[40, null, 60]} w={[40, null, 60]} />, name: "Education" },
	{ doodle: <FinanceDoodle h={[40, null, 60]} w={[40, null, 60]} />, name: "Finance" },
	{ doodle: <OpenDoodle h={[40, null, 60]} w={[40, null, 60]} />, name: "Open" },
	{ doodle: <SocialWelfareDoodle h={[40, null, 60]} w={[40, null, 60]} />, name: "Social" },
]

export default function ThemeCard() {
	return (
		<>
			<Flex gap='12' py='10' flexWrap='wrap' justifyContent={["center", null, "center"]}>
				{doodle && doodle.map((el) => {
					return (
						<Flex
							flexDirection='column'
							alignItems='center'
							bg='gray.700'
							rounded='xl'
							w='fit-content'
							px='8'
							py='6'
						>
							{el.doodle}
							<Text mt='10' fontSize='2xl'>{el.name}</Text>
						</Flex>
					)
				})}
			</Flex>
		</>
	);
}
