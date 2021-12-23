import {
    Container,
    Heading,
    Image,
    SimpleGrid,
    Text,
    Center,
    Tabs,
    TabList,
    Tab,
    useColorModeValue,
    TabPanels,
    TabPanel,
    Stack,
    IconButton,
} from "@chakra-ui/react";
import { Router } from "next/dist/client/router";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function DepartmentTab({ department }) {
    return (
        <Tab
            color={useColorModeValue("teal.900", "teal.50")}
            _selected={{
                bg: "green.100",
                color: "green.900",
            }}
        >
            {department}
        </Tab>
    );
}

function Member({ name, image, post }) {
    return (
        <Center
            flexDirection="column"
            py={6}
            onClick={() => window.open("google.com", "_blank")}
            background="teal"
            width="220px"
            height="300px"
            borderRadius="5"
        >
            <Image
                borderRadius="5"
                boxSize="180px"
                objectFit="cover"
                src={image}
                alt={name}
            />
            <Text pt="1" fontWeight="bold" fontSize="20" textAlign="center">
                {name}
            </Text>
            <Text pt="0" fontWeight="bold" fontSize="sm" textAlign="center">
                {post}
            </Text>
            {/* <Stack direction="horizontal">
                <IconButton variant="ghost" icon={<BsLinkedin />} />
                <IconButton variant="ghost" icon={<BsGithub />} />
            </Stack> */}
        </Center>
    );
}

export default function Team() {
    return (
        <Container maxW={"6xl"} py="12">
            {/* <Heading textAlign="center">Team that made it all possible</Heading> */}
            <Tabs variant="soft-rounded" colorScheme="teal">
                <TabList justifyContent="center" my="4" flexWrap="wrap">
                    <DepartmentTab department="Core Team" />
                    <DepartmentTab department="Web & Graphics" />
                    <DepartmentTab department="Tech" />
                    <DepartmentTab department="Non-Tech" />
                    <DepartmentTab department="Promotion" />
                    <DepartmentTab department="Decoration" />
                    <DepartmentTab department="Finance" />
                    <DepartmentTab department="OTS" />



                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimpleGrid
                            placeItems={"center"}
                            pt="4"
                            minChildWidth="15rem"
                            columns={[1, 3, 3]}
                        >
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid
                            placeItems={"center"}
                            pt="4"
                            minChildWidth="15rem"
                            columns={[1, 3, 3]}
                        >
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid
                            placeItems={"center"}
                            pt="4"
                            minChildWidth="15rem"
                            columns={[1, 3, 3]}
                        >
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid
                            placeItems={"center"}
                            pt="4"
                            minChildWidth="15rem"
                            columns={[1, 3, 3]}
                        >
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                            <Member
                                name="Darshil Rathod"
                                post="Co-Head"
                                image="/members/test.jpg"
                            />
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}
