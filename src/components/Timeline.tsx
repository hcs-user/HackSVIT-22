import {
	Box,
	Flex,
	Heading,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";

const STAGES = [
	{
		title: "March 10th",
		description: "Pre-registration",
		active: true,
		color: "blue",
	},
	{
		title: "March 20th",
		description: "Registration phase I",
		active: true,
		color: "orange",
	},
	{
		title: "April 5th",
		description: "Registration phase II",
		color: "pink",

		active: false,
	},
	{
		title: "April 20th",
		description: "Registrations Close",
		active: false,
	},
];

export default function Timeline() {
	return (
		<Flex
			flexDir={["column", null, "row"]}
			justify='space-between'
			// align={["start", null, "center"]}
			pt='16'
			pb='4'
			overflow='hidden'
		>
			{STAGES.map(({ title, description, active, color }, i) => (
				<Flex
					key={i}
					flexBasis={`${100 / STAGES.length}%`}
					flexDir={["row-reverse", null, "column"]}
					align='center'
					pos='relative'
					// mx={[0, null, 4]}
					my={[4, null, 0]}
					maxW={["420px", null, "100%"]}
				>
					{/* {i < STAGES.length - 1 && ( */}
					<Box
						zIndex='2'
						display={i == 0 ? ["none", null, "initial"] : "initial"}
						as='svg'
						h={["full", null, 2]}
						w={[2, null, "full"]}
						fill='none'
						pos='absolute'
						top={["-78%", null, 8]}
						right={[8, null, "54%"]}
						stroke={active ? `${color}.300` : "gray.200"}
						strokeWidth={useBreakpointValue([30, null, 20])}
						borderRadius='full'
						overflow='hidden'
						viewBox={useBreakpointValue(["0 0 1 346", "0 0 1 346", "0 0 921 2"])}
					>
						<line
							x1='0'
							x2={useBreakpointValue([0, 0, "100%"])}
							y1={useBreakpointValue(["100%", "100%", 0])}
						/>
					</Box>
					{/* )} */}
					{i == STAGES.length - 1 && (
						<Box
							display={["none", null, "initial"]}
							zIndex='2'
							as='svg'
							h={["full", null, 2]}
							w={[2, null, "full"]}
							fill='none'
							pos='absolute'
							top={["78%", null, 8]}
							right={[8, null, "-54%"]}
							stroke={active ? `${color}.300` : "gray.200"}
							strokeWidth='20'
							borderRadius='full'
							overflow='hidden'
							viewBox={useBreakpointValue(["0 0 1 346", "0 0 1 346", "0 0 921 2"])}
						>
							<line
								x1='0'
								x2={useBreakpointValue([0, 0, "100%"])}
								y1={useBreakpointValue(["100%", "100%", 0])}
							/>
						</Box>
					)}
					<Box
						zIndex='5'
						h='12'
						w='12'
						minW='12'
						rounded='full'
						bg={active ? `${color}.300` : "gray.200"}
						m='3'
					/>
					<VStack
						align={["end", null, "center"]}
						textAlign={["right", null, "center"]}
					>
						<Heading size='lg' color={active ? `${color}.300` : "white"}>
							{title}
						</Heading>
						<Text color='gray.100'>{description}</Text>
					</VStack>
				</Flex>
			))}
		</Flex>
	);
}
