import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	HStack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FullLogo } from "@components/Branding";
import FAQs from "@components/FAQs";
import Navbar from "@components/Navbar";
import Organization from "@components/Organization";
import Speaker from "@components/Speaker";
import Sponsors from "@components/Sponsors";
import Team from "@components/Team";
import ThemeCard from "@components/ThemeCard";
import { useEffect } from "react";
import { FaDiscord } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Home() {
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
			<Navbar />

			<Container
				as={Flex}
				pt='60'
				maxW='container.xl'
				align='center'
				justify='center'
				pos='relative'
			>
				<VStack pos='relative' spacing='6'>
					<Box>
						{/* <Box
							pos='absolute'
							top='-1rem'
							left={["0rem", "-4rem", "-7rem"]}
							_hover={{ transform: "rotate(7deg)" }}
							transition='0.3s'
						>
							<Box
								as='svg'
								viewBox='0 0 353.877 192.802'
								pos='absolute'
								top={["-80%", null, "-90%"]}
								left='0'
								transform={["rotate(7deg)", null, undefined]}
							>
								<path
									id='Path_19'
									data-name='Path 19'
									d='M-2033.143,7922.238c-20.067-60.759-340.043-56.942-329.426,17.91,5.044,35.555,93.888,44.429,172.719,42.382,87.373-2.269,164.918-19.312,156.707-60.292-15.641-78.057-278.2-56.812-329.426,17.91'
									transform='translate(-37.86 8320.525) rotate(166)'
									fill='none'
									stroke='#0083ff'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='5'
								/>
							</Box>
							<Heading
								color='yellow.300'
								fontSize={["md", "xl", "3xl"]}
								transform={["rotate(-7deg)", null, "rotate(-15deg)"]}
							>
								Coming soon
							</Heading>
						</Box> */}
						<FullLogo w={["100%", 480, 680]} h='auto' mt={[2, null, 6]} />
					</Box>
					<Text fontSize='2xl' color='red.400' fontWeight='700'>
						29 Apr - 1 May
					</Text>
					<Text
						fontSize={["sm", "md", "lg"]}
						color='yellow.400'
						fontWeight='600'
						align='center'
						px={10}
					>
						Sardar Vallabhbhai Patel Institute of Technology, Vasad
					</Text>
					<Flex
						gap='8'
						// p='10'
						flexWrap='wrap'
						flexDir='column'
						justifyContent='center'
					>
						<Box
							className='apply-button'
							data-hackathon-slug='hacksvit2022'
							data-button-theme='blue'
							style={{ height: "48px", width: "200px" }}
						/>
						<a href='https://discord.gg/KZZzD8a7PY' target='_blank'>
							<Button
								py='1.5'
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
					<Box as='svg' viewBox='0 0 645.453 446.241' ps='6'>
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

			<Container maxW='container.xl' my='4'>
				<Heading size='2xl' mb='4'>
					About
				</Heading>
				<Flex flexDir={["column", null, "row"]} align='center'>
					<Text fontSize='xl'>
						HackSVIT found its roots in the common aim of providing an agile platform
						for young hacking enthusiasts. Join us for a 36 hour long action-packed
						event where like-minded people gather to manifest their ideas into reality
						in the premises of Sardar Vallabhbhai Institute of Technology, Vasad.
					</Text>
					<Box h='full' rounded='xl' bg='gray.700' w='full'></Box>
				</Flex>
			</Container>

			<Container maxW='container.xl' pb='6'>
				<Flex align='flex-end' gap='4' mb='12'>
					<Heading size='2xl'>Theme</Heading>
					<Box as='svg' viewBox='0 0 370.202 403.333' maxW='sm' mb='2'>
						<path
							id='Path_11'
							data-name='Path 11'
							d='M2453.5,364.489c-5.933,366.581-395.6,242.217-351.524,136.694s256.881,149.144,0,249.306'
							transform='translate(-2090.921 -356.868)'
							fill='none'
							stroke='#ffca39'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='15'
						/>
					</Box>
				</Flex>
				<ThemeCard />
			</Container>

			{/* <Container maxW='container.xl' pb='6'>
				<Flex align='flex-end' gap='4' mb='12'>
					<Heading size='2xl'>Speakers & Judges</Heading>
					<Box as='svg' viewBox='0 0 661.099 359.579' maxW='lg' mb='2'>
						<path
							data-name='Path 14'
							d='M1929.157,5045.173c21.265,294.752-134.373,288.267-279.152,184.251s-209.538,142.455-364.223,159.051'
							transform='translate(-1277.525 -5037.153)'
							fill='none'
							stroke='#fe0169'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='15'
						/>
					</Box>
				</Flex>
				<Speaker />
			</Container> */}

			{/* <Container maxW='container.xl' pb='6'>
				<Box as='svg' viewBox='0 0 361.402 196.332' my='4' ps='20' maxW='lg'>
					<path
						id='Path_13'
						data-name='Path 13'
						d='M1561.374,5106.938c11.287,54.063-42.777,184.755-148.436,104.747s-164.169-37.368-181.967,0-14.01,74.487-14.01,74.487'
						transform='translate(-1209.059 -5098.064)'
						fill='none'
						stroke='#0083ff'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='15'
					/>
				</Box>
				<Flex align='flex-end' gap='4' mb='4'>
					<Heading size='2xl'>Prizes</Heading>
				</Flex>
				<Box h='80' rounded='xl' bg='gray.700' w='full'></Box>
			</Container> */}

			<Container maxW='container.xl' pb='6'>
				<Flex align='flex-end' gap='4' mb='12'>
					<Heading size='2xl'>Sponsors</Heading>
					<Box as='svg' viewBox='0 0 370.202 403.333' maxW='sm' mb='2'>
						<path
							id='Path_15'
							data-name='Path 15'
							d='M2453.5,364.489c-5.933,366.581-395.6,242.217-351.524,136.694s256.881,149.144,0,249.306'
							transform='translate(-2090.921 -356.868)'
							fill='none'
							stroke='#ffca39'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='15'
						/>
					</Box>
				</Flex>
				<Sponsors />
			</Container>

			{/* <Container maxW='container.xl' pb='6' my='12'>
				<Flex align='flex-end' gap='4' mb='12'>
					<Heading size='2xl'>Team</Heading>
				</Flex>
				<Team />
			</Container> */}

			<Container maxW='container.xl' pb='6' my='12'>
				<Flex align='flex-end' gap='4' mb='12'>
					<Heading size='2xl'>Presented By</Heading>
				</Flex>
				<Organization />
			</Container>

			<Container maxW='container.xl' pb='6' my={20}>
				<Flex align='flex-end' gap='4' mb='12'>
					<Heading fontSize={[24, 36, 48]}>(FAQ) Frequently asked questions</Heading>
				</Flex>
				<FAQs />
			</Container>

			<Footer />
		</>
	);
}
