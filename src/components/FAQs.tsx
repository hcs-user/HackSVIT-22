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
import FAQ_DATA from "../data/faq.json";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const FAQItem = ({
	question,
	answer,
}: {
	question: string;
	answer: ReactNode;
}) => (
	<AccordionItem>
		{({ isExpanded }) => (
			<>
				<AccordionButton _focus={{ shadow: "none" }} px='4' py='8'>
					{isExpanded ? (
						<Icon as={AiOutlineMinus} me='4' h='6' w='6' />
					) : (
						<Icon as={AiOutlinePlus} me='4' h='6' w='6' />
					)}
					<Text
						flex='1'
						textAlign='left'
						fontSize={["md", "xl", "2xl"]}
						fontWeight='600'
					>
						{question}
					</Text>
				</AccordionButton>
				<AccordionPanel ps='16' pb='4' fontSize={["sm", "lg", "xl"]}>
					{answer}
				</AccordionPanel>
			</>
		)}
	</AccordionItem>
);

export default function FAQs() {
	return (
		<Accordion allowToggle allowMultiple>
			{FAQ_DATA.map(({ question, answer }) => (
				<FAQItem question={question} answer={answer} />
			))}
		</Accordion>
	);
}
