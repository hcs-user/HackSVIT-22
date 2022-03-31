import {
	Box,
	Divider,
	Flex,
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

export default function Sponsors() {
	return (
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
							<Tooltip hasArrow label={el.name} placement='bottom'>
								<MotionBox alignItems='flex-start' in>
									<LinkBox as={Flex} m='3' p='2' rounded='lg' userSelect='none'>
										<LinkOverlay target='_blank' href={el.siteUrl}>
											<Img
												h={el.name == "SVIT" ? "48" : "12"}
												w='auto'
												rounded='lg'
												src={el.iconPath}
											/>
										</LinkOverlay>
									</LinkBox>
								</MotionBox>
							</Tooltip>
						))}
					</Flex>
				</VStack>
			))}
		</VStack>
	);
}
