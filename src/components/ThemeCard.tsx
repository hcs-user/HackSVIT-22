import { Box, Flex } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EducationDoodle } from "./svgs"
export default function ThemeCard(){
    return (
        <>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> 
          <Flex flexDirection='column' bg='gray.700' rounded='xl' w='fit-content' px='8' py='6'>
            <EducationDoodle w='60' height='auto'/>
        </Flex>
    </SwiperSlide>
    
      <SwiperSlide> 
          <Flex flexDirection='column' bg='gray.700' rounded='xl' w='fit-content' px='8' py='6'>
            <EducationDoodle w='60' height='auto'/>
        </Flex>
    </SwiperSlide>
    
      <SwiperSlide> 
          <Flex flexDirection='column' bg='gray.700' rounded='xl' w='fit-content' px='8' py='6'>
            <EducationDoodle w='60' height='auto'/>
        </Flex>
    </SwiperSlide>
    
      ...
    </Swiper>
       
        </>
    )
}