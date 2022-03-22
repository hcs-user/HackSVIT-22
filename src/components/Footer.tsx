import {
	Box,
	chakra,
	Container,
	Link,
	SimpleGrid,
	Stack,
	Text,
	IconButton,
	HStack,
	Divider,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FullLogo } from "./Branding";

const List = ["Sponsors", "About", "Contact"];

const FooterLink = ({ children }: { children: ReactNode }) => {
	return (
		<Link
			py={1}
			_hover={{
				textDecoration: "none",
			}}
			href={"#"}
		>
			{children}
		</Link>
	);
};

const ListHeader = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontWeight={"500"} fontSize={"lg"} mb={2}>
			{children}
		</Text>
	);
};

export default function Footer() {
	return (
		<Box bg='gray.900'>
			<Container as={Stack} maxW={"6xl"} py={10}>
				<SimpleGrid
					templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 2fr" }}
					spacing={8}
				>
					<Stack alignItems='center' justifyContent='center'>
						<FullLogo w={["100%", 300, 400]} h='auto' />
					</Stack>
					<Stack alignItems='center'>
						<Stack>
							<ListHeader>Explore</ListHeader>
							{List.map((link) => {
								return <FooterLink key={link}>{link}</FooterLink>;
							})}
						</Stack>
					</Stack>
					<Stack alignItems='center'>
						<ListHeader>Find us online</ListHeader>
						<HStack>
							<IconButton aria-label='Instagram' icon={<FaInstagram />} />
							<IconButton aria-label='Twitter' icon={<FaTwitter />} />
							<IconButton aria-label='Discord' icon={<FaDiscord />} />
						</HStack>
					</Stack>
				</SimpleGrid>
				<Box pt={10}>
					<Divider />
				</Box>
				<Text p={5} textAlign='center'>
					© 2021, Hack SVIT. All rights reserved.
				</Text>
			</Container>
		</Box>
	);
}
