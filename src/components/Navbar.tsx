import { Box, Button, Container, Flex, Menu, MenuButton, MenuItem, MenuList, Portal, useDisclosure } from "@chakra-ui/react";
import { MonogramLogo } from "./Branding";
import NavMenu from "./NavMenu";

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const List = ['Home', 'Theme', 'Speakers', 'prizes', 'About'];

	return (
		<Box pos='fixed' top='0' left='0' w='full' zIndex='10' bg={isOpen ? 'blue.300' : 'transparent'} backdropFilter="blur(5px)">
			<Container as={Flex} maxW='container.xl' justify='space-between' py='5'>
				<MonogramLogo h='10' w='auto' />
				{/* <Button size='lg' variant='ghost' onClick={isOpen ? onClose : onOpen}>
					Menu
				</Button> */}
				{/* <Menu size='sm'>
					<MenuButton>Menu</MenuButton>
					<Portal>
						<MenuList zIndex='20'>
							{List.map((link) => {
								return (
									<MenuItem justifyContent='flex-end'>{link}</MenuItem>
								)
							})}
						</MenuList>
					</Portal>
				</Menu> */}
			</Container>
			<NavMenu isOpen={isOpen} onClose={onClose} />
		</Box>
	);
}