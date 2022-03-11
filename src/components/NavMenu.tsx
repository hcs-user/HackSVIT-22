import { Box, Portal } from "@chakra-ui/react";
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
		<ChakraMotionBox bg='blue.300' pos='fixed'>
			asdfkldfj
		</ChakraMotionBox>
	);
}
