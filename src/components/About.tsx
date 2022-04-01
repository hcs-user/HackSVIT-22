import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Waypoint } from "react-waypoint";

export default function About() {
	let [shouldPlay, updatePlayState] = useState(false);

	return (
		<Waypoint
			onEnter={() => updatePlayState(true)}
			onLeave={() => updatePlayState(false)}
		>
			<Container maxW='container.xl' my='4' as={Flex}>
				<Box>
					<Heading size='2xl' mb='4'>
						About
					</Heading>
					<Flex flexDir={["column", null, "row"]} align='center'>
						<Text fontSize='xl'>
							HackSVIT found its roots in the common aim of providing an agile platform
							for young hacking enthusiasts. Join us for a 36 hour long action-packed
							event where like-minded people gather to manifest their ideas into
							reality in the premises of Sardar Vallabhbhai Institute of Technology,
							Vasad.
						</Text>
						<Box h='full' rounded='xl' bg='gray.700' w='full'></Box>
					</Flex>
				</Box>
				<AspectRatio
					minW='320px'
					w='full'
					maxW='lg'
					ratio={16 / 9}
					mx='auto'
					rounded='md'
					overflow='hidden'
				>
					<ReactPlayer
						playing={shouldPlay}
						volume={0.05}
						on
						controls
						width='100%'
						height='100%'
						url={`https://www.youtube.com/watch?v=VYYQwkd4L_M`}
					/>
				</AspectRatio>
			</Container>
		</Waypoint>
	);
}
