import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";

export default function ContentSection() {
  return (
    <div className="mt-10 max-w-2xl">
      <p>
        Our site offers a wide selection of recipes, from appetizers to
        desserts, and everything in between. Each recipe comes with photos,
        detailed instructions, and tips to ensure your success every time.
      </p>
      <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
        {[
          {
            title: "Simple Recipes.",
            description: "Easy-to-follow recipes with common ingredients.",
          },
          {
            title: "Healthy Options.",
            description: "Balanced and nutritious choices for a varied diet.",
          },
          {
            title: "Gourmet Delights.",
            description: "Savory dishes for every occasion.",
          },
        ].map((item, index) => (
          <li key={index} className="flex gap-x-3">
            <CheckCircle
              aria-hidden="true"
              className="mt-1 size-5 flex-none text-indigo-600"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                {item.title}
              </strong>{" "}
              {item.description}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        Whether you&apos;re looking for ideas for a family dinner, a meal with
        friends, or just a personal treat, our site offers a variety of choices
        to satisfy all your culinary desires.
      </p>
      <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
        From Everyday Meals to Special Occasions
      </h2>
      <p className="mt-6">
        Our recipes cover a wide range of dishes, from quick and easy meals to
        more elaborate preparations for special occasions. Each recipe is tested
        and approved to ensure perfect results every time.
      </p>
      <figure className="mt-10 border-l border-indigo-600 pl-9">
        <blockquote className="font-semibold text-gray-900">
          <p>
            “This site is a goldmine for food lovers. The recipes are clear, the
            photos are mouthwatering, and the results are always delicious.”
          </p>
        </blockquote>
        <figcaption className="mt-6 flex gap-x-4">
          <Avatar className="size-7 rounded-full">
            <AvatarImage
              src="https://shadcnblocks.com/images/block/avatar-2.webp"
              alt="Rémy Tran"
            />
          </Avatar>
          <div className="text-sm/6">
            <strong className="font-semibold text-gray-900">Rémy Tran</strong> –
            Home Chef
          </div>
        </figcaption>
      </figure>
      <p className="mt-10">
        Explore our recipe categories and get inspired for your next meal.
        Whether you&apos;re looking for new ideas or classic recipes,
        you&apos;ll find everything you need right here.
      </p>
    </div>
  );
}
