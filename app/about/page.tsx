import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Info } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <p className="text-base/7 font-semibold text-indigo-600">Welcome to</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Recipes for Everyone
        </h1>
        <p className="mt-6 text-xl/8">
          Discover delicious and easy-to-make recipes for every taste and skill
          level. Whether you&apos;re a beginner or an experienced chef,
          you&apos;ll find inspiration for your daily meals right here.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Our site offers a wide selection of recipes, from appetizers to
            desserts, and everything in between. Each recipe comes with photos,
            detailed instructions, and tips to ensure your success every time.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircle
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Simple Recipes.
                </strong>{" "}
                Easy-to-follow recipes with common ingredients.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircle
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Healthy Options.
                </strong>{" "}
                Balanced and nutritious choices for a varied diet.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircle
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Gourmet Delights.
                </strong>{" "}
                Savory dishes for every occasion.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Whether you&apos;re looking for ideas for a family dinner, a meal
            with friends, or just a personal treat, our site offers a variety of
            choices to satisfy all your culinary desires.
          </p>
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            From Everyday Meals to Special Occasions
          </h2>
          <p className="mt-6">
            Our recipes cover a wide range of dishes, from quick and easy meals
            to more elaborate preparations for special occasions. Each recipe is
            tested and approved to ensure perfect results every time.
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “This site is a goldmine for food lovers. The recipes are clear,
                the photos are mouthwatering, and the results are always
                delicious.”
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
                <strong className="font-semibold text-gray-900">
                  Rémy Tran
                </strong>{" "}
                – Home Chef
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Explore our recipe categories and get inspired for your next meal.
            Whether you&apos;re looking for new ideas or classic recipes,
            you&apos;ll find everything you need right here.
          </p>
        </div>
        <figure className="mt-16">
          <video
            src="/aboutVideo.mp4"
            className="w-1/2 h-1/2 rounded-lg object-cover"
            autoPlay
            loop
            muted
          ></video>
          <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <Info
              aria-hidden="true"
              className="mt-0.5 size-5 flex-none text-gray-300"
            />
            A selection of recipes for every taste.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Everything You Need to Cook Like a Pro
          </h2>
          <p className="mt-6">
            Our recipes come with practical tips and tricks to help you succeed
            at every step. Whether you&apos;re a beginner or an experienced
            cook, you&apos;ll find valuable resources here to improve your
            culinary skills.
          </p>
          <p className="mt-8">
            Discover our guides and tutorials to master basic techniques and
            chef secrets. With our recipes and advice, you&apos;ll be ready to
            impress your guests and enjoy delicious meals with your family.
          </p>
        </div>
      </div>
    </div>
  );
}
