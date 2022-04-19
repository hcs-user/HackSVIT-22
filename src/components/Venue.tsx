import {
	Box,
	Container,
	Flex,
	Heading,
	Img,
	chakra,
	Text,
	HStack,
	LinkBox,
	LinkOverlay,
	VStack,
	AspectRatio,
	Icon,
} from "@chakra-ui/react";
import { BiLink } from "react-icons/bi";
import { FiMap } from "react-icons/fi";

export default function Venue() {
	return (
		<Container maxW='container.xl' pb='6' my='12'>
			<Flex align='flex-end' gap='4' mb='12'>
				<Heading size='2xl'>Venue</Heading>
				<Box as='svg' viewBox='0 0 661.099 359.579' maxW='lg' mb='2' me='8'>
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
			<Flex direction='column' pos='relative'>
				<AspectRatio ratio={16 / 9}>
					<Img
						src='https://www.svitvasad.ac.in/img/landingbanner/1.jpg'
						roundedTop='xl'
						roundedBottom={["none", null, "xl"]}
						// minH='64'
						objectFit='cover'
					/>
				</AspectRatio>
				<VStack
					align='start'
					pos={["static", null, "absolute"]}
					bottom='12'
					px='4'
					py='2'
					bg='blue.300'
					roundedTopStart='none'
					roundedTopEnd={["none", null, "xl"]}
					// roundedTopEnd=
					roundedBottomStart={["xl", null, "none"]}
					roundedBottomEnd='xl'
					maxW={["full", null, 320]}
				>
					<Heading fontSize={[16, null, 20]}>
						Sardar Vallabhbhai Patel Institute of Technology, Vasad
					</Heading>
					{/* <chakra.a href='https://goo.gl/maps/hyJCVXNcRgmv1QkY6' target='_blank'> */}
					<HStack as={LinkBox} cursor='pointer'>
						<Icon as={FiMap} />
						<Text
							as={LinkOverlay}
							href='https://goo.gl/maps/hyJCVXNcRgmv1QkY6'
							target='_blank'
							fontSize={[10, null, 14]}
						>
							SVIT Road, Vasad, Anand, Gujarat - 388306
						</Text>
					</HStack>
					{/* </chakra.a> */}
				</VStack>
			</Flex>
		</Container>
	);
}
