import {
	Box,
	Button,
	Container,
	Fade,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Portal,
	useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MonogramLogo } from "./branding";
import NavMenu from "./NavMenu";

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const List = ["Home", "Theme", "Speakers", "prizes", "About"];
	const [showCTA, setShowCTA] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setShowCTA(window.scrollY > 640);
		});
		const script = document.createElement("script");
		script.src = "https://apply.devfolio.co/v2/sdk.js";
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			window.removeEventListener("scroll", () => {});
			document.body.removeChild(script);
		};
	}, []);

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
				<MonogramLogo fill='white' h='8' w='auto' shadow='base' />
				<Fade in={showCTA}>
					<Box
						className='apply-button'
						data-hackathon-slug='hacksvit2022'
						data-button-theme='dark-inverted'
					/>
				</Fade>
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
