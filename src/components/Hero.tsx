import { Box, Container, Heading } from "@chakra-ui/react";

export default function Hero() {
	return (
		<Container maxW="container.xl" height="100vh">
			<Heading size="4xl" textAlign="center" children="Gujarat's biggest In-person Hackathon" />
			<Box as="svg" viewBox="0 0 200 200" h="80">
				<path
					fill="#2E9BFF"
					d="M51.7,-57.6C68,-47.9,82.9,-32.6,81.4,-17.8C79.9,-3.1,61.9,11.2,48.4,21.7C34.9,32.3,25.8,39.2,15.8,42.5C5.7,45.7,-5.4,45.4,-17.4,43.1C-29.4,40.7,-42.4,36.3,-51.5,26.7C-60.6,17.1,-65.8,2.3,-65.3,-13.4C-64.7,-29,-58.4,-45.5,-46.5,-56.1C-34.7,-66.6,-17.3,-71.3,0.2,-71.5C17.7,-71.7,35.3,-67.4,51.7,-57.6Z"
					transform="translate(100 100)"
				/>
			</Box>
		</Container>
	);
}
