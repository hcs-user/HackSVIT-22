import { Box, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const AREAS = [
	{
		graphic: "/areas/education.png",
		title: "EdTech",
		description: "asdfadsf asdfjklakdsf asdfkjasdlkf sdf",
		color: "purple",
	},
	{
		graphic: "/areas/finance.png",
		title: "Finance",
		description: "asdfadsf asdfjklakdsf asdfkjasdlkf sdf",
		color: "red",
	},
	{
		graphic: "/areas/open_innovation.png",
		title: "Open Innovation",
		description: "asdfadsf asdfjklakdsf asdfkjasdlkf sdf",
		color: "orange",
	},
	{
		graphic: "/areas/social_welfare.png",
		title: "Social Welfare",
		description: "asdfadsf asdfjklakdsf asdfkjasdlkf sdf",
		color: "blue",
	},
	{
		graphic: "/areas/blockchain.png",
		title: "Blockchain & Decentralized Systems",
		description: "asdfadsf asdfjklakdsf asdfkjasdlkf sdf",
		color: "yellow",
	},
	{
		graphic: "/areas/climate_change.png",
		title: "Climate Change",
		description: "asdfadsf asdfjklakdsf asdfkjasdlkf sdf",
		color: "red",
	},
];

export default function Areas() {
	return (
		<SimpleGrid columns={[1, 2, 3]} spacing="3">
			{AREAS.map(({ title, description, graphic, color }, i) => (
				<Flex key={i} m="2" p="2" rounded="none" bg="gray.500" maxW="md">
					<Box bgGradient={`linear(to-r, ${color}.400, ${color}.700)`} p="4">
						<Image src={graphic} h="16" w="16" />
					</Box>
					<VStack align="start" spacing="0" ms="4">
						<Heading size="md">{title}</Heading>
						<Text>{description}</Text>
					</VStack>
				</Flex>
			))}
		</SimpleGrid>
	);
}
