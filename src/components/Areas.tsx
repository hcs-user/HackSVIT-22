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
		title: "Climate Change",
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
		title: "Social Welfare",
		description: "asdfadsf asdfjklakdsf asdfkjasdlkf sdf",
		color: "red",
	},
];

export default function Areas() {
	return (
		<SimpleGrid columns={[1, 2]} spacing="3">
			{AREAS.map(({ title, description, graphic, color }, i) => (
				<Flex
					key={i}
					mx="auto"
					my="4"
					px="4"
					py="2"
					bg="purple.300"
					rounded="md"
					maxW="sm"
					w="full"
					align="center"
					flexDir="column"
					textAlign="center"
				>
					<Image src={graphic} h="auto" maxW="16" mb="4" />
					<VStack spacing="0">
						<Heading size="md">{title}</Heading>
					</VStack>
				</Flex>
			))}
		</SimpleGrid>
	);
}
