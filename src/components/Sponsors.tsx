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
			<LinkBox as={Flex} m='3' p='2' userSelect='none'>
				<LinkOverlay target='_blank' href={siteUrl}>
					<Img h={name == "SVIT" ? "48" : "12"} w='auto' src={iconPath} />
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
				<Box as='svg' viewBox='0 0 296.153 488.185' maxW='200' mb='2' me='8'>
					<path
						id='Path_15'
						data-name='Path 15'
						d='M1315.25,7292.486s20.3,333.338,201.02,354.222,17.075-328.621-201.02,115.984'
						transform='translate(-1305.214 -7284.543)'
						fill='none'
						stroke='#fe0169'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='15'
					/>
				</Box>
			</Flex>
			<VStack alignItems='flex-start'>
				{SPONSORS.map((type, index) => (
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
