import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Container,
	Heading,
	Icon,
	Text,
} from "@chakra-ui/react";

const FAQItem = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => (
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
					<Text
						flex="1"
						textAlign="left"
						fontSize="2xl"
						fontWeight="600"
					>
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
		<Container py="8" maxW="container.lg" zIndex="100">
			<Heading fontSize={["3xl", null, null, "4xl"]} mb="8">
				Frequently asked questions
			</Heading>
			<Accordion allowToggle allowMultiple>
				<FAQItem
					question="Who can participate?"
					answer="Everyone is welcome to apply, be it students,
							professionals or turing-test certified androids. As
							long as you wish to learn something, we'll be
							waiting to see you. If you are under 18 years of age, we’ll need a parental consent form."
				/>
				<FAQItem
					question="Does it cost anything?"
					answer="HackSVIT is 100% free. You do not have to spend anything!"
				/>
				<FAQItem
					question="Can I bring a project that was built earlier?"
					answer="We apologize, but all the hackathon's projects should be developed during the event from scratch. All hackers will be strictly monitored for any kind of plagiarism or cheating."
				/>
			</Accordion>
		</Container>
	);
}
