import {
	Box,
	Container,
	Flex,
	Heading,
	Img,
	// Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import PEOPLE from "../data/people.json";

export default function Speakers() {
	return (
		<Container maxW='container.xl' pb='6'>
			<Flex align='flex-end' gap='4' mb='12'>
				<Heading size='2xl'>Mentors & Judges</Heading>
				<Box as='svg' viewBox='0 0 661.099 359.579' maxW='lg' mb='2'>
					<path
						data-name='Path 14'
						d='M1929.157,5045.173c21.265,294.752-134.373,288.267-279.152,184.251s-209.538,142.455-364.223,159.051'
						transform='translate(-1277.525 -5037.153)'
						fill='none'
						stroke='#fe0169'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='15'
					/>
				</Box>
			</Flex>
			{/* <Swiper
				spaceBetween={10}
				slidesPerView={5}
				grabCursor={true}
				breakpoints={{
					280: {
						slidesPerView: 1.4,
					},
					620: {
						slidesPerView: 2.4,
					},
					720: {
						slidesPerView: 3.2,
					},
					960: {
						slidesPerView: 4.2,
					},
					1150: {
						slidesPerView: 5.4,
					},
				}}
			> */}

			{/* <SwiperSlide> */}
			<Flex
				rowGap='8'
				columnGap='12'
				flexWrap='wrap'
				justify={["center", null, "flex-start"]}
				alignItems={["center", null, "flex-start"]}
			>
				{PEOPLE.map(
					({ name, post, company, photo, link }) =>
						photo && (
							<a href={link} target='_blank' rel='noopener noreferrer'>
								<VStack spacing='1' w='64'>
									<Box h='60' w='48'>
										<Img
											src={"/people/" + name.toLowerCase().split(" ").join("_") + ".jfif"}
											objectFit='cover'
											h='full'
											rounded='xl'
										/>
									</Box>
									<VStack spacing='1'>
										<Heading fontSize='lg'>{name}</Heading>
										<Text lineHeight='1' color='gray.300' fontSize='md'>
											{post}
										</Text>
										<Text fontSize='sm' color='gray.300'>
											{company}
										</Text>
									</VStack>
								</VStack>
							</a>
						)
				)}
			</Flex>
			{/* </SwiperSlide> */}

			{/* </Swiper> */}
		</Container>
	);
}
