import { Accordion, AccordionItem, AccordionButton, Box, AccordionPanel, AccordionIcon, Container, Heading } from "@chakra-ui/react"


export default function Faq() {
    return (
        <Container mb={10} maxW="3xl">
            <Heading mb={4}>FAQs</Heading>
            <Accordion>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                What is HackSvit?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Hack SVIT is a 36 hour long hackathon initiative by Hack Club SVIT & Coding Club SVIT that aims to give a platform to the new age innovators and give them amazing opportunities to get a headstart into the Tech World.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                When and where is HackSvit?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Hack SVIT is a 36 hour in person hackathon from 11th to 13th Feb 2022 in SVIT Vasad.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Who can attend?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        All students including undergraduate, graduate and high school students with any background are welcome!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Do I need experience?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        No experience is necessary. We will have plenty of mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at HackSvit!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>

                                Who will own the IP (Intellectual Property) Rights to the project
                                that I have built?

                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        The developer/developers of the web/mobile application will have all rights and own the IP of the project. However, all code needs to be in public domain (open source) so that it can be evaluated by the judges.                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Does it cost anything?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Hack This Fall is 100% free. You do not have to spend anything!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Can I bring my previous project to the hackathon?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        We apologize, but all hackathon's projects should be developed during the event from scratch. We want honest conditions for all hackers. That's why all code should be done during the hackathon.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>

                                What is the Code of Conduct?

                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        We want to ensure a positive experience for all participants. We will be following Devfolio's Code of Conduct, we encourage you to read it here.                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>


                                Don't find my question listed here What can I do?


                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        You can always contact us at hello@hackclubsvit.co and we would be more than happy to help you.
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>
        </Container >
    )
}