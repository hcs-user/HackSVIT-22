import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Container,
	Heading,
	Icon,
	Link,
	Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const DISCORD_LINK = "https://discord.gg/8sBegK2hK9";

const FAQ_DATA = [
	{
		question: "Who can participate in the hackathon?",
		answer:
			"Everyone is welcome to apply, be it students, professionals or turing-test certified androids. As long as you wish to learn something, we'll be waiting to see you. If you are under 18 years of age, we’ll need a parental consent form.",
	},
	{
		question: "Are there any fees to participate?",
		answer: "Nope. HackSVIT is free of cost and open for all.",
	},
	{
		question: "Do I need a team?",
		answer: (
			<>
				Yes! keeping overall fairness and productivity in mind, participants will be required to have
				teams of <b>EXACTLY 4 people</b>.
			</>
		),
	},
	{
		question: "What if I don't have a team?",
		answer: (
			<>
				No worries, head on to the{" "}
				<Link href={DISCORD_LINK} target="_blank" color="red.300">
					Discord channel
				</Link>{" "}
				and meet people in the{" "}
				<code>
					<b>#find-my-team</b>
				</code>{" "}
				channel.
			</>
		),
	},
	{
		question: "Can I bring a project that was built earlier?",
		answer:
			"We apologize, but all the hackathon's projects should be developed during the event from scratch. All hackers will be strictly monitored for any kind of plagiarism or cheating.",
	},
];

const FAQItem = ({ question, answer }: { question: string; answer: ReactNode }) => (
	<AccordionItem>
		{({ isExpanded }) => (
			<>
				<AccordionButton _focus={{ shadow: "none" }} px="4" py="8">
					{/* {isExpanded ? (
											<Icon
												as={MinusIcon}
												me="4"
												h="4"
												w="4"
											/>
										) : (
											<Icon
												as={PlusIcon}
												me="4"
												h="4"
												w="4"
											/>
										)} */}
					<Icon as={AccordionIcon} me="4" h="8" w="8" />
					<Text flex="1" textAlign="left" fontSize="2xl" fontWeight="600">
						{question}
					</Text>
				</AccordionButton>
				<AccordionPanel ps="16" pb="4" fontSize="lg">
					{answer}
				</AccordionPanel>
			</>
		)}
	</AccordionItem>
);

export default function FAQs() {
	return (
		<Container py="20" maxW="container.lg" zIndex="100">
			<Heading fontSize={["3xl", null, null, "4xl"]} mb="8">
				Frequently asked questions
			</Heading>
			<Accordion allowToggle allowMultiple>
				{FAQ_DATA.map(({ question, answer }) => (
					<FAQItem question={question} answer={answer} />
				))}
			</Accordion>
		</Container>
	);
}
