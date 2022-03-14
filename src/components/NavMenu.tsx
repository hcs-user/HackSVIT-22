import { Box, Portal, Stack, Link, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const ChakraMotionBox = motion(Box);

const List = ['Home', 'Theme', 'Speakers', 'prizes', 'About'];

const NavLink = ({ children }: { children: ReactNode }) => {
	return (
		<Link
			px={2}
			py={1}
			rounded={'md'}
			href={'#'}>
			{children}
		</Link>
	)
};

export default function NavMenu({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	return (
		<ChakraMotionBox bg='blue.300' pos='fixed' w='full' h='full' display={isOpen ? "block" : "none"}>
			<Stack fontSize='5xl' alignItems='center' m='10'>
				{List.map((link) => {
					return (
						<NavLink key={link}>{link}</NavLink>
					)
				})}
			</Stack>
		</ChakraMotionBox>
	);
}