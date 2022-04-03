import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	HStack,
	Icon,
	IconButton,
	Link,
	Text,
} from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiMail,
	FiTwitter,
	FiYoutube,
} from "react-icons/fi";
import { MonogramLogo } from "./branding";

export default function Footer() {
	return (
		<>
			<Box borderBottom='1px solid #fafafa22'>
				<Container
					maxW='container.xl'
					py='6'
					lineHeight='2'
					as={Flex}
					justifyContent='space-between'
					alignItems={["start", null, "center"]}
					flexDir={["column", null, "row"]}
				>
					<Box>
						<Heading>Still confused?</Heading>
						<Text>Connect with us & stay updated on discord</Text>
					</Box>
					<a href='https://discord.gg/KZZzD8a7PY' target='_blank'>
						<Button
							// size='lg'
							my='4'
							py='8'
							height='auto'
							fontSize={["lg", null, "xl"]}
							bg='#7289DA'
							w={["full", null, "auto"]}
							minW='280px'
							leftIcon={<Icon as={FaDiscord} h='9' w='9' />}
							_hover={{
								bg: "#4967CF",
							}}
						>
							Join Discord
						</Button>
					</a>
				</Container>
			</Box>
			<Box bg='black' pos='relative'>
				<Container
					maxW='container.xl'
					pt='12'
					pb='4'
					as={Flex}
					gap='4'
					justifyContent='space-between'
					flexDir={["column", null, "row"]}
				>
					<MonogramLogo
						pos='absolute'
						top='-6'
						left='50%'
						fill='blue.300'
						h='12'
						w='auto'
						transform='translate(-50%)'
					/>
					<Text>
						© 2022,{" "}
						<Link
							href='https://hackclubsvit.co'
							target='_blank'
							rel='noopener noreferrer'
							color='blue.100'
						>
							Hack Club SVIT
						</Link>
						.&nbsp;&nbsp;All rights reserved. &nbsp; &bull; &nbsp;
						<Link
							href='https://devfolio.co/code-of-conduct'
							target='_blank'
							rel='noopener noreferrer'
							color='orange.100'
						>
							Code of Conduct
						</Link>
					</Text>
					<Flex justify='center' flexWrap='wrap'>
						<Link
							href='https://www.instagram.com/hackclubsvit/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconButton
								variant='ghost'
								aria-label='Instagram'
								icon={<FiInstagram fontSize='20' />}
							/>
						</Link>
						<Link
							href='https://twitter.com/HackClubSVIT'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconButton
								variant='ghost'
								aria-label='Twitter'
								icon={<FiTwitter fontSize='20' />}
							/>
						</Link>
						<Link
							href='https://discord.gg/KZZzD8a7PY'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconButton
								variant='ghost'
								aria-label='Discord'
								icon={<FaDiscord fontSize='20' />}
							/>
						</Link>
						<Link
							href='https://www.youtube.com/channel/UC8XHRJT9TewOS0ET6tZjszg'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconButton
								variant='ghost'
								aria-label='YouTube'
								icon={<FiYoutube fontSize='20' />}
							/>
						</Link>
						<Link
							href='https://www.facebook.com/HackClubSVIT/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconButton
								variant='ghost'
								aria-label='Facebook'
								icon={<FiFacebook fontSize='20' />}
							/>
						</Link>
						<Link
							href='https://www.linkedin.com/company/hackclubsvit/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconButton
								variant='ghost'
								aria-label='Linkedin'
								icon={<FiLinkedin fontSize='20' />}
							/>
						</Link>
						<Link
							href='mailto:hello@hackclubsvit.co'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconButton
								variant='ghost'
								aria-label='Linkedin'
								icon={<FiMail fontSize='20' />}
							/>
						</Link>
					</Flex>
				</Container>
			</Box>
		</>
	);
}
