import { Box, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	BlockchainDoodle,
	EducationDoodle,
	FinanceDoodle,
	OpenDoodle,
	SocialWelfareDoodle,
} from "./svgs";

const doodle = [
	<BlockchainDoodle h='60' w='60' />,
	<EducationDoodle h='60' w='60' />,
	<FinanceDoodle h='60' w='60' />,
	<OpenDoodle h='60' w='60' />,
	<SocialWelfareDoodle h='60' w='60' />
]

export default function ThemeCard() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				grabCursor={true}
				breakpoints={{
					280: {
						slidesPerView: 1.2,
					},
					620: {
						slidesPerView: 1.8,
					},
					720: {
						slidesPerView: 2.2,
					},
					960: {
						slidesPerView: 2.8,
					},
					1150: {
						slidesPerView: 3.4,
					},
				}}
			>
				{doodle && doodle.map((el) => {
					return (
						<SwiperSlide>
							<Flex
								flexDirection='column'
								bg='gray.700'
								rounded='xl'
								w='fit-content'
								px='8'
								py='6'
							>
								{el}
							</Flex>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</>
	);
}
