import {
	Box,
	Container,
	Divider,
	Flex,
	Heading,
	HStack,
	Img,
	Link,
	LinkBox,
	LinkOverlay,
	Text,
	Tooltip,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import SPONSORS from "../data/sponsor.json";

const MotionBox = motion(Box);

const Sponsor = ({ name, iconPath, siteUrl }) => (
	<Tooltip hasArrow label={name} placement='bottom'>
		<MotionBox alignItems='flex-start' in>
			<LinkBox as={Flex} m='3' p='2' rounded='lg' userSelect='none'>
				<LinkOverlay target='_blank' href={siteUrl}>
					<Img
						h={name == "SVIT" ? "48" : "12"}
						w='auto'
						rounded='lg'
						src={iconPath}
					/>
				</LinkOverlay>
			</LinkBox>
		</MotionBox>
	</Tooltip>
);

export default function Sponsors() {
	return (
		<Container id='sponsors' maxW='container.xl' pb='6'>
			<Flex align='flex-end' gap='4' mb='12'>
				<Heading size='2xl'>Sponsors</Heading>
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
			<VStack alignItems='flex-start'>
				{SPONSORS.map((type) => (
					<VStack alignItems='flex-start' py='1' w='full'>
						<Flex w='full' align='center'>
							<Text my='2' fontSize='2xl'>
								{type.category}
							</Text>
							<Box ms='4' bg='blue.400' flex='1' h='0.5' rounded='full' />
						</Flex>
						<Flex rowGap='6' columnGap='3' flexWrap='wrap' alignItems='flex-start'>
							{type.company.map((el) => (
								<Sponsor {...el} />
							))}
						</Flex>
					</VStack>
				))}
			</VStack>
		</Container>
	);
}
