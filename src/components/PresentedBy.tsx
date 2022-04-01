import { Container, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";

export default function PresentedBy() {
	return (
		<Container maxW='container.xl' pb='6' my='12'>
			<Flex align='flex-end' gap='4' mb='12'>
				<Heading size='2xl'>Presented By</Heading>
			</Flex>
			<Flex gap='12' py='10' flexWrap='wrap'>
				<Img src='hcs.png' h={["75", null, "120"]} w='auto' />
				<Img src='codingclub.png' h={["75", null, "120"]} w='auto' />
				{/* <Img src='/sponsors/svit.png' h='150' w='auto' /> */}
			</Flex>
		</Container>
	);
}
