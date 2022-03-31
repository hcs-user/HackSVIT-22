import {
	Box,
	Button,
	Container,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Portal,
	useDisclosure,
} from "@chakra-ui/react";
import { MonogramLogo } from "./Branding";
import NavMenu from "./NavMenu";

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const List = ["Home", "Theme", "Speakers", "prizes", "About"];

	return (
		<Box
			pos='fixed'
			top='0'
			left='0'
			w='full'
			zIndex='10'
			background='linear-gradient(to bottom, #0D0F0F, rgba(8, 8, 8, 0))'
			backdropFilter='blur(4px)'
			// background='linear(to-b, gray.800, rgba(8, 8, 8, 0.6))'
		>
			<Container as={Flex} maxW='container.xl' justify='space-between' py='4'>
				<MonogramLogo h='8' w='auto' shadow='base' />
			</Container>
			{/* <Button size='lg' variant='ghost' onClick={isOpen ? onClose : onOpen}>
					Menu
				</Button> 
				<Menu size='sm'>
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
			{/* <NavMenu isOpen={isOpen} onClose={onClose} /> */}
		</Box>
	);
}
