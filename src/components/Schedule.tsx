import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	IconButton,
	Text,
	useBreakpoint,
	useCounter,
	VStack,
} from "@chakra-ui/react";
import { format, formatDistance } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import SCHEDULE from "../data/schedule.json";

const MotionBox = motion(Box);

export default function Schedule() {
	const breakpoint = useBreakpoint();
	const { valueAsNumber, increment, decrement, isAtMin, isAtMax } = useCounter({
		defaultValue: 0,

		keepWithinRange: true,
		step: 1,
		min: 0,
		max: 2,
	});

	return (
		<Container maxW='container.xl'>
			<Flex justify='space-between' align='center'>
				<Heading size='2xl'>Schedule</Heading>
				<Text color='gray.400' fontSize='sm'>
					*All the mentioned times are in IST timezone
				</Text>
				<HStack display={["initial", null, "none"]}>
					<IconButton
						aria-label='Previous'
						icon={<BiLeftArrow />}
						disabled={isAtMin}
						onClick={() => decrement()}
					/>
					<IconButton
						aria-label='Next'
						icon={<BiRightArrow />}
						disabled={isAtMax}
						onClick={() => increment()}
					/>
				</HStack>
			</Flex>
			{breakpoint == "lg" || breakpoint == "xl" || breakpoint == "2xl" ? (
				<Flex gap='6' py='8'>
					{SCHEDULE.map(({ date, activities }, i) => (
						<>
							<VStack w='full' align='start'>
								<Text ml='5'>
									{/* <Text as='span' fontWeight='400'>
										Day {i + 1}.
									</Text>{" "}
									{format(new Date(date), "MMM d, cccc")} */}
									<Text fontSize='2xl'>Day {i + 1}.</Text>
									<Heading fontSize='3xl' color='orange.300'>
										{format(new Date(date), "MMMM d, cccc")}
									</Heading>
								</Text>
								<VStack spacing='3' pt='4' w='full' align='start'>
									{activities.map(({ startTime, activity, valid }, j) => {
										const dateTime = date + " " + startTime;
										// const active = formatDistance(
										// 	new Date(date + " " + SCHEDULE[i].activities[j + 1].startTime),
										// 	new Date(dateTime)
										// );

										// const active = i == 0 && j == 0;
										// console.log(active);

										return (
											valid && (
												<Flex
													key={j}
													px='2'
													py='1'
													// bg={active ? "yellow.500" : undefined}
													rounded='base'
													w='full'
													align='center'
												>
													<Text
														fontSize='lg'
														me={4}
														minW='20'
														textAlign='right'
														fontWeight='200'
													>
														{format(new Date(dateTime), "hh:mm a")}
													</Text>
													<Heading fontSize='lg' fontWeight='600'>
														{activity}{" "}
													</Heading>
												</Flex>
											)
										);
									})}
								</VStack>
							</VStack>
						</>
					))}
				</Flex>
			) : (
				// {SCHEDULE.map(({ date, activities }, i) => (
				<>
					<VStack w='full' align='start' my='2'>
						<AnimatePresence exitBeforeEnter>
							<MotionBox
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								key={valueAsNumber}
							>
								{/* <Text> */}
								{/* <Text as='span' fontWeight='400'>
									Day {i + 1}.
								</Text>{" "}
								{format(new Date(date), "MMM d, cccc")} */}
								<Text fontSize='2xl'>Day {valueAsNumber + 1}.</Text>
								<Heading fontSize='3xl' color='orange.300'>
									{format(new Date(SCHEDULE[valueAsNumber].date), "MMMM d, cccc")}
								</Heading>
								{/* </Text> */}

								<VStack spacing='3' pt='4' w='full' align='start'>
									{SCHEDULE[valueAsNumber].activities.map(
										({ startTime, activity, valid }, j) => {
											const dateTime = SCHEDULE[valueAsNumber].date + " " + startTime;
											// const active = formatDistance(
											// 	new Date(date + " " + SCHEDULE[i].activities[j + 1].startTime),
											// 	new Date(dateTime)
											// );

											// const active = i == 0 && j == 0;
											// console.log(active);

											return (
												valid && (
													<Flex
														key={j}
														px='2'
														py='1'
														// bg={active ? "yellow.500" : undefined}
														rounded='base'
														w='full'
														align='center'
													>
														<Text
															fontSize='lg'
															me={4}
															minW='20'
															textAlign='right'
															fontWeight='200'
														>
															{format(new Date(dateTime), "hh:mm a")}
														</Text>
														<Heading fontSize='lg' fontWeight='600'>
															{activity}{" "}
														</Heading>
													</Flex>
												)
											);
										}
									)}
								</VStack>
							</MotionBox>
						</AnimatePresence>
					</VStack>
				</>
				// ))}
			)}
		</Container>
	);
}
