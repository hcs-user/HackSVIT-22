import {
	Box,
	Button,
	Container,
	Flex,
	Text,
	VStack,
	Heading,
} from "@chakra-ui/react";
import About from "@components/About";
import { FullLogo, FullLogoNew, NewLogo } from "@components/branding";
import FAQs from "@components/FAQs";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import PresentedBy from "@components/PresentedBy";
import Prizes from "@components/Prizes";
import Sponsors from "@components/Sponsors";
import StatusIndicator from "@components/StatusIndicator";
import Team from "@components/Team";
import Themes from "@components/Themes";
import Timeline from "@components/Timeline";
import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import BackToTop from "@components/BackToTop";
import Venue from "@components/Venue";
import Schedule from "@components/Schedule";
import Speakers from "@components/Speakers";
import Testimonial from "@components/Testimonial";

export default function Home() {
	let [shouldPlay, updatePlayState] = useState(false);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://apply.devfolio.co/v2/sdk.js";
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<Container
				as={Flex}
				pt={[24, null, 32]}
				maxW='container.xl'
				align='center'
				justify='center'
				pos='relative'
				textAlign='center'
			>
				<VStack pos='relative' spacing='6' w='full'>
					<NewLogo w={["100%", 480, 640]} h='auto' />
					<Flex flexDir={["column", null, "row"]} align='center' gap='1'>
						<Text fontSize='20' color='red.300' fontWeight='600'>
							Apr 29 - May 1, 2022
						</Text>
						<a href='#venue'>
							<Flex>
								<StatusIndicator />{" "}
								<Text as='span' fontWeight='400' color='white'>
									SVIT, Vasad
								</Text>
							</Flex>
						</a>
					</Flex>

					{/* <Text fontSize='xl' color='yellow.300' fontWeight='600'>
						Sardar Vallabhbhai Patel Institute of Technology, Vasad
					</Text> */}
					<Flex gap='4' flexWrap='wrap' flexDir='column' justifyContent='center'>
						{/* <Box
							className='apply-button'
							data-hackathon-slug='hacksvit2022'
							data-button-theme='blue'
						/> */}
						<Text fontSize='md' size='sm' color='gray.400'></Text>

						<a href='https://discord.gg/KZZzD8a7PY' target='_blank'>
							<Button
								py='7px'
								w='full'
								fontSize='20'
								h='auto'
								leftIcon={<FaDiscord fontSize='28px' />}
								rounded='md'
								fontWeight='500'
								colorScheme='gray'
								size='md'
								variant='outline'
								borderColor='#5865f2'
								borderWidth='2px'
								_hover={{
									bg: "#5865f2",
								}}
								_active={{
									bg: "#5865f2",
								}}
							>
								Join Discord
							</Button>
						</a>
					</Flex>
				</VStack>
			</Container>
			<Container maxW='container.xl' my='4'>
				<Box maxW='container.sm'>
					<Box as='svg' viewBox='0 0 645.453 446.241' px='6'>
						<path
							data-name='Path 12'
							d='M2163.49,336.606c-7.021,117-316.819,129.643-491.8,208.817s-134.042,220.194-134.042,220.194'
							transform='translate(-1525.972 -328.67)'
							fill='none'
							stroke='#6b01fe'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='15'
						/>
					</Box>
				</Box>
			</Container>
			<About />
			{/* <Timeline /> */}
			{/* <Testimonial /> */}
			<Themes />
			<Speakers />
			<Prizes />
			{/* <Schedule /> */}
			<Sponsors />
			<Team />
			<PresentedBy />
			<FAQs />
			<Venue />
			<BackToTop />
		</>
	);
}
