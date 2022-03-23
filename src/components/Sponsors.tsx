import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import SPONSORS from "../data/sponsor.json";

const MotionBox = motion(Box);

export default function Sponsors() {
	return (
		<VStack>
			{SPONSORS.map((type) => (
				<VStack flexWrap='wrap' alignSelf='start' my='16'>
					<Text fontSize='2xl' alignSelf='start'>{type.category}</Text>
					<HStack flexWrap='wrap'>
						{type.company.map((el) => (
							<MotionBox>
								<Link
									target='_blank'
									href={el.siteUrl}
									as={Flex}
									m='3'
									p='2'
									bg={el.bg}
									rounded='lg'
									userSelect='none'
								>
									<Image h='16' rounded='lg' src={el.iconPath} />
								</Link>
							</MotionBox>
						))}
					</HStack>
				</VStack>
			))}
		</VStack>
	);
}
