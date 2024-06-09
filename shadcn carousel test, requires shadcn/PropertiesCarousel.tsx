import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PropertiesCarousel = (props:any) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop:true
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          <CarouselItem>{props.item}</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default PropertiesCarousel;
