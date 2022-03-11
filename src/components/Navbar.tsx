import { Box, Container, Flex } from "@chakra-ui/react";

export default function Navbar() {
	return (
		<Box>
			<Container
				as={Flex}
				maxW='container.xl'
				justify='space-between'
			></Container>
		</Box>
	);
}
