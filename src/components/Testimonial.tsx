import { Box, Container, Flex, Heading } from "@chakra-ui/react";

export default function Testimonial() {
	return (
		<Container id='themes' maxW='container.xl' pb='6'>
			<Flex align='flex-end' gap='4' mb='12'>
				<Heading size='2xl'>Testimonial</Heading>
				<Box as='svg' viewBox='0 0 370.202 403.333' maxW='244' mb='2'>
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
			<div
				style={{
					overflow: "hidden",
					paddingBottom: "56.25%",
					position: "relative",
					height: 0,
				}}
			>
				<iframe
					width='100%'
					src='https://www.youtube.com/embed/nPVyts_UO7A'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen={true}
					style={{
						left: 0,
						top: 0,
						height: "100%",
						width: "100%",
						position: "absolute",
					}}
				></iframe>
			</div>
		</Container>
	);
}
