import {
	Container,
	Flex,
	Heading,
	HStack,
	Icon,
	IconButton,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const FACEBOOK_LINK = "https://facebook.com/hackclubsvit";
const TWITTER_LINK = "https://facebook.com/hackclubsvit";
const INSTAGRAM_LINK = "https://facebook.com/hackclubsvit";

const Footer = () => (
	<Stack py="4" bg="purple.800" color="white" align="center">
		{/* <Heading size="lg" textAlign="center" mb="6"> */}

		{/* </Heading> */}
		<Text>Organized By</Text>

		<Flex justify="center" align="center" flexDir={["column", "row"]}>
			<Image h="40" src="/hsc.svg" />
			<Image h="32" src="/codingclub.png" />
			<Image h="40" src="/svit_25yrs.png" />
		</Flex>
		<Container
			px={[4, 12]}
			py="3"
			maxW="container.xl"
			as={Flex}
			justify="space-between"
			align="center"
		>
			<Text fontSize="sm" lineHeight="tall">
				© 2022 | Hack Club SVIT. All Rights Reserved.
			</Text>
			<HStack>
				<IconButton
					rounded="full"
					aria-label="Facebook"
					icon={<Icon as={FiFacebook} />}
					onClick={() => window.open(FACEBOOK_LINK, "_blank")}
				/>
				<IconButton
					rounded="full"
					aria-label="Twitter"
					icon={<Icon as={FiTwitter} />}
					onClick={() => window.open(TWITTER_LINK, "_blank")}
				/>
				<IconButton
					rounded="full"
					aria-label="Instagram"
					icon={<Icon as={FiInstagram} />}
					onClick={() => window.open(INSTAGRAM_LINK, "_blank")}
				/>
			</HStack>
		</Container>
	</Stack>
);
export default Footer;
