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
import Navbar from "@components/Navbar";
import Speaker from "@components/Speaker";
import ThemeCard from "@components/ThemeCard";

export default function Home() {
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
					<Box pos='absolute' top='-1rem' left='-7rem'>
						<Box
							as='svg'
							viewBox='0 0 353.877 192.802'
							pos='absolute'
							top='-90%'
							left='0'
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
						<Heading color='yellow.300' size='lg' transform='rotate(-15deg)'>
							Coming soon
						</Heading>
					</Box>
					<FullLogo h={[40, "60px", 120]} w='auto' />
					<Text fontSize='2xl' color='red.400' fontWeight='700'>
						29 Apr - 1 May
					</Text>
					<Flex gap='8' p='10'>
						<Button colorScheme='blue' size='lg'>
							Register Now
						</Button>
						<Button
							colorScheme='gray'
							size='lg'
							variant='outline'
							borderColor='blue.400'
							borderWidth='2px'
						>
							Join Discord
						</Button>
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
						imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper
						malesuada proin libero nunc consequat interdum varius sit amet mattis
						vulputateimperdiet massa tincidunt nunc pulvinar sapien
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
							strokeLinejoin='round'
							strokeWidth='15'
						/>
					</Box>
				</Flex>
				<ThemeCard />
			</Container>

			<Container maxW='container.xl' pb='6'>
				<Flex align='flex-end' gap='4' mb='12'>
					<Heading size='2xl'>Speakers & Judges</Heading>
					<Box as='svg' viewBox='0 0 661.099 359.579' maxW='md' mb='2'>
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
			</Container>

			<Container maxW='container.xl' pb='6'>
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
			</Container>
		</>
	);
}
