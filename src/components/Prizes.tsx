import {
	Box,
	Button,
	Flex,
	Heading,
	Img,
	chakra,
	Text,
	VStack,
	Icon,
	Container,
	Link,
	HStack,
} from "@chakra-ui/react";
import { FirstPrizeIcon, SecondPrizeIcon, ThirdPrizeIcon } from "./svgs";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import PrizeCard from "./Prizecard";

export default function Prizes() {
	const router = useRouter();

	return (
		<Container id='prizes' maxW='container.xl' pb='6'>
			<Box as='svg' viewBox='0 0 361.402 196.332' my='4' ps='20' maxW='sm'>
				<path
					id='Path_13'
					data-name='Path 13'
					d='M1561.374,5106.938c11.287,54.063-42.777,184.755-148.436,104.747s-164.169-37.368-181.967,0-14.01,74.487-14.01,74.487'
					transform='translate(-1209.059 -5098.064)'
					fill='none'
					stroke='#0083ff'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='15'
				/>
			</Box>
			<Flex align='flex-end' gap='4' mb='4'>
				<Heading size='2xl'>Prizes</Heading>
			</Flex>
			<Flex
				gap='12'
				py='10'
				flexWrap='wrap'
				justifyContent={["center", null, "center"]}
			>
				<PrizeCard
					icon={FirstPrizeIcon}
					amount='₹50,000'
					description='First Prize'
				/>
				<PrizeCard
					icon={SecondPrizeIcon}
					amount='₹30,000'
					description='Second Prize'
				/>
				<PrizeCard
					icon={ThirdPrizeIcon}
					amount='₹20,000'
					description='Third Prize'
				/>
			</Flex>
			<Flex justifyContent='center' my='8' alignItems='center' gap='2'>
				<chakra.a onClick={(e) => router.push("/prizes")}>
					<HStack cursor='pointer'>
						<Text fontSize={"xl"} color='blue.300'>
							View More
						</Text>
						<BsArrowRight />
					</HStack>
				</chakra.a>
			</Flex>
		</Container>
	);
}
