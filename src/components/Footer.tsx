import { Container, Flex, HStack, Icon, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => (
	<Stack py="4" bg="purple.900" color="white" align="center">
		<Text>Still having doubts?</Text>
		<Text fontSize="4rem" fontWeight="300">
			<Text as="span" color="orange.400">
				hello
			</Text>
			@hackclubsvit.co
		</Text>
		<Container
			px={[4, 12]}
			py="3"
			maxW="container.xl"
			as={Flex}
			justify="space-between"
			align="center"
		>
			<Text fontSize="sm" lineHeight="tall">
				© 2022, Hack Club SVIT. All Rights Reserved.
			</Text>
			<HStack>
				<IconButton rounded="full" aria-label="Facebook" icon={<Icon as={FiFacebook} />} />
				<IconButton rounded="full" aria-label="Twitter" icon={<Icon as={FiTwitter} />} />
				<IconButton rounded="full" aria-label="Instagram" icon={<Icon as={FiInstagram} />} />
			</HStack>
		</Container>
	</Stack>
);

const FooterLink = ({ href, label }: { href: any; label: string }) => (
	<NextLink href={href} passHref>
		<Link
			fontSize="sm"
			_hover={{
				color: "orange.500",
				textDecor: "underline",
			}}
		>
			{label}
		</Link>
	</NextLink>
);

export default Footer;
