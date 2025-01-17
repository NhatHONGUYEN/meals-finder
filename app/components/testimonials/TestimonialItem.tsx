import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface TestimonialItemProps {
  testimonial: {
    content: string;
    avatar: string;
    name: string;
    role: string;
  };
}

export default function TestimonialItem({ testimonial }: TestimonialItemProps) {
  return (
    <div className="h-full p-1">
      <div className="flex h-full flex-col justify-between rounded-lg border p-6">
        <q className="leading-7 text-foreground/70">{testimonial.content}</q>
        <div className="mt-6 flex gap-4 leading-5">
          <Avatar className="size-9 rounded-full ring-1 ring-input">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
