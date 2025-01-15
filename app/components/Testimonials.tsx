import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "John Doe",
    role: "Head Chef",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    content:
      "This site has helped me discover amazing new recipes! The instructions are clear, and the photos are stunning.",
  },
  {
    name: "Jane Doe",
    role: "Pastry Chef",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    content:
      "I highly recommend this site to all cooking enthusiasts. The recipes are diverse and always delicious.",
  },
  {
    name: "John Smith",
    role: "Home Cook",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    content:
      "Thanks to this site, I've been able to impress my family with restaurant-quality dishes. The recipes are easy to follow and always tasty.",
  },
  {
    name: "Jane Smith",
    role: "Nutritionist",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    content:
      "This site is a goldmine for healthy and balanced recipes. I love being able to filter recipes based on my dietary needs.",
  },
  {
    name: "Richard Doe",
    role: "Food Blogger",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    content:
      "As a food blogger, I always find inspiration on this site. The recipes are creative and well-explained.",
  },
  {
    name: "Gordon Doe",
    role: "Private Chef",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    content:
      "This site is my secret to preparing incredible meals at home. The recipes are tested and approved by professional chefs.",
  },
];
const Testimonials = () => {
  return (
    <section className="py-32 ">
      <div className="container">
        <Carousel className="w-60 sm:max-w-4xl lg:w-full">
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
                <div className="h-full p-1">
                  <div className="flex h-full flex-col justify-between rounded-lg border p-6">
                    <q className="leading-7 text-foreground/70">
                      {testimonial.content}
                    </q>
                    <div className="mt-6 flex gap-4 leading-5">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
