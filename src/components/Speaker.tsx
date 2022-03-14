import { Heading, Img, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Speaker() {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={5}
            grabCursor={true}
            breakpoints={{
                280: {
                    slidesPerView: 1.4,
                },
                620: {
                    slidesPerView: 2.4,
                },
                720: {
                    slidesPerView: 3.2,
                },
                960: {
                    slidesPerView: 4.2,
                },
                1150: {
                    slidesPerView: 5.4,
                },
            }}
        >
            <SwiperSlide>
                <Stack alignItems="center" w='fit-content'>
                    <Img src="https://picsum.photos/200" h="60" w="48" rounded='xl' />
                    <Heading fontSize='xl'>Mr Sathwara</Heading>
                    <Text>Speaker</Text>
                </Stack>
            </SwiperSlide>
            <SwiperSlide>
                <Stack alignItems="center" w='fit-content'>
                    <Img src="https://picsum.photos/200" h="60" w="48" rounded='xl' />
                    <Heading fontSize='xl'>Mr Sathwara</Heading>
                    <Text>Speaker</Text>
                </Stack>
            </SwiperSlide>            <SwiperSlide>
                <Stack alignItems="center" w='fit-content'>
                    <Img src="https://picsum.photos/200" h="60" w="48" rounded='xl' />
                    <Heading fontSize='xl'>Mr Sathwara</Heading>
                    <Text>Speaker</Text>
                </Stack>
            </SwiperSlide>            <SwiperSlide>
                <Stack alignItems="center" w='fit-content'>
                    <Img src="https://picsum.photos/200" h="60" w="48" rounded='xl' />
                    <Heading fontSize='xl'>Mr Sathwara</Heading>
                    <Text>Speaker</Text>
                </Stack>
            </SwiperSlide>           
            <SwiperSlide>
                <Stack alignItems="center" w='fit-content'>
                    <Img src="https://picsum.photos/200" h="60" w="48" rounded='xl' />
                    <Heading fontSize='xl'>Mr Sathwara</Heading>
                    <Text>Speaker</Text>
                </Stack>
            </SwiperSlide>
            <SwiperSlide>
                <Stack alignItems="center" w='fit-content'>
                    <Img src="https://picsum.photos/200" h="60" w="48" rounded='xl' />
                    <Heading fontSize='xl'>Mr Sathwara</Heading>
                    <Text>Speaker</Text>
                </Stack>
            </SwiperSlide>
            <SwiperSlide>
                <Stack alignItems="center" w='fit-content'>
                    <Img src="https://picsum.photos/200" h="60" w="48" rounded='xl' />
                    <Heading fontSize='xl'>Mr Sathwara</Heading>
                    <Text>Speaker</Text>
                </Stack>
            </SwiperSlide>
            <SwiperSlide>
                <Stack alignItems="center" w='fit-content'>
                    <Img src="https://picsum.photos/200" h="60" w="48" rounded='xl' />
                    <Heading fontSize='xl'>Mr Sathwara</Heading>
                    <Text>Speaker</Text>
                </Stack>
            </SwiperSlide>
        </Swiper>
    )
}