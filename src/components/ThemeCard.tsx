import { Box, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	BlockchainDoodle,
	EducationDoodle,
	FinanceDoodle,
	OpenDoodle,
	SocialWelfareDoodle,
} from "./svgs";
export default function ThemeCard() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				grabCursor={true}
				breakpoints={{
          280:{
            slidesPerView: 1.2,
          },
          620:{
            slidesPerView: 1.8,
          },
          720:{
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
				<SwiperSlide>
					<Flex
						flexDirection='column'
						bg='gray.700'
						rounded='xl'
						w='fit-content'
						px='8'
						py='6'
					>
						<EducationDoodle w='60' h='60' />
					</Flex>
				</SwiperSlide>
				<SwiperSlide>
					<Flex
						flexDirection='column'
						bg='gray.700'
						rounded='xl'
						w='fit-content'
						px='8'
						py='6'
					>
						<BlockchainDoodle w='60' h='60' />
					</Flex>
				</SwiperSlide>

				<SwiperSlide>
					<Flex
						flexDirection='column'
						bg='gray.700'
						rounded='xl'
						w='fit-content'
						px='8'
						py='6'
					>
						<SocialWelfareDoodle w='60' h='60' />
					</Flex>
				</SwiperSlide>

				<SwiperSlide>
					<Flex
						flexDirection='column'
						bg='gray.700'
						rounded='xl'
						w='fit-content'
						px='8'
						py='6'
					>
						<FinanceDoodle w='60' h='60' />
					</Flex>
				</SwiperSlide>

				<SwiperSlide>
					<Flex
						flexDirection='column'
						bg='gray.700'
						rounded='xl'
						w='fit-content'
						px='8'
						py='6'
					>
						<OpenDoodle w='60' h='60' />
					</Flex>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
