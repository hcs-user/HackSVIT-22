import { MinusIcon } from "@chakra-ui/icons";
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
import { PlusIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import FAQ_DATA from "../data/faq.json";

const FAQItem = ({ question, answer }: { question: string; answer: ReactNode }) => (
    <AccordionItem>
        {({ isExpanded }) => (
            <>
                <AccordionButton _focus={{ shadow: "none" }} px="4" py="8">
                    {isExpanded ? (
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
                    )}
                    <Text flex="1" textAlign="left" fontSize={["md", "xl", "2xl"]} fontWeight="600">
                        {question}
                    </Text>
                </AccordionButton>
                <AccordionPanel ps="16" pb="4" fontSize={["sm", "lg", "xl"]}>
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