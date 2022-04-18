import {
	Container,
	Flex,
	Heading,
	Text,
	useBreakpoint,
	VStack,
} from "@chakra-ui/react";
import { format, formatDistance } from "date-fns";
import SCHEDULE from "../data/schedule.json";

export default function Schedule() {
	const breakpoint = useBreakpoint();

	return (
		<Container maxW='container.xl'>
			<Heading size='2xl'>Schedule</Heading>
			{(breakpoint == "lg" || breakpoint == "xl" || breakpoint == "2xl") && (
				<Flex gap='6' py='8'>
					{SCHEDULE.map(({ date, activities }, i) => (
						<>
							<VStack w='full' align='start'>
								<Heading>
									<Text as='span' fontWeight='400'>
										Day {i + 1}.
									</Text>{" "}
									{format(new Date(date), "MMM d, cccc")}
								</Heading>
								<VStack spacing='3' pt='4' w='full' align='start'>
									{activities.map(({ startTime, activity }, j) => {
										const dateTime = date + " " + startTime;
										// const active = formatDistance(
										// 	new Date(date + " " + SCHEDULE[i].activities[j + 1].startTime),
										// 	new Date(dateTime)
										// );
										// console.log(active);

										return (
											<Flex
												key={j}
												px='2'
												py='1'
												// bg={active ? "cyan.600" : undefined}
												rounded='base'
												w='full'
											>
												<Text me={4} minW='20' textAlign='right'>
													{format(new Date(dateTime), "hh:mm a")}
												</Text>
												<Text fontWeight='600'>{activity} </Text>
											</Flex>
										);
									})}
								</VStack>
							</VStack>
						</>
					))}
				</Flex>
			)}
		</Container>
	);
}
