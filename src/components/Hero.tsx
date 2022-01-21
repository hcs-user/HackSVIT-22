import Head from "next/head";
import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon,
	Center,
	Flex,
} from "@chakra-ui/react";

export default function Hero() {
	return (
		<Container maxW="container.xl">
			<Heading
				size="4xl"
				textAlign="center"
				children="Gujarat's biggest In-person Hackathon"
			/>
		</Container>
	);
}
