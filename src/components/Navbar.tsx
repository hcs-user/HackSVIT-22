import { Box, Button, Container, Flex, useDisclosure } from "@chakra-ui/react";
import { MonogramLogo } from "./Branding";
import NavMenu from "./NavMenu";

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box pos='fixed' top='0' left='0' w='full' zIndex='10'>
			<Container as={Flex} maxW='container.xl' justify='space-between' py='5'>
				<MonogramLogo h='10' w='auto' />
				<Button size='lg' variant='ghost'>
					Menu
				</Button>
			</Container>
			<NavMenu isOpen={isOpen} onClose={onClose} />
		</Box>
	);
}
