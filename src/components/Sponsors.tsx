import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import SPONSORS from "../data/sponsor.json";

const MotionBox = motion(Box);

export default function Sponsors() {
	return (
		<VStack alignSelf='flex-start'>
			{SPONSORS.map((type) => (
				<VStack alignSelf='flex-start' flexWrap='flex'>
					<Heading>{type.category}</Heading>

					<HStack flexWrap='wrap'>
						{type.company.map((el) => (
							<MotionBox>
								<Link
									target='_blank'
									href={el.siteUrl}
									as={Flex}
									m='3'
									p='2'
									//bg={el.bg}
									rounded='lg'
									userSelect='none'
									_hover={{ transform: "scale(1.1)" }}
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
