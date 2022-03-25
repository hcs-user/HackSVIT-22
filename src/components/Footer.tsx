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
	Heading,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FullLogo } from "./Branding";

const List = ["Sponsors", "About"];

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
							<Link href="https://www.instagram.com/hackclubsvit/" target="_blank">
								<IconButton aria-label='Instagram' icon={<FaInstagram />} />
							</Link>
							<Link href="https://twitter.com/HackClubSVIT" target="_blank">
								<IconButton aria-label='Twitter' icon={<FaTwitter />} />
							</Link>
							<Link href="https://discord.gg/KZZzD8a7PY" target="_blank">
								<IconButton aria-label='Discord' icon={<FaDiscord />} />
							</Link>
						</HStack>
						<HStack>
							<Link href="https://www.youtube.com/channel/UC8XHRJT9TewOS0ET6tZjszg" target="_blank">
								<IconButton aria-label='YouTube' icon={<FaYoutube />} />
							</Link>
							<Link href="https://www.facebook.com/HackClubSVIT/" target="_blank">
								<IconButton aria-label='Facebook' icon={<FaFacebook />} />
							</Link>
							<Link href="https://www.linkedin.com/company/hackclubsvit/" target="_blank">
								<IconButton aria-label='Linkedin' icon={<FaLinkedin />} />
							</Link>
						</HStack>
					</Stack>
				</SimpleGrid>
				<Box pt={10}>
					<Heading textAlign='center' my='5' fontSize='4xl'>hello@hackclubsvit.co</Heading>
					<Divider />
				</Box>
				<Text p={5} textAlign='center'>
					© 2022, Hack SVIT. All rights reserved.
				</Text>
			</Container>
		</Box>
	);
}
