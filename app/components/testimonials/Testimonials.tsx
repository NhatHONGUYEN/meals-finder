import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "../../data/data";
import TestimonialItem from "./TestimonialItem";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container">
        <Carousel className="w-80 sm:max-w-4xl md:w-3/4 md:mx-auto lg:w-full">
          <div className="mb-8 flex justify-between px-1 lg:mb-12">
            <h2 className="text-2xl font-semibold lg:text-5xl">Meals Addict</h2>
            <div className="flex items-center space-x-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
          <CarouselContent>
            {testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={idx}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialItem testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
