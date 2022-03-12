import { Box, Portal, Stack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ChakraMotionBox = motion(Box);

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
				<Link>Home</Link>
				<Link>Theme</Link>
				<Link>Speakers</Link>
				<Link>Prizes</Link>
			</Stack>
		</ChakraMotionBox>
	);
}